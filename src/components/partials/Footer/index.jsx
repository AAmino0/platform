import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-orange-100 dark:bg-gray-900 text-secondary dark:text-white py-10 px-6 lg:px-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Colonne 1 - Learn & Teach */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Learn & Teach</h3>
          <ul className="space-y-2">
            <li><Link to="/find-a-mentor" className="hover:text-orange-500 transition">Find a Mentor</Link></li>
            <li><Link to="/become-a-mentor" className="hover:text-orange-500 transition">Become a Mentor</Link></li>
            <li><Link to="/pricing" className="hover:text-orange-500 transition">Pricing Plans</Link></li>
          </ul>
        </div>

        {/* Colonne 2 - About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <ul className="space-y-2">
            <li><Link to="/about/about-us" className="hover:text-orange-500 transition">About</Link></li>
            <li><Link to="/about/faqs" className="hover:text-orange-500 transition">FAQs</Link></li>
            <li><Link to="/about/privacy-policy" className="hover:text-orange-500 transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Colonne 3 - Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/support/help-center" className="hover:text-orange-500 transition">Help Center</Link></li>
            <li><Link to="/support/contact-us" className="hover:text-orange-500 transition">Contact Us</Link></li>
            <li><Link to="/support/terms-conditions" className="hover:text-orange-500 transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Colonne 4 - Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-500">Social Media</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <FaInstagram className="w-5 h-5 text-pink-500" />
              <a href="#" className="hover:text-orange-500 transition">Instagram</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaTwitter className="w-5 h-5 text-blue-400" />
              <a href="#" className="hover:text-orange-500 transition">X (Twitter)</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaLinkedin className="w-5 h-5 text-blue-500" />
              <a href="#" className="hover:text-orange-500 transition">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Séparateur */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bas du footer */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-primary font-semibold rounded-md shadow-md cursor-pointer hover:bg-orange-600 transition"
          >
            Platform
          </motion.div>
        </div>

        {/* Boutons Register & Login */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}
            className="bg-orange-500 cursor-pointer text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-orange-600 transition"
          >
            Register
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}
            className="bg-gray-200 cursor-pointer dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Login
          </motion.button>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-400 mt-6">Platform. © Copyright 2025. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
