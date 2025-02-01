import { useState, useEffect } from "react";
import axiosClient from "../../interceptors/axiosClient";
import toast from "react-hot-toast";

const useAuth = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  const [loading, setLoading] = useState(!user); 

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const response = await axiosClient.get("/auth/user");
        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data)); 
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, setUser, loading };
};

export default useAuth;
