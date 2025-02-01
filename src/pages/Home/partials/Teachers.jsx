import React from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaClock, FaUsers, FaMoneyBillWave } from "react-icons/fa";

function Teachers() {
  return (
    <section className="py-20 px-6 lg:px-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col lg:flex-row items-center justify-between">
      
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="lg:w-1/2"
      >
        <img
          src="/assets/images/teacher.webp" 
          alt="Online Teacher"
          className="w-full max-w-md mx-auto shadow-sm rounded-md"
        />
      </motion.div>

      {/* Texte & Contenu */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Teach, Impact, and <span className="text-orange-500">Get Paid</span> for Your Knowledge.
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Your guidance can change lives, start making an impact today.
        </p>

        {/* Liste des avantages */}
        <ul className="space-y-4 text-lg">
          <li className="flex items-center space-x-3">
            <FaChalkboardTeacher className="w-6 h-6 text-orange-500" />
            <span>One-to-one live video lessons</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaClock className="w-6 h-6 text-orange-500" />
            <span>Flexible scheduling</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaUsers className="w-6 h-6 text-orange-500" />
            <span>Dedicated Support Team</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaMoneyBillWave className="w-6 h-6 text-orange-500" />
            <span>Transparent Payment System</span>
          </li>
          <li className="flex items-center space-x-3">
            <span>And More ...</span>
          </li>
        </ul>

        {/* CTA Bouton */}
        <motion.button
          whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}
          className="mt-6 bg-orange-500 cursor-pointer text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-orange-600 transition"
        >
          Join Now 
        </motion.button>

        {/* Lien secondaire */}
        <p className="mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Learn How It Works!
          </a>
        </p>
      </motion.div>
    </section>
  );
}

export default Teachers;
