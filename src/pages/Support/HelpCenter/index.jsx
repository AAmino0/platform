import React, { useState } from "react";
import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

function HelpCenter() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/support/contact-us');
  }
  return (
    <section className="min-h-screen px-6 lg:px-32 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-8"
      >
        How Can We <span className="text-orange-500">Help You?</span>
      </motion.h2>

      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        Find answers to frequently asked questions or contact our support team for assistance.
      </p>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto space-y-6">
        {helpQuestions.map((question, index) => (
          <HelpAccordion key={index} question={question.question} answer={question.answer} />
        ))}
      </div>

      {/* Contact Support */}
      <div className="text-center mt-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="bg-orange-500 text-white px-8 py-3 rounded-md font-semibold shadow-md hover:bg-orange-600 transition"
        >
          Contact Support
        </motion.button>
      </div>
    </section>
  );
}

// Composant Accordéon pour les FAQ
function HelpAccordion({ question, answer }) {
  return (
    <Disclosure>
      {({ open }) => (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md"
        >
          <Disclosure.Button className="flex justify-between w-full text-left font-medium text-lg text-gray-900 dark:text-white">
            {question}
            <ChevronUpIcon className={`w-6 h-6 transform ${open ? "rotate-180" : ""} transition`} />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
            {answer}
          </Disclosure.Panel>
        </motion.div>
      )}
    </Disclosure>
  );
}

// Données des questions fréquentes
const helpQuestions = [
  {
    question: "How do I reset my password?",
    answer: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email.",
  },
  {
    question: "How do I book a session with a mentor?",
    answer: "You can book a session through your dashboard. Select your mentor, choose an available time slot, and confirm your booking.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept major credit cards, PayPal, and other online payment gateways. Secure payment processing is ensured.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription anytime through your account settings. There are no cancellation fees.",
  },
];

export default HelpCenter;
