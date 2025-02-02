import { useState } from "react";
import toast from "react-hot-toast";
import axiosClient from "../../interceptors/axiosClient";
import { useNavigate } from "react-router-dom";

const useUpdateInfos = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const update = async (values) => {
    const loadingToast = toast.loading("Processing...", {
      style: { background: "white", color: "#F97316" },
      className: "dark:bg-gray-800 dark:text-white",
    });

    setLoading(true);

    try {
      const response = await axiosClient.put("/auth/update-profile", values);

      // Update user data in local storage
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Show success toast
      toast.success("Your information has been updated successfully!", { id: loadingToast });

      // Navigate to profile page
      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    } catch (err) {
      // Show error toast
      toast.error(err.response?.data?.message || "Something went wrong, please try again.", { id: loadingToast });
    } finally {
      setLoading(false);
    }
  };

  return { update, loading };
};

export default useUpdateInfos;
