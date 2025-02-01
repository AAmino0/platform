import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import SuccessModal from "./SuccessModal";
import ProcessingModal from "./ProcessingModal";
import { Input } from "@headlessui/react";
import { Button } from "@headlessui/react";

const ForgotPassword = () => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values) => {
      setIsProcessing(true);
      try {
        // Simulating API call (replace with actual API request)
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success("Reset link sent successfully!", { style: { background: "#F97316", color: "white" } });
        setIsSuccessOpen(true); // Open success modal
      } catch (error) {
        toast.error("Something went wrong. Try again.");
      } finally {
        setIsProcessing(false);
      }
    },
  });

  return (
    <>
      {/* Toast Notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Forgot Password Form */}
      <div className="min-h-screen flex items-center justify-center p-5 bg-gray-100 dark:bg-gray-900 transition">
        <motion.div
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Forgot Password?</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Enter your email to receive a reset link.</p>

          {/* Form */}
          <form className="mt-6 space-y-4" onSubmit={formik.handleSubmit}>
            <div>
              <label className="block text-sm text-start mb-2 text-gray-600 dark:text-gray-300">Email Address</label>
              <Input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1 text-start">{formik.errors.email}</p>
              )}
            </div>

            <Button
              type="submit"
              className={`w-full mt-4 px-4 py-2 rounded-lg transition cursor-pointer text-white ${
                isProcessing
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600 ring-2 ring-orange-400 focus:ring-orange-500"
              }`}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Send Reset Link"}
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Modals */}
      <SuccessModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} message="A password reset link has been sent to your email." />
      <ProcessingModal isOpen={isProcessing} message="Processing..." />
    </>
  );
};

export default ForgotPassword;
