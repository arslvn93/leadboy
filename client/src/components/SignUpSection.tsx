import { useState } from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from '@tanstack/react-query';
import { leadFormSchema } from '@shared/schema';
import { Zap, Star, Send, UserPlus } from 'lucide-react';

const SignUpSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof leadFormSchema>>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      leadsPerMonth: ""
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof leadFormSchema>) => {
      const response = await apiRequest('POST', '/api/leads', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "RAD! You're all set!",
        description: "Your quest will begin shortly. We'll be in touch soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "BUMMER! Submission failed",
        description: error.message || "Please try again later",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: z.infer<typeof leadFormSchema>) {
    mutation.mutate(data);
  }

  const leadsOptions = [
    { value: "less-than-10", label: "Less than 10" },
    { value: "10-50", label: "10-50" },
    { value: "51-100", label: "51-100" },
    { value: "101-500", label: "101-500" },
    { value: "500+", label: "500+" },
  ];

  return (
    <section id="signup" className="py-16 md:py-24 px-4 bg-[#00FFFF] relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-15" style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff00ff' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: '52px 26px'
      }}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-24 h-6 bg-yellow-300 transform rotate-12 border-4 border-black"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full border-8 border-dashed border-[#FF00FF] animate-spin-slow"></div>
      <div className="absolute top-40 left-10 w-16 h-16 bg-[#FF00FF] transform rotate-45 border-4 border-black"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#FF00FF] border-4 border-black px-8 py-3 transform -rotate-2 shadow-[6px_6px_0_#000] mb-6">
              <h2 className="font-pixel text-2xl md:text-3xl text-white drop-shadow-[2px_2px_0_#000]">POWER UP YOUR LEAD GAME!</h2>
            </div>
            
            <div className="max-w-2xl mx-auto bg-white border-4 border-black p-4 transform rotate-1 shadow-[6px_6px_0_#000]">
              <p className="text-black font-bold">
                Get your custom lead sequence now! Transform your lead generation into a <span className="text-[#FF00FF] font-extrabold">high-score machine</span>!
              </p>
            </div>
          </div>
          
          <div className="bg-white border-8 border-black rounded-lg shadow-[16px_16px_0_rgba(0,0,0,0.2)] relative overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden">
              <div className="bg-yellow-300 transform origin-bottom-right rotate-45 w-40 h-8 absolute -top-10 -left-10 border-b-4 border-black"></div>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
              <div className="bg-[#FF00FF] transform origin-bottom-left rotate-45 w-40 h-8 absolute -top-10 -right-10 border-b-4 border-black"></div>
            </div>
            
            {/* Form content */}
            <div className="p-8 pt-16">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="col-span-1 relative">
                        <FormLabel className="inline-block font-pixel text-sm bg-yellow-300 border-2 border-black px-2 py-1 text-black mb-3 transform -rotate-2">YOUR NAME</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your name" 
                            className="w-full p-4 bg-white border-4 border-black focus:border-[#FF00FF] focus:ring-[#FF00FF]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-[#FF00FF] font-bold mt-1" />
                        {/* Decorative element */}
                        <div className="absolute -right-3 top-1/2 w-6 h-6 bg-[#00FFFF] border-2 border-black transform rotate-45 hidden md:block"></div>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="col-span-1 relative">
                        <FormLabel className="inline-block font-pixel text-sm bg-[#FF00FF] border-2 border-black px-2 py-1 text-white mb-3 transform rotate-1">EMAIL</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your email" 
                            type="email"
                            className="w-full p-4 bg-white border-4 border-black focus:border-[#FF00FF] focus:ring-[#FF00FF]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-[#FF00FF] font-bold mt-1" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="col-span-1 relative">
                        <FormLabel className="inline-block font-pixel text-sm bg-[#00FFFF] border-2 border-black px-2 py-1 text-black mb-3 transform -rotate-1">PHONE</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your phone" 
                            type="tel"
                            className="w-full p-4 bg-white border-4 border-black focus:border-[#FF00FF] focus:ring-[#FF00FF]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-[#FF00FF] font-bold mt-1" />
                        {/* Decorative element */}
                        <div className="absolute -left-3 top-1/2 w-6 h-6 bg-yellow-300 border-2 border-black transform rotate-45 hidden md:block"></div>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem className="col-span-1 relative">
                        <FormLabel className="inline-block font-pixel text-sm bg-yellow-300 border-2 border-black px-2 py-1 text-black mb-3 transform rotate-2">COMPANY</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your company" 
                            className="w-full p-4 bg-white border-4 border-black focus:border-[#FF00FF] focus:ring-[#FF00FF]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-[#FF00FF] font-bold mt-1" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="leadsPerMonth"
                    render={({ field }) => (
                      <FormItem className="col-span-2 relative">
                        <FormLabel className="inline-block font-pixel text-sm bg-[#FF00FF] border-2 border-black px-2 py-1 text-white mb-3 transform -rotate-1">NUMBER OF LEADS PER MONTH</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full p-4 bg-white border-4 border-black focus:border-[#FF00FF] focus:ring-[#FF00FF] font-bold">
                              <SelectValue placeholder="Select lead volume" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="border-4 border-black bg-white">
                            {leadsOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value} className="font-bold">
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-[#FF00FF] font-bold mt-1" />
                      </FormItem>
                    )}
                  />
                  
                  <div className="col-span-2 text-center mt-8">
                    <Button 
                      type="button" 
                      className="bg-[#FF00FF] text-white px-10 py-6 font-bold uppercase border-4 border-black shadow-[6px_6px_0_#000] hover:shadow-[3px_3px_0_#000] hover:translate-y-[3px] hover:translate-x-[3px] transition-all tracking-wide mt-4 w-full md:w-auto relative group"
                      onClick={() => {
                        window.location.href = '/form.html';
                        // Track lead button click if fbq exists
                        if (typeof window.fbq !== 'undefined') {
                          window.fbq('track', 'Lead', {content_name: 'signup_button_click'});
                        }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF] to-[#B026FF] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative flex items-center justify-center">
                        <Zap className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                        <span>BEGIN YOUR QUEST</span>
                        <Star className="ml-2 h-6 w-6 group-hover:animate-spin" />
                      </div>
                    </Button>
                    
                    <p className="text-black font-bold mt-6 transform -rotate-1 inline-block bg-white border-2 border-black px-3 py-1">
                      By signing up, you agree to our <span className="text-[#FF00FF]">totally rad</span> Terms & Privacy Policy
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      
      {/* 90s decorative elements */}
      <div className="absolute -bottom-10 right-20 w-40 h-8 bg-yellow-300 transform -rotate-12 border-4 border-black z-0"></div>
      <div className="absolute bottom-10 right-10 grid grid-cols-4 gap-2 z-0">
        <div className="w-4 h-4 bg-black"></div>
        <div className="w-4 h-4 bg-[#FF00FF]"></div>
        <div className="w-4 h-4 bg-[#00FFFF]"></div>
        <div className="w-4 h-4 bg-yellow-300"></div>
        <div className="w-4 h-4 bg-[#00FFFF]"></div>
        <div className="w-4 h-4 bg-black"></div>
        <div className="w-4 h-4 bg-yellow-300"></div>
        <div className="w-4 h-4 bg-[#FF00FF]"></div>
      </div>
    </section>
  );
};

export default SignUpSection;
