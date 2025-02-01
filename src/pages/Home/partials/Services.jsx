import React, { useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@headlessui/react";
import { 
  ChatCircleDots, 
  GlobeHemisphereWest, 
  BookBookmark, 
  GraduationCap, 
  ArrowRight, 
  Atom, 
  Brain, 
  ChalkboardTeacher, 
  Compass 
} from "phosphor-react"; // Icônes modernisées

function Services() {
  const [isSubjects, setIsSubjects] = useState(false);

  return (
    <section className="py-24 px-6 lg:px-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center">
      {/* Titre principal */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-extrabold mb-10"
      >
        From <span className="text-orange-500">Languages</span> to{" "}
        <span className="text-orange-500">School Subjects</span>, We've Got You Covered
      </motion.h2>

      {/* Switcher */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex items-center space-x-6 mb-12"
      >
        <span className={`font-semibold text-lg ${isSubjects ? "text-gray-500" : "text-orange-500"}`}>
          Languages
        </span>
        <Switch
          checked={isSubjects}
          onChange={setIsSubjects}
          className={`relative inline-flex h-10 w-20 items-center rounded-full transition ${
            isSubjects ? "bg-orange-500" : "bg-gray-300 dark:bg-gray-700"
          }`}
        >
          <span
            className={`absolute left-1 top-1 h-8 w-8 rounded-full bg-white shadow-md transition ${
              isSubjects ? "translate-x-10" : "translate-x-0"
            }`}
          />
        </Switch>
        <span className={`font-semibold text-lg ${isSubjects ? "text-orange-500" : "text-gray-500"}`}>
          Subjects
        </span>
      </motion.div>

      {/* Grille des services */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl"
      >
        {isSubjects
          ? subjects.map((subject, index) => (
              <ServiceCard key={index} title={subject.title} icon={subject.icon} />
            ))
          : languages.map((language, index) => (
              <ServiceCard key={index} title={language.title} icon={language.icon} />
            ))}
      </motion.div>
    </section>
  );
}

// Composant pour une carte de service
function ServiceCard({ title, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center justify-center p-6 rounded-2xl bg-orange-100 dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all cursor-pointer w-full max-w-xs"
    >
      <div className="rounded-full text-white flex items-center justify-center">
        <img src={icon} className="w-15 h-15" />
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-wide">{title}</h3>
    </motion.div>
  );
}

// Données pour les langues
const languages = [
  { title: "English", icon: 'assets/icons/united-states.png' },
  { title: "Spanish", icon: 'assets/icons/spain.png' },
  { title: "Dutch", icon: 'assets/icons/germany.png' },
  { title: "French", icon: 'assets/icons/france.png' },
  { title: "Arabic", icon: 'assets/icons/morocco.png' },
  { title: "More !", icon: 'assets/icons/right-arrow.png' },
];

// Données pour les matières scolaires
const subjects = [
  { title: "Mathematics", icon: 'assets/icons/calculator.png' },
  { title: "Science", icon: 'assets/icons/science.png' },
  { title: "History", icon: 'assets/icons/history.png' },
  { title: "Physics", icon: 'assets/icons/relativity.png' },
  { title: "Chemistry", icon: 'assets/icons/periodic-table.png' },
  { title: "More !", icon: 'assets/icons/right-arrow.png' },
];

export default Services;
