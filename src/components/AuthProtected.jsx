import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const AuthProtected = ({ children }) => {
  const token = Cookies.get("accessToken");
  return token ? children : <Navigate to="/signup" replace />;
};

export default AuthProtected;
