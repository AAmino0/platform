import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Input, Button } from "@headlessui/react";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { HiEye, HiEyeOff } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

// Validation Schema avec Yup
const validationSchema = Yup.object({
  name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Formik Hook
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", confirmPassword: "" },
    validationSchema,
    onSubmit: (values) => {
      const loadingToast = toast.loading("Processing...", {
        style: { background: "white", color: "#F97316" },
        className: "dark:bg-gray-800 dark:text-white",
      });

      setTimeout(() => {
        toast.dismiss(loadingToast);
        toast.success("Account created! Redirecting...", {
          duration: 2000,
          style: { background: "#F97316", color: "white" },
          className: "dark:bg-gray-700 dark:text-white",
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      }, 2000);
    },
  });

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Toaster position="top-center" reverseOrder={false} />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-800"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>

        {/* Formulaire d'inscription */}
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="relative">
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700">
              <span className="p-3">
                <AiOutlineUser className="text-gray-500 dark:text-gray-400 w-5 h-5" />
              </span>
              <Input
                type="text"
                name="name"
                className="w-full px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700">
              <span className="p-3">
                <AiOutlineMail className="text-gray-500 dark:text-gray-400 w-5 h-5" />
              </span>
              <Input
                type="email"
                name="email"
                className="w-full px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700">
              <span className="p-3">
                <AiOutlineLock className="text-gray-500 dark:text-gray-400 w-5 h-5" />
              </span>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="p-3 focus:outline-none">
                {showPassword ? (
                  <HiEyeOff className="text-gray-500 dark:text-gray-400 w-5 h-5" />
                ) : (
                  <HiEye className="text-gray-500 dark:text-gray-400 w-5 h-5" />
                )}
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-sm font-medium mb-2">Confirm Password</label>
            <Input
              type="password"
              name="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Confirm your password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit" className="w-full cursor-pointer bg-orange-500 text-white py-3 rounded-md shadow-md hover:bg-orange-600 transition">
              Register
            </Button>
          </motion.div>
        </form>

        {/* Redirection vers connexion */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-orange-500 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
}

export default Register;
