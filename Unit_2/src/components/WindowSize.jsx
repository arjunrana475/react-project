import { useEffect, useState } from "react";

export default function WindoeSize() {
    const [user, setUser] = useState(0);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        const controller = new AbortController();
        async function fetchUser() {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${userId}`,
                    {
                        signal: controller.signal
                    }
                );
                const data = await response.json();
                setUser(data);
            } catch (error) {
                if (error.name === "AbortError") {
                    return;
                }
                console.log("Real error:", error);
            }
        }

        fetchUser();

        return () => {
            controller.abort();
        };
    }, [userId]);

    return (
        <button >
            Increase
        </button>
    );
}