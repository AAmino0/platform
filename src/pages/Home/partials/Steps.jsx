import React from "react";
import { motion } from "framer-motion";
import { UserPlus, CreditCard, CalendarClock, GraduationCap } from "lucide-react"; // Icônes modernes
import { TbArrowBigRightLines, TbArrowBigDownLines } from "react-icons/tb"; // Flèches stylisées

function Steps() {
  return (
    <section className="py-24 px-6 lg:px-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center">
      {/* Titre principal */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-bold mb-16 leading-tight"
      >
        Step-by-Step to <span className="text-orange-500">Your Goals</span>
      </motion.h2>

      {/* Étapes (ligne sur desktop, colonne sur mobile) */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 w-full">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            {/* Étape */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              {/* Icône modernisée dans un cercle beige */}
              <div className="bg-orange-100 p-7 md:p-8 rounded-full flex items-center justify-center shadow-lg">
                <step.icon className="w-14 h-14 text-gray-800 dark:text-gray-900" />
              </div>

              {/* Numéro */}
              <h3 className="text-3xl md:text-4xl font-bold mt-4">{index + 1}</h3>

              {/* Texte */}
              <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300">{step.title}</p>
            </motion.div>

            {/* Flèche sauf pour le dernier élément */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="flex justify-center items-center h-16 md:h-auto"
              >
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// Liste des étapes avec nouvelles icônes modernes
const steps = [
  { title: "Register", icon: UserPlus },
  { title: "Choose a Plan", icon: CreditCard },
  { title: "Book a Session", icon: CalendarClock },
  { title: "Start Learning", icon: GraduationCap },
];

export default Steps;
