import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { motion } from "framer-motion";
import { Gift, Star, Crown } from "lucide-react";

function Plans() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="plans" className="min-h-screen text-center flex flex-col items-center justify-center px-6 lg:px-32 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-12"
      >
        Choose the Perfect Plan for{" "}
        <span className="text-orange-500">Your Goals</span>
      </motion.h2>

      {/* Toggle: Monthly/Yearly */}
      <div className="flex items-center justify-center mb-12">
        <span
          className={`text-sm md:text-lg ${
            !isYearly ? "text-orange-500 font-semibold" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          Monthly
        </span>
        <Switch
          checked={isYearly}
          onChange={setIsYearly}
          className={`${
            isYearly ? "bg-orange-500" : "bg-gray-300 dark:bg-gray-700"
          } relative cursor-pointer inline-flex items-center h-6 w-12 rounded-full mx-4 transition-colors`}
        >
          <span
            className={`${
              isYearly ? "translate-x-6" : "translate-x-1"
            } inline-block w-5 h-5 transform bg-white dark:bg-gray-300 rounded-full transition-transform`}
          />
        </Switch>
        <span
          className={`text-sm md:text-lg ${
            isYearly ? "text-orange-500 font-semibold" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          Yearly
        </span>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            className={`relative p-8 rounded-lg shadow-lg transition ${
              plan.is_popular
                ? "bg-orange-100 dark:bg-orange-600"
                : "bg-gray-100 dark:bg-gray-800"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Badge for "Most Popular" */}
            {plan.is_popular && (
              <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Most Popular
              </span>
            )}

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <plan.icon className="w-12 h-12 text-orange-500" />
            </div>

            {/* Name and Price */}
            <h3 className="text-xl lg:text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-4xl lg:text-5xl font-extrabold">
              ${isYearly ? plan.price_year : plan.price_month}
              <span className="text-sm font-medium">/{isYearly ? "year" : "month"}</span>
            </p>

            {/* Features */}
            <ul className="mt-4 text-left space-y-2">
              {plan.features.available.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-center text-sm lg:text-base ${
                    feature.includes("No access")
                      ? "text-red-500"
                      : "text-green-500 dark:text-green-400"
                  }`}
                >
                  {feature.includes("No access") ? (
                    <span className="mr-2">✘</span>
                  ) : (
                    <span className="mr-2">✔</span>
                  )}
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              transition={{duration: 0.1}}
              whileTap={{ scale: 0.90 }}
              className={`mt-6 w-full cursor-pointer py-3 rounded-lg  text-white ${
                plan.is_popular
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-gray-500 hover:bg-gray-600"
              } transition`}
            >
              {plan.button_content}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Plan Data
const plans = [
  {
    id: 0,
    name: "Free",
    price_month: 0,
    price_year: 0,
    features: {
      available: [
        "1 free session per month",
        "Limited access to mentors",
        "Basic Resources",
        "No access to premium content",
      ],
    },
    button_content: "Start for Free",
    is_popular: false,
    icon: Gift,
  },
  {
    id: 1,
    name: "Standard",
    price_month: 25,
    price_year: 240,
    features: {
      available: [
        "5 sessions per month",
        "Unlimited access to standard mentors",
        "Access to premium resources",
        "Email support",
      ],
    },
    button_content: "Choose Standard Plan",
    is_popular: true,
    icon: Star,
  },
  {
    id: 2,
    name: "Premium",
    price_month: 50,
    price_year: 480,
    features: {
      available: [
        "Unlimited sessions",
        "Access to expert mentors",
        "Premium resources + exclusive content",
        "Priority support (email + chat)",
      ],
    },
    button_content: "Get Premium Access",
    is_popular: false,
    icon: Crown,
  },
];

export default Plans;
