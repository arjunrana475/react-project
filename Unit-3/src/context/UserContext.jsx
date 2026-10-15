import { createContext, useReducer } from "react";

const initialState = {
    name: "Arjun",
    email: "arjun@example.com",
    role: "user",
    isAuthenticated:false
}

function userReducer(state, action) {
    switch (action.type) {
        case "changeName":
            return {
                ...state,
                name: action.payload
            };
        case "login":
            return {
                ...state,
                isAuthenticated:true
            };
        case "logout":
            return {
                ...state,
                isAuthenticated:false
            };
        case "changeEmail":
            return {
                ...state,
                email: action.payload
            };
        case "changeRole":
            return {
                ...state,
                role: action.payload
            };
        case "reset":
            return initialState;
        default:
            return state;
    }
}

export const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [user, dispatch] = useReducer(userReducer, initialState);
    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}




