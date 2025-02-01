import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../interceptors/axiosClient";
import { toast } from "react-hot-toast";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const register = async (name, email, password, confirmPassword, role = "user") => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosClient.post("/auth/register", {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
        role,
      });

      // ✅ Success: Save token & redirect
      localStorage.setItem("t", response.data.token);
      toast.success("Registration successful! Redirecting...");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      // ✅ Handle backend validation errors
      if (err.response?.data?.errors) {
        setError(err.response.data.errors);
        toast.error("Registration failed. Please check your details.");
      } else {
        setError(err.response?.data?.message || "An error occurred");
        toast.error(err.response?.data?.message || "Registration failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
};

export default useRegister;
