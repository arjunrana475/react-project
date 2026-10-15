import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "changeName":
            return {
                ...state, name: action.payload
            };

        case "changeEmail":
            return {
                ...state, email: action.payload
            };

        case "increaseAge":
            return {
                ...state, age: state.age+1
            };

        case "reset":
            return {
                ...state, name: "Arjun", email: "arjun@example.com",
                age: 21
            };

        default:
            return state;
    }
}

export default function Counter() {
    const [user, dispatch] = useReducer(reducer, {
        name: "Arjun",
        email: "arjun@example.com",
        age: 21
    });

    return (
        <div>
            <h1>Name : {user.name}</h1>
            <h1>Email : {user.email}</h1>
            <h1>Age : {user.age}</h1>

            <button onClick={() => dispatch({ type: "changeName",payload:"Aman" })}>
                Change Name
            </button>

            <button onClick={() => dispatch({ type: "changeEmail",payload:"aman@gmail.com" })}>
                Change Email
            </button>

            <button
                onClick={() =>
                    dispatch({ type: "increaseAge"})
                }
            >
                Increase Age by 1 
            </button>

            <button onClick={() => dispatch({ type: "reset" })}>
                Reset
            </button>
        </div>
    );
}