import { Navigate } from "react-router-dom";

const GuestRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? <Navigate to="/" replace /> : children;
};

export default GuestRoute;
