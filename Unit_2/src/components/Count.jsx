import { useEffect, useState } from "react";

function Count() {
    // 1. Declare State First
    const [count, setCount] = useState(0);

    // 2. Component Logic / Console Logs
    console.log("Render sees count:", count);

    // 3. Effects at the bottom
    useEffect(() => {
        console.log("Effect");
    }, []);

    useEffect(() => {
        console.log("Effect sees count:", count);
    }, [count]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-[350px] flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-gray-500 text-2xl font-semibold">Count : {count}</h1>

                <button
                    className="bg-blue-500 text-white rounded mt-3 py-2 px-6 hover:bg-blue-600 transition"
                    onClick={() => setCount(count + 1)}
                >
                    Increase
                </button>
            </div>
        </div>
    );
}

export default Count;
