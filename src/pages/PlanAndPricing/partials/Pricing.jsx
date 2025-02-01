import React from "react";
import { motion } from "framer-motion";
import { Button } from "@headlessui/react";
import { CheckCircle, XCircle } from "lucide-react";

function Pricing() {
  return (
    <section className="min-h-screen px-6 lg:px-32 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-12"
      >
        Compare <span className="text-orange-500">Our Plans</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto"
      >
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm md:text-base">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-4 text-left font-bold border border-gray-300 dark:border-gray-700">
                Feature
              </th>
              <th className="p-4 text-center font-bold border border-gray-300 dark:border-gray-700">
                Free
              </th>
              <th className="p-4 text-center font-bold border border-gray-300 dark:border-gray-700">
                Standard
              </th>
              <th className="p-4 text-center font-bold border border-gray-300 dark:border-gray-700">
                Premium
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : ""}
              >
                <td className="p-4 text-left font-medium border border-gray-300 dark:border-gray-700">
                  {feature.name}
                </td>
                <td className="p-4 text-center border border-gray-300 dark:border-gray-700">
                  {feature.free ? (
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                  )}
                </td>
                <td className="p-4 text-center border border-gray-300 dark:border-gray-700">
                  {feature.standard ? (
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                  )}
                </td>
                <td className="p-4 text-center border border-gray-300 dark:border-gray-700">
                  {feature.premium ? (
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}

// Features Data
const features = [
  { name: "1 free session per month", free: true, standard: true, premium: true },
  { name: "Access to mentors", free: false, standard: true, premium: true },
  { name: "Premium resources", free: false, standard: true, premium: true },
  { name: "Unlimited sessions", free: false, standard: false, premium: true },
  { name: "Priority support", free: false, standard: false, premium: true },
  { name: "Dedicated support team", free: false, standard: true, premium: true },
  { name: "Session recordings", free: false, standard: false, premium: true },
];


export default Pricing;
