import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import {useAuth} from "../../../contexts/AuthContext"; 
import useLogout from "../../../hooks/Auth/useLogout";

function MobileMenu() {
  const { user, loading } = useAuth(); // ✅ Fetch authenticated user
  const { logout } = useLogout(); // ✅ Logout function
  const [isOpen, setIsOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setAccountMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="md:hidden relative" ref={menuRef}>
      {/* Hamburger Button */}
      <button
        className="text-gray-800 dark:text-white p-2 rounded focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XMarkIcon className="w-8 h-8 text-orange-500" /> : <Bars3Icon className="w-8 h-8 text-orange-500" />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-3 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md"
          >
            <ul className="flex flex-col p-4 space-y-3">
              <li>
                <Link
                  to="/find-a-mentor"
                  className="text-gray-800 dark:text-white hover:text-orange-500 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Find a Mentor
                </Link>
              </li>
              <li>
                <Link
                  to="/book-a-session"
                  className="text-gray-800 dark:text-white hover:text-orange-500 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Session
                </Link>
              </li>
              <li>
                <Link
                  to="/plans-and-pricing"
                  className="text-gray-800 dark:text-white hover:text-orange-500 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Plans
                </Link>
              </li>
              <li>
                <Link
                  to="/become-a-mentor"
                  className="text-gray-800 dark:text-white hover:text-orange-500 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Become a Mentor
                </Link>
              </li>

              {/* Account Dropdown (Mobile) */}
              <li className="relative">
                <button
                  className="flex items-center justify-between w-full bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                  onClick={() => setAccountMenuOpen(!accountMenuOpen)}
                >
                  {loading ? (
                    <span>Loading...</span>
                  ) : user ? (
                    <>
                      <img
                        src={user.profile || "/assets/images/default-avatar.png"}
                        alt="Profile"
                        className="w-6 h-6 rounded-full"
                      />
                      <span>{user.name}</span>
                    </>
                  ) : (
                    <span>Account</span>
                  )}
                  <ChevronDownIcon className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                </button>

                <AnimatePresence>
                  {accountMenuOpen && (
                    <motion.div className="mt-2 w-full bg-white dark:bg-gray-800 shadow-lg rounded-md">
                      <ul className="flex flex-col p-2">
                        {user ? (
                          <>
                            <li>
                              <Link
                                to="/profile"
                                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                                onClick={() => setIsOpen(false)}
                              >
                                Profile
                              </Link>
                            </li>
                            <li>
                              <button
                                onClick={() => {
                                  logout();
                                  setIsOpen(false);
                                }}
                                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-700 dark:text-red-400 rounded"
                              >
                                Logout
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <Link
                                to="/auth/login"
                                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                                onClick={() => setIsOpen(false)}
                              >
                                Login
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/auth/register"
                                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                                onClick={() => setIsOpen(false)}
                              >
                                Register
                              </Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu;
