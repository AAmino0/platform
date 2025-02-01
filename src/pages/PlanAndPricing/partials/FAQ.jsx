import React from "react";
import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";
import { ChevronUpIcon, ChevronDownIcon, InfoIcon, LockIcon } from "lucide-react";

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
      <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
        Find everything you need to know about our plans and pricing.
      </p>

      {/* FAQ Section */}
      <div className="space-y-6 max-w-4xl mx-auto ">
        {faqs.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-100 dark:bg-gray-800  p-6 rounded-lg shadow-lg"
              >
                <Disclosure.Button className="flex justify-between items-center w-full text-left cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <faq.icon className="w-6 h-6 text-orange-500" />
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                  </div>
                  <div className="text-gray-500">
                    {open ? (
                      <ChevronUpIcon className="w-6 h-6" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6" />
                    )}
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="mt-4 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </Disclosure.Panel>
              </motion.div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}

// FAQ Data
const faqs = [
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription anytime through your account settings. There are no cancellation fees.",
    icon: LockIcon,
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 14-day money-back guarantee for annual plans. For monthly plans, refunds are not available.",
    icon: InfoIcon,
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.",
    icon: InfoIcon,
  },
  {
    question: "Is my data secure with you?",
    answer:
      "Absolutely. We use industry-standard encryption to ensure your data is always safe and secure.",
    icon: LockIcon,
  },
  {
    question: "Do you provide discounts for students?",
    answer:
      "Yes, we offer a 20% discount for students. Please contact our support team with proof of enrollment.",
    icon: InfoIcon,
  },
];

export default FAQ;
