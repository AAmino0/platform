import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@headlessui/react';
import { ArrowRightIcon } from 'lucide-react';

function Hero() {

  const handleScrollToPlans = () => {
    const element = document.getElementById('plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <>
      <section
        className="min-h-screen text-center items-start justify-center p-4
                  px-6 lg:px-32 py-20 bg-white dark:bg-gray-900
                  text-primary dark:text-primary"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-primary text-4xl mt-20 md:text-6xl font-extrabold leading-tight">
            Flexible Plans for Every Goal
          </h1>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            Choose a plan that fits your needs and start learning with expert mentors today.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          <Button
            onClick={handleScrollToPlans} // Correctly invoke the function
            className="mt-15 max-w-5xl flex justify-center px-15 cursor-pointer bg-orange-500 text-white py-3 rounded-md shadow-md hover:bg-orange-600 transition"
          >
            Show Prices
            <ArrowRightIcon className="w-6 h-6 ml-2" />
          </Button>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
