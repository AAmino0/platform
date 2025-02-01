import React from "react";
import { motion } from "framer-motion";
import { Video, ShieldCheck, CalendarCheck, BrainCircuit, MoreHorizontal } from "lucide-react"; // Icônes modernes
import { Button } from "@headlessui/react";

function Benefits() {
  return (
    <section className="py-24 px-6 lg:px-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src="/assets/images/learning.png"
          alt="Learning Experience"
          className="w-full max-w-lg"
        />
      </motion.div>

      {/* Contenu texte */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Learning Made Easy and <span className="text-orange-500">Effective</span>
        </h2>
        
        {/* Liste des avantages */}
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <benefit.icon className="w-6 h-6 text-orange-500" />
              <span>{benefit.text}</span>
            </motion.li>
          ))}
        </ul>

        {/* Bouton CTA */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} className="mt-8">
          <Button className="px-6 py-3 bg-orange-500 cursor-pointer text-white
           font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition">
            Register Now
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Liste des avantages avec icônes
const benefits = [
  { text: "One-to-one live video lessons", icon: Video },
  { text: "Certified and Expert Mentors", icon: ShieldCheck },
  { text: "Flexible scheduling", icon: CalendarCheck },
  { text: "Personalized learning paths", icon: BrainCircuit },
  { text: "And More ...", icon: MoreHorizontal },
];

export default Benefits; 
