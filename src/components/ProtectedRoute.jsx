import { Navigate } from "react-router";
import { useSelector } from 'react-redux'

const ProtectedRoute = ({children}) => {

  const user = useSelector(state => state.auth);

    if (!user.token || !user.role) {
      return <Navigate to="/auth" replace />;
    }
  
    return children;
};

export default ProtectedRoute;