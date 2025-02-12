
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Header from "@/components/nav/header";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="pt-16">
        <Router />
      </main>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
