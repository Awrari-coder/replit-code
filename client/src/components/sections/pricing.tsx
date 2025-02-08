import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const tiers = [
  {
    name: "Essential",
    price: "999",
    description: "Perfect for small businesses just getting started",
    features: [
      "1 design request at a time",
      "48-hour turnaround",
      "Logo & brand design",
      "Social media graphics",
      "Basic illustrations",
      "Unlimited revisions"
    ]
  },
  {
    name: "Professional",
    price: "1499",
    description: "Ideal for growing businesses with regular design needs",
    features: [
      "2 design requests at a time",
      "24-hour turnaround",
      "All Essential features",
      "Custom illustrations",
      "Presentation design",
      "Basic motion graphics",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "2499",
    description: "For businesses needing comprehensive design solutions",
    features: [
      "4 design requests at a time",
      "Same-day turnaround",
      "All Professional features",
      "Video editing",
      "Advanced motion graphics",
      "Dedicated project manager",
      "API access"
    ]
  }
];

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative h-full ${tier.popular ? 'border-primary shadow-lg' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">${tier.price}</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                  <p className="text-muted-foreground mt-4">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={scrollToContact}
                    className="w-full"
                    variant={tier.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
