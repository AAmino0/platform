import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import SuccessModal from "./partials/SuccessModal";
import ProcessingModal from "./partials/ProcessingModal";
import { Input } from "@headlessui/react";
import { Button } from "@headlessui/react";

const ResetPassword = () => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const resetPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      setIsProcessing(true);
      try {
        // Simulating API call (replace with actual API)
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success("Password reset successfully!", { style: { background: "#F97316", color: "white" } });
        setIsSuccessOpen(true);
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

      {/* Reset Password Form */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition">
        <motion.div
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Reset Password</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Enter a new password for your account.</p>

          {/* Form */}
          <form className="mt-6 space-y-4" onSubmit={formik.handleSubmit}>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300 text-start">New Password</label>
              <Input
                type="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter new password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-1 text-start">{formik.errors.password}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300 text-start">Confirm Password</label>
              <Input
                type="password"
                name="confirmPassword"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Confirm password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1 text-start">{formik.errors.confirmPassword}</p>
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
              {isProcessing ? "Processing..." : "Reset Password"}
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Modals */}
      <SuccessModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} message="Your password has been successfully reset." />
      <ProcessingModal isOpen={isProcessing} message="Processing..." />
    </>
  );
};

export default ResetPassword;
