import React from "react";
import { motion } from "framer-motion";

function PrivacyAndPolicy() {
  return (
    <section className="min-h-screen px-6 lg:px-32 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-8"
      >
        Privacy & <span className="text-orange-500">Policy</span>
      </motion.h2>

      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
      </p>

      {/* Sections */}
      <div className="max-w-3xl mx-auto space-y-8">
        {policySections.map((section, index) => (
          <PrivacySection key={index} title={section.title} content={section.content} />
        ))}
      </div>

      {/* Last update */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-12">
        Last updated: <span className="font-semibold">February 2025</span>
      </p>
    </section>
  );
}

// Composant Section de la Politique
function PrivacySection({ title, content }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm">{content}</p>
    </motion.div>
  );
}

// Données des Sections de Politique
const policySections = [
  {
    title: "1. Information We Collect",
    content: "We collect personal information you provide to us when you sign up, including your name, email address, and payment details. We also collect analytical data to improve our services.",
  },
  {
    title: "2. How We Use Your Information",
    content: "Your information is used to provide, maintain, and improve our services. We may also use your email to send important updates and marketing materials, which you can opt out of at any time.",
  },
  {
    title: "3. How We Protect Your Data",
    content: "We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, or misuse.",
  },
  {
    title: "4. Third-Party Services",
    content: "We may use third-party services such as payment processors and analytics tools. These services are governed by their own privacy policies.",
  },
  {
    title: "5. Your Rights",
    content: "You have the right to access, modify, or delete your personal information at any time. Contact our support team if you have any concerns.",
  },
];

export default PrivacyAndPolicy;
