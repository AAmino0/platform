import React, { useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@headlessui/react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function Plans() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="py-24 px-6 lg:px-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center">
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-extrabold mb-6"
      >
        Affordable Plans for <span className="text-orange-500">Every User</span>
      </motion.h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        Choose the plan that fits your learning needs.
      </p>

      {/* Toggle Switch Annually / Monthly */}
      <div className="flex items-center space-x-4 mb-12">
        <span
          className={`text-lg font-semibold cursor-pointer ${
            billingCycle === "annually" ? "text-orange-500" : "text-gray-500"
          }`}
          onClick={() => setBillingCycle("annually")}
        >
          Annually
        </span>
        <Switch
          checked={billingCycle === "monthly"}
          onChange={() => setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")}
          className={`${
            billingCycle === "monthly" ? "bg-orange-500" : "bg-gray-300"
          } relative inline-flex items-center h-6 rounded-full w-12 transition`}
        >
          <span
            className={`${
              billingCycle === "monthly" ? "translate-x-7 bg-white" : "translate-x-1 bg-gray-500"
            } inline-block w-5 h-5 transform rounded-full transition`}
          />
        </Switch>
        <span
          className={`text-lg font-semibold cursor-pointer ${
            billingCycle === "monthly" ? "text-orange-500" : "text-gray-500"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </span>
      </div>

      {/* Plans Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`relative bg-orange-100 dark:bg-gray-800 p-6 rounded-3xl text-center shadow-md transition-all ${
              plan.popular ? "border-4 border-blue-500" : "border border-gray-300 dark:border-gray-600"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-b-md">
                Most popular
              </div>
            )}
            <h3 className="text-2xl font-bold">{plan.title}</h3>
            <p className="text-3xl font-extrabold my-4">
              ${billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnually}
              <span className="text-lg font-medium"> / {billingCycle}</span>
            </p>
            <ul className="text-left space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {feature.included ? (
                    <FaCheckCircle className="text-green-500 w-5 h-5" />
                  ) : (
                    <FaTimesCircle className="text-red-500 w-5 h-5" />
                  )}
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-orange-600 transition"
            >
              {plan.cta}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Plans data
const plans = [
  {
    title: "Starter",
    priceMonthly: 10,
    priceAnnually: 100,
    cta: "Get Started Now !!",
    features: [
      { text: "1-on-1 Live Sessions", included: true },
      { text: "Up to 10 Sessions/month", included: true },
      { text: "Limited Session duration (30min)", included: true },
      { text: "Priority Support", included: false },
    ],
  },
  {
    title: "Professional",
    priceMonthly: 25,
    priceAnnually: 250,
    cta: "Step Up Now !!",
    popular: true,
    features: [
      { text: "Custom learning path", included: true },
      { text: "1-on-1 Live Sessions", included: true },
      { text: "Up to 30 Sessions/month", included: true },
      { text: "Limited Session duration (60min)", included: true },
      { text: "Priority Support", included: true },
    ],
  },
  {
    title: "Premium",
    priceMonthly: 50,
    priceAnnually: 500,
    cta: "Experience the Best",
    features: [
      { text: "All in Pro plan", included: true },
      { text: "Unlimited Sessions", included: true },
      { text: "Unlimited Session duration", included: true },
      { text: "Session Recordings", included: true },
    ],
  },
];

export default Plans;
