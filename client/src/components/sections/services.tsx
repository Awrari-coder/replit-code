import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, MessageSquare, BarChart3, Mail } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Create engaging, SEO-optimized content at scale with our advanced AI algorithms."
  },
  {
    icon: MessageSquare,
    title: "Social Media Automation",
    description: "Automate your social media presence while maintaining authentic engagement."
  },
  {
    icon: BarChart3,
    title: "Ad Copywriting",
    description: "Generate high-converting ad copy using AI-powered insights and optimization."
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Personalized email campaigns that drive engagement and conversions."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Leverage the power of AI to transform your digital marketing strategy
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-primary/10">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-semibold tracking-tight">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}