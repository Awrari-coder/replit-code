import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Paintbrush, 
  PenTool, 
  Presentation, 
  Play, 
  Video,
  Share2,
  BarChart3,
  MessageSquare,
  TrendingUp,
  Bot,
  Hash,
  Star
} from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Graphic Design",
    description: "Professional logos, social media graphics, flyers, packaging, and infographics tailored to your brand."
  },
  {
    icon: PenTool,
    title: "Custom Illustrations",
    description: "Original, on-demand illustrations that bring your ideas to life with creativity and precision."
  },
  {
    icon: Presentation,
    title: "Presentation Design",
    description: "Engaging slide decks that captivate your audience and enhance your message."
  },
  {
    icon: Play,
    title: "Motion Graphics",
    description: "Dynamic animated graphics and enhanced video elements that grab attention."
  },
  {
    icon: Video,
    title: "Video & Reel Editing",
    description: "Professional video editing and social media reel creation to maximize engagement."
  },
  {
    icon: Share2,
    title: "Social Media Strategy",
    description: "Comprehensive strategy development, content planning, and cross-platform integration."
  },
  {
    icon: BarChart3,
    title: "Social Analytics",
    description: "Detailed social media analytics, reporting, and performance optimization."
  },
  {
    icon: MessageSquare,
    title: "Community Management",
    description: "Active engagement with your audience through comments, DMs, and brand mentions."
  },
  {
    icon: TrendingUp,
    title: "Social Media Advertising",
    description: "Targeted ad campaigns across Facebook, Instagram, LinkedIn, TikTok, and Twitter."
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Smart chatbots, automation tools, and AI-powered content optimization."
  },
  {
    icon: Hash,
    title: "Content Strategy",
    description: "Hashtag research, trend monitoring, and content scheduling for maximum impact."
  },
  {
    icon: Star,
    title: "Reputation Management",
    description: "Proactive brand monitoring, review management, and profile optimization."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Comprehensive Design & Marketing Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to elevate your brand and grow your business, 
            powered by AI and delivered by experts
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold tracking-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}