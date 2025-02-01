import React from "react";
import { motion } from "framer-motion";

function TermsAndConditions() {
  return (
    <section className="min-h-screen px-6 lg:px-32 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-8"
      >
        Terms & <span className="text-orange-500">Conditions</span>
      </motion.h2>

      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        These Terms and Conditions govern your use of our platform. Please read them carefully before accessing or using our services.
      </p>

      {/* Sections */}
      <div className="max-w-3xl mx-auto space-y-8">
        {termsSections.map((section, index) => (
          <TermsSection key={index} title={section.title} content={section.content} />
        ))}
      </div>

      {/* Last update */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-12">
        Last updated: <span className="font-semibold">February 2025</span>
      </p>
    </section>
  );
}

// Composant Section des Termes
function TermsSection({ title, content }) {
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

// Données des Sections des Termes et Conditions
const termsSections = [
  {
    title: "1. Acceptance of Terms",
    content: "By using our services, you agree to comply with and be legally bound by these Terms and Conditions. If you do not agree, please refrain from using our platform.",
  },
  {
    title: "2. User Responsibilities",
    content: "You agree not to misuse our platform, engage in illegal activities, or violate the rights of others while using our services.",
  },
  {
    title: "3. Payment & Refund Policy",
    content: "All payments made for our services are final and non-refundable unless otherwise stated. We reserve the right to modify our pricing at any time.",
  },
  {
    title: "4. Account Termination",
    content: "We reserve the right to suspend or terminate accounts that violate our terms, engage in fraud, or misuse our services.",
  },
  {
    title: "5. Changes to Terms",
    content: "We may update these Terms and Conditions at any time. It is your responsibility to review them periodically for any changes.",
  },
];

export default TermsAndConditions;
