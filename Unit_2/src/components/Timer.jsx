import { useEffect, useState } from "react";

export default function Timer() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Arjun");

    useEffect(() => {
        console.log("SETUP");

        const timer = setInterval(() => {
            setCount(prev => prev + 1);
            console.log("TICK", name);
        }, 2000);

        return () => {
            console.log("CLEANUP");
            clearInterval(timer);
        };
    }, [name]);

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={() => setName("Rahul")}>
                Change Name
            </button>

            <button onClick={() => setCount(prev => prev + 1)}>
                Increase
            </button>
        </div>
    );
}