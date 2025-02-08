import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              AI-Powered Digital Marketing Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Transform your digital presence with our cutting-edge AI technology. 
              We deliver data-driven results through automated content creation, 
              social media management, and targeted advertising campaigns.
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group"
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
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="AI Technology"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
