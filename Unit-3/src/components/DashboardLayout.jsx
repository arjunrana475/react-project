import { Outlet, NavLink } from "react-router-dom";
import { useUser } from "../hooks/useUser.js";

export default function DashboardLayout() {
        const { user, dispatch} = useUser();
    
    return (
        <div>
                <nav>
                <NavLink to='/dashboard/profile'
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 font-bold" : "text-gray-500"
                    }
                >Profile</NavLink>
                <NavLink to='/dashboard/settings'
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 font-bold" : "text-gray-500"
                    }
                >Settings</NavLink>
                <NavLink to='/dashboard/orders'
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 font-bold" : "text-gray-500"
                    }
                >Orders</NavLink>
                <button
                    onClick={() => dispatch({ type: "logout"})}>
                    logout
                </button>
                
                </nav>
        <div>
                <h1>Dashboard</h1>
                <div>
                    <h2>Profile Page</h2>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Role: {user.role}</p>
                </div>
                <button onClick={() => dispatch({ type: "changeName", payload: "Aman" })}>Change name</button> <br />
                <button onClick={() => dispatch({ type: "changeEmail", payload: "aman@gmail.com" })}>Change email</button> <br />
                <button onClick={() => dispatch({ type: "changeRole", payload: "admin" })}>Change role</button> <br />
                <button onClick={() => dispatch({ type: "reset" })}>Reset</button> <br />

            <nav>
                <p>Sidebar</p>
            </nav>
            
            

            <main>
                {<Outlet/>}
            </main>
        </div>
        </div>
    );
}