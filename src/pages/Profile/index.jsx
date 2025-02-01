import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { FiUpload, FiCamera, FiEdit } from "react-icons/fi";
import { useAuth } from "../../contexts/AuthContext"; // ✅ Global Auth Context
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  const { user, setUser } = useAuth();
  const [image, setImage] = useState(user?.profile || "/assets/images/default-avatar.png");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      closeModal();
    } catch (error) {
      toast.error("Failed to update profile picture.");
    } finally {
      setLoading(false);
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition">
        <motion.div
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-2xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Profile</h2>

          {/* Profile Picture Section */}
          <div className="mt-6 flex flex-col items-center relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-36 h-36 rounded-full overflow-hidden shadow-lg border-4 border-gray-300 dark:border-gray-600"
            >
              <img src={image} alt="Profile" className="w-full h-full object-cover" />
              <button
                onClick={openModal}
                className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
              >
                <FiCamera className="text-lg" />
              </button>
            </motion.div>
          </div>

          {/* User Information */}
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold text-gray-900 dark:text-white">{user?.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{user?.email}</p>
          </div>

          {/* Edit Profile Button */}
          <button className="mt-6 flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
            <FiEdit className="text-lg" />
            <span>Edit Profile</span>
          </button>
        </motion.div>
      </div>

      {/* Profile Picture Upload Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 dark:bg-black bg-gray-100 bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
                  <Dialog.Title className="text-lg font-bold text-gray-900 dark:text-white">Update Profile Picture</Dialog.Title>
                  <div className="mt-4">
                    <label className="block text-sm text-gray-600 dark:text-gray-300">Choose a new profile picture:</label>
                    <input type="file" accept="image/*" className="mt-2 w-full" onChange={handleImageUpload} />
                  </div>
                  <div className="mt-6 flex justify-end space-x-2">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={updateProfilePicture}
                      className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                      disabled={loading}
                    >
                      {loading ? "Uploading..." : "Save"}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Profile;
