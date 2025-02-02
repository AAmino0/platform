import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Transition } from "@headlessui/react";
import { Input, Button } from "@headlessui/react";
import useUpdatePassword from "../../../hooks/Profile/useUpdatePassowrd";

function UpdatePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const { update, loading } = useUpdatePassword();
  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required("Current password is required"),
      newPassword: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Must contain an uppercase letter")
        .matches(/[a-z]/, "Must contain a lowercase letter")
        .matches(/[0-9]/, "Must contain a number")
        .matches(/[@$!%*?&#]/, "Must contain a special character")
        .required("New password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      update({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
        newPassword_confirmation: values.confirmPassword,
      });
    },
  });

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex items-start p-5 justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition">
        <motion.div
          className="bg-white dark:bg-gray-800 shadow-lg mb-5 mt-5 rounded-xl p-8 w-full max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xl font-bold text-primary dark:text-white mb-4">
            Update your password
          </h2>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Current Password */}
            <div className="relative">
              <Input
                type="password"
                name="currentPassword"
                placeholder="Current Password"
                className="w-full p-3 rounded-lg bg-gray-100
                 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-yellow-600 outline-none"
                {...formik.getFieldProps("currentPassword")}
              />
              {formik.touched.currentPassword && formik.errors.currentPassword && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.currentPassword}</p>
              )}
            </div>

            {/* New Password */}
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                placeholder="New Password"
                className="w-full p-3 focus:ring-yellow-600 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring-2 outline-none"
                {...formik.getFieldProps("newPassword")}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeSlashIcon className="w-5 h-5 text-gray-500" /> : <EyeIcon className="w-5 h-5 text-gray-500" />}
              </button>
              
            </div>
            {formik.touched.newPassword && formik.errors.newPassword && (
                <p className="text-red-500 text-sm -mt-3">{formik.errors.newPassword}</p>
              )}

            {/* Confirm Password */}
            <div className="relative">
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full p-3 focus:ring-yellow-600 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring-2  outline-none"
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                disabled={loading}
                type="submit"
                className="w-full bg-primary cursor-pointer text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition-all  focus:ring-2  focus:ring-yellow-600 outline-none"
              >
                {loading ? 'Updating password...' : 'Update Password'}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default UpdatePassword;
