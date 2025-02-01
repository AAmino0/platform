import { useNavigate } from "react-router-dom";
import axiosClient from "../../interceptors/axiosClient";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/AuthContext"; // ✅ Import Auth Context

const useLogout = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth(); // ✅ Reset user state on logout

  const logout = async () => {
    const loadingToast = toast.loading("Logging out...", {
      style: { background: "white", color: "#F97316" },
      className: "dark:bg-gray-800 dark:text-white",
    });

    try {
      await axiosClient.post("/auth/logout");

      // ✅ Remove token & user data
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      setUser(null); // ✅ Reset auth state immediately

      toast.success("Logged out successfully!", { id: loadingToast });

      setTimeout(() => {
        navigate("/auth/login", { replace: true }); // ✅ Navigate without reloading
      }, 1000);
    } catch (error) {
      toast.error("Failed to logout. Please try again.", { id: loadingToast });
    }
  };

  return { logout };
};

export default useLogout;
