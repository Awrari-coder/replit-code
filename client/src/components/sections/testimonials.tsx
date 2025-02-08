import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The AI-powered design solutions have transformed how we create content. The turnaround time is incredible, and the quality is consistently high.",
    author: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechStart Inc.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "Their unlimited design service has been a game-changer for our social media presence. We get professional designs whenever we need them.",
    author: "Michael Chen",
    title: "Social Media Manager",
    company: "Growth Co.",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    quote: "The presentation designs they create are stunning. We've received numerous compliments on our pitch decks since working with them.",
    author: "Emma Thompson",
    title: "CEO",
    company: "Innovation Labs",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Trusted by Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our clients say about our design services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>
                        {testimonial.author[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
