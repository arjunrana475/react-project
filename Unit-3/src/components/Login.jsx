import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser.js";

export default function Login() {
    const { dispatch } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    function handleLogin() {
        dispatch({ type: "login" });
        const destination = location.state?.from?.pathname ?? "/dashboard/profile";
        navigate(destination, { replace: true });
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>
                Log in
            </button>
        </div>
    );
}
