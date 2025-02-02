import { useState } from "react";
import toast from "react-hot-toast";
import axiosClient from "../../interceptors/axiosClient";
import { useNavigate } from "react-router-dom";

const useUpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const update = async (values) => {
    const loadingToast = toast.loading("Updating password...", {
      style: { background: "white", color: "#F97316" },
      className: "dark:bg-gray-800 dark:text-white",
    });

    setLoading(true);

    try {
      const response = await axiosClient.put("/auth/update-password", values);

      // Success message
      toast.success(response.data.message || "Password updated successfully!", { id: loadingToast });

      // Redirect to profile page after success
      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    } catch (err) {
      // Error message
      toast.error(err.response?.data?.message || "Failed to update password, please try again.", { id: loadingToast });
    } finally {
      setLoading(false);
    }
  };

  return { update, loading };
};

export default useUpdatePassword;
