import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => { 
        const controller = new AbortController();
        async function fetchData() {
            try {
                setData(null);
            setError("");
            setLoading(true);
                const response = await fetch(url, {
                    signal: controller.signal
                });
                if (!response.ok)  throw new Error("Failed to fetch");
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (err) {
                if (err.name === "AbortError") {
                    return;
                }
                setError(err.message);
                setLoading(false);
            }
        }
        fetchData();
        return () => {
            controller.abort();
        };
    }, [url]);

    return { data, loading, error };
    }