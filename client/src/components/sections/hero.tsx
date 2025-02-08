import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-background to-primary/5">
      <div className="absolute inset-0 bg-grid-white/25" />
      <div className="container relative mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl/tight md:text-6xl/tight font-extrabold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent tracking-tight">
              AI-Powered Digital Marketing Solutions
            </h1>
            <p className="text-lg/relaxed text-muted-foreground mb-8 max-w-xl">
              Transform your digital presence with our cutting-edge AI technology. 
              We deliver data-driven results through automated content creation, 
              social media management, and targeted advertising campaigns.
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group font-medium"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-video">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="AI Marketing Dashboard"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}