import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const RequireAuth = ({children}) => {
    const auth = useAuth();
    if (auth.token) {
        return children;
    }
    else return <Navigate to={"/"}></Navigate>
}

export default RequireAuth;