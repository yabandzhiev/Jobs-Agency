import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext.js";
import { useContext } from "react";

const RoutesGuard = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default RoutesGuard;
