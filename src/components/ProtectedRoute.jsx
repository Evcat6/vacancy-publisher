import { Navigate } from "react-router";

const ProtectedRoute = ({children}) => {


  const parsed = localStorage.getItem(import.meta.env.VITE_APP_STORAGE_KEY);

    if (parsed === null) {
      return <Navigate to="/auth" replace />;
    }
  
    return children;
};

export default ProtectedRoute;