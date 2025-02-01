import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../interceptors/axiosClient";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    const loadingToast = toast.loading("Processing...", {
      style: { background: "white", color: "#F97316" },
      className: "dark:bg-gray-800 dark:text-white",
    });

    try {
      const response = await axiosClient.post("/auth/login", { email, password });

      // ✅ Store Token & User Data
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      toast.success("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/");
        toast.dismiss(loadingToast);
        window.location.reload();
      }, 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid credentials.");
      toast.dismiss(loadingToast);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;
