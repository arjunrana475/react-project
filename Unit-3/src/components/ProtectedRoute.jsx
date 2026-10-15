import { Navigate, Outlet ,useLocation} from "react-router-dom";
import { useUser } from "../hooks/useUser.js";

export default function ProtectedRoute() {
    const { user } = useUser();
    const location = useLocation();

    if (!user.isAuthenticated) {
        return <Navigate to="/login"
            state={{from:location}}
            replace />;
    }

    return <Outlet />;
}
