import { motion } from "framer-motion";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full"
    >
      <Hero />
      <Services />
      <Pricing />
      <FAQ />
      <Contact />
    </motion.div>
  );
}