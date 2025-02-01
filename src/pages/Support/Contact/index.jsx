import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { Input, Textarea, Button } from "@headlessui/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  const [loading, setLoading] = useState(false);

  // Validation Schema avec Yup
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Minimum 3 characters").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
  });

  // Formik Hook
  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      toast.loading("Sending your message...", { id: "loading" });

      setTimeout(() => {
        toast.dismiss("loading");
        toast.success("Message sent successfully!");
        setLoading(false);
        formik.resetForm();
      }, 2000);
    },
  });

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-32 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Toaster position="top-center" reverseOrder={false} />
      
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-6"
      >
        Get in <span className="text-orange-500">Touch</span> with Us
      </motion.h2>

      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl">
        Have a question or need assistance? Fill out the form below, and we'll get back to you shortly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {/* Coordonnées */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <ContactInfo icon={<Mail className="w-6 h-6 text-orange-500 dark:text-white" />} title="Email" details="support@platform.com" />
          <ContactInfo icon={<Phone className="w-6 h-6 text-orange-500 dark:text-white" />} title="Phone" details="+1 (800) 123-4567" />
          <ContactInfo icon={<MapPin className="w-6 h-6 text-orange-500 dark:text-white" />} title="Address" details="123 Learning St, Knowledge City, USA" />
        </motion.div>

        {/* Formulaire de Contact */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full"
          onSubmit={formik.handleSubmit}
        >
          {/* Champ Nom */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-md bg-white dark:bg-gray-700 focus:ring-2 focus:ring-orange-500"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Champ Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Your Email</label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-white dark:bg-gray-700 focus:ring-2 focus:ring-orange-500"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Champ Message */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea
              name="message"
              placeholder="Write your message here..."
              className="w-full p-3 rounded-md bg-white dark:bg-gray-700 focus:ring-2 focus:ring-orange-500"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
            )}
          </div>

          {/* Bouton d'envoi */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="submit"
              className="w-full cursor-pointer bg-orange-500 text-white py-3 rounded-md shadow-md hover:bg-orange-600 transition flex items-center justify-center space-x-2"
              disabled={loading}
            >
              <Send className="w-5 h-5" />
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}

// Composant pour afficher une information de contact
function ContactInfo({ icon, title, details }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-orange-100 dark:bg-orange-600 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{details}</p>
      </div>
    </div>
  );
}

export default Contact;
