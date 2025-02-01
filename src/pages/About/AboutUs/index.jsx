import React from "react";
import { motion } from "framer-motion";
import { BriefcaseIcon, UsersIcon, LightbulbIcon, RocketIcon } from "lucide-react";

function AboutUs() {
  return (
    <section className="min-h-screen px-6 lg:px-32 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-12"
      >
        Empowering Learning, <span className="text-orange-500">One Step at a Time</span>
      </motion.h2>
      
      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        At <span className="text-orange-500 font-semibold">Platform</span>, we believe in the power of <span className="font-bold">education</span> to unlock opportunities. 
        Our mission is to provide an <span className="font-bold">accessible, engaging, and effective </span>learning experience for everyone, everywhere.
      </p>

      {/* Key Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {aboutDetails.map((detail, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <detail.icon className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">{detail.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{detail.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Data for about us details
const aboutDetails = [
  {
    title: "Expert Mentors",
    description: "Learn from experienced professionals and educators worldwide.",
    icon: UsersIcon,
  },
  {
    title: "Innovative Learning",
    description: "Engaging courses designed with the latest teaching methodologies.",
    icon: LightbulbIcon,
  },
  {
    title: "Flexible Learning",
    description: "Choose when and how you learn with our self-paced and live sessions.",
    icon: BriefcaseIcon,
  },
  {
    title: "Your Growth, Our Mission",
    description: "We are committed to helping you achieve your learning goals.",
    icon: RocketIcon,
  },
];

export default AboutUs;
