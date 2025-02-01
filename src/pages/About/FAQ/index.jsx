import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";
import { ChevronDownIcon, PlusCircleIcon, MinusCircleIcon } from "lucide-react";

function FAQ() {
  return (
    <section className="min-h-screen px-6 lg:px-32 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-12"
      >
        Got Questions? <span className="text-orange-500">We've Got Answers</span>
      </motion.h2>

      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        Find everything you need to know about our <span className="font-bold">plans, pricing, and features</span>.
      </p>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-6">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

// Composant Accordéon pour chaque FAQ
function FAQItem({ question, answer }) {
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
          <Disclosure.Button className="flex justify-between items-center w-full text-left font-semibold text-lg">
            <span className="text-gray-800 dark:text-gray-200">{question}</span>
            {open ? (
              <MinusCircleIcon className="w-6 h-6 text-orange-500" />
            ) : (
              <PlusCircleIcon className="w-6 h-6 text-gray-500" />
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 text-gray-600 dark:text-gray-300">
            {answer}
          </Disclosure.Panel>
        </motion.div>
      )}
    </Disclosure>
  );
}

// Données des questions et réponses FAQ
const faqData = [
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription anytime through your account settings. There are no cancellation fees.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 7-day free trial on all premium plans. You can try out our features before making a commitment.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, PayPal, and other secure payment options for your convenience.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely! You can upgrade or downgrade your plan anytime based on your learning needs.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we have a 14-day refund policy. If you're not satisfied, you can request a refund within 14 days of purchase.",
  },
];

export default FAQ;
