import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //Check URL params for password
  const [searchParams] = useSearchParams();
  const password = searchParams.get("password");

  // Check if the password is correct
  if (password === "secret") {
    return children;
  } else {
    return <Navigate to="/unauthorized" replace />;
  }
};

export default ProtectedRoute;
