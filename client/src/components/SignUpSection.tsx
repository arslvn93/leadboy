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
        title: "Success!",
        description: "Your quest will begin shortly. We'll be in touch soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Submission failed",
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
    <section id="signup" className="py-12 md:py-24 px-4 bg-gameboy-bg relative">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto gameboy-console">
          <h2 className="font-pixel text-xl md:text-2xl text-gameboy-gray-dark mb-8 text-center">PLAYER REGISTRATION</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel className="block font-pixel text-xs text-gameboy-gray-dark mb-2">YOUR NAME</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your name" 
                        className="pixel-border w-full p-3 bg-white rounded-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel className="block font-pixel text-xs text-gameboy-gray-dark mb-2">EMAIL</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your email" 
                        type="email"
                        className="pixel-border w-full p-3 bg-white rounded-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel className="block font-pixel text-xs text-gameboy-gray-dark mb-2">PHONE</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your phone" 
                        type="tel"
                        className="pixel-border w-full p-3 bg-white rounded-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel className="block font-pixel text-xs text-gameboy-gray-dark mb-2">COMPANY</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your company" 
                        className="pixel-border w-full p-3 bg-white rounded-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="leadsPerMonth"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="block font-pixel text-xs text-gameboy-gray-dark mb-2">NUMBER OF LEADS PER MONTH</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="pixel-border w-full p-3 bg-white rounded-none">
                          <SelectValue placeholder="Select lead volume" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {leadsOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="col-span-2 text-center">
                <Button 
                  type="submit" 
                  className="pixel-button bg-purple-primary text-white px-8 py-4 border-b-4 border-r-4 border-purple-dark hover:border-b-2 hover:border-r-2 transition-all font-bold mt-4 w-full md:w-auto rounded-none"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "PROCESSING..." : "BEGIN YOUR QUEST"}
                </Button>
                <p className="text-xs text-gameboy-gray mt-4">
                  By signing up, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
      
      {/* Pixel art decorations */}
      <div className="absolute bottom-0 left-0 w-24 h-24 hidden md:block">
        <div className="w-8 h-8 bg-gameboy-green absolute bottom-0 left-0"></div>
        <div className="w-8 h-8 bg-gameboy-green absolute bottom-0 left-8"></div>
        <div className="w-8 h-8 bg-gameboy-green absolute bottom-8 left-0"></div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-24 h-24 hidden md:block">
        <div className="w-8 h-8 bg-gameboy-green absolute bottom-0 right-0"></div>
        <div className="w-8 h-8 bg-gameboy-green absolute bottom-0 right-8"></div>
        <div className="w-8 h-8 bg-gameboy-green absolute bottom-8 right-0"></div>
      </div>
    </section>
  );
};

export default SignUpSection;
