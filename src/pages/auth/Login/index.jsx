import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Input, Button } from "@headlessui/react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { HiEye, HiEyeOff } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../../../hooks/Auth/useLogin";


// Validation Schema avec Yup
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login, loading, error } = useLogin();

  // Formik Hook
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values) => {

      await login(values.email, values.password);
      
    },
  });

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-800"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

        {/* Formulaire de connexion */}
        <form onSubmit={formik.handleSubmit} className="space-y-5">
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
            <div className="flex items-center justify-between"> 
              <label className="block text-sm font-medium mb-2">Password</label>
              <Link to={'/auth/forgot-password'} className="block text-sm font-medium mb-2 text-primary"> Forgot Passowrd ?</Link>
            </div>
            
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
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-3 focus:outline-none"
              >
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

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit" className="w-full cursor-pointer bg-orange-500 text-white py-3 rounded-md shadow-md hover:bg-orange-600 transition">
              {loading ? 'Logged in ...' : 'Login'}
            </Button>
          </motion.div>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          <span className="px-3 text-gray-500 text-sm">or continue with</span>
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
        </div>

        {/* Google Sign-in */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
          <Button
            className="cursor-pointer w-full flex items-center justify-center space-x-2 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FcGoogle className="w-6 h-6" />
            <span>Sign in with Google</span>
          </Button>
        </motion.div>

        {/* Redirection vers l'inscription */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-orange-500 hover:underline">
            Register
          </Link>
        </p>
      </motion.div>
    </section>
  );
}

export default Login;
