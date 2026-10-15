import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser.js";

export default function Profile() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, dispatch} = useUser();

    function handle() {
        navigate("/dashboard");
    }

    return (
        <div>
            <div>
                <h2>Profile Page</h2>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Role: {user.role}</p>
            </div>
            <button onClick={()=>dispatch({type:"changeName",payload:"Aman"})}>Change name</button> <br />
            <button onClick={()=>dispatch({type:"changeEmail",payload:"aman@gmail.com"})}>Change email</button> <br />
            <button onClick={()=>dispatch({type:"changeRole",payload:"admin"})}>Change role</button> <br />
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button> <br />

            <p>
                Current path: {location.pathname}
            </p>

            <button onClick={handle}>
                Go to Dashboard
            </button>
        </div>
    );
}