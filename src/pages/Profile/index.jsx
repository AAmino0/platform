import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { FiUpload, FiCamera, FiEdit } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import EditProfileModal from "./EditProfile"; // Import Edit Profile Modal Component
import { useAuth } from "../../contexts/AuthContext";
import UpdatePassword from "./UpdatePassowrd";

const Profile = () => {
  const { user, setUser } = useAuth();
  const [image, setImage] = useState(user?.profile || "/assets/images/default-avatar.png");
  const [loading, setLoading] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        updateProfilePicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateProfilePicture = async (newImage) => {
    setLoading(true);
    try {
      // Simulating API call (Replace with actual API request)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setUser({ ...user, profile: newImage });
      toast.success("Profile picture updated!", {
        style: { background: "#F97316", color: "white" },
      });
    } catch (error) {
      toast.error("Failed to update profile picture.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <div className="p-5 flex items-start justify-center bg-gray-100 dark:bg-gray-900 transition">
        <motion.div
          className="bg-white dark:bg-gray-800 mt-20 shadow-lg rounded-xl p-8 w-full max-w-2xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Profile</h2>

          {/* Profile Picture Section */}
          <div className="mt-6 flex flex-col items-center relative">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-36 h-36 rounded-full overflow-hidden shadow-lg border-4 border-gray-300 dark:border-gray-600"
            >
              <img src={image} alt="Profile" className="w-full h-full object-cover" />
              <label className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition cursor-pointer">
                <FiCamera className="text-lg" />
                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              </label>
            </motion.div>
          </div>

          {/* User Information */}
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold text-gray-900 dark:text-white">{user?.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{user?.email}</p>
          </div>

          {/* Edit Profile Button */}
          <div className="flex items-center justify-center">
            <button
              className="mt-6 flex justify-center items-center cursor-pointer space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
              onClick={() => setIsEditOpen(true)}
            >
              <FiEdit className="text-lg" />
              <span>Edit Profile</span>
            </button>
          </div>
          
        </motion.div>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} />
      <UpdatePassword />
    </>
  );
};

export default Profile;
