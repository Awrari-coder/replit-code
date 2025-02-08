import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              alt="Our Team"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 mb-6">
              We are a team of digital marketing experts and AI specialists dedicated
              to helping businesses grow their online presence. By combining human
              creativity with artificial intelligence, we deliver exceptional results
              that drive real business growth.
            </p>
            <p className="text-gray-600">
              Our innovative approach has helped hundreds of businesses across various
              industries achieve their digital marketing goals through data-driven
              strategies and cutting-edge AI technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
