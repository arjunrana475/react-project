import React, { useEffect, useState } from 'react'

export default function UserSelector() {
    const [userId, setUserId] = useState(1);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    
    useEffect(() => {
        const controller = new AbortController();
        async function fetchUser() {
            try {
                setLoading(true);

                const response = await fetch(url, {
                    signal: controller.signal
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }

                const data = await response.json();

                setUser(data);
                setLoading(false);

            } catch (err) {

                if (err.name === "AbortError") {
                    return;
                }

                setError(err.message);
                setLoading(false);
            }
        }
        fetchUser();
        return () => {
            controller.abort();
        };
    }, [userId]);
    return (
        <>
            <h1>User Selector</h1>
            <button onClick={()=>setUserId(1)}>Aman</button>
            <button onClick={()=>setUserId(2)}>Rahul</button>
            <button onClick={() => setUserId(3)}>Amit</button>
            
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {user && !loading &&
                <div>
                    <h2>{user.name}</h2>
                    <p>{ user.email}</p>
                    <p>{ user.phone}</p>
            </div>}
        </>
    )
}
