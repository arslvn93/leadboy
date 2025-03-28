import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import FormPage from "@/pages/FormPage";
import MobileStickyCTA from "@/components/MobileStickyCTA";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/form" component={FormPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <MobileStickyCTA />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
