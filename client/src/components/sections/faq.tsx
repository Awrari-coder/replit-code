import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the design process work?",
    answer: "Submit your design requests through our platform, and our team will start working on them right away. You'll receive initial designs within the turnaround time specified in your plan, and we'll revise them based on your feedback until you're completely satisfied."
  },
  {
    question: "What types of files do I receive?",
    answer: "You'll receive industry-standard file formats suitable for both web and print. This includes AI, PSD, PDF, PNG, JPG, and SVG files. For videos, we deliver in MP4 format with various resolution options."
  },
  {
    question: "Can I request unlimited revisions?",
    answer: "Yes! We offer unlimited revisions on all designs until you're 100% satisfied with the result. We believe in getting it exactly right for your business."
  },
  {
    question: "How is AI integrated into the design process?",
    answer: "We use AI to enhance our design process by generating initial concepts, optimizing layouts, and ensuring brand consistency. However, all designs are refined and finalized by our professional human designers."
  },
  {
    question: "What if I want to cancel or change my plan?",
    answer: "You can cancel or change your plan at any time. We offer flexible month-to-month subscriptions with no long-term commitments required."
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer: "Yes! For larger organizations with specific needs, we offer custom enterprise solutions with dedicated support, custom integrations, and volume pricing. Contact us to learn more."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
