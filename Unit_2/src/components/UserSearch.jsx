import { useEffect, useState } from "react";

export default function UserSearch() {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function handleSearch(e) {
        setSearch(e.target.value);
    }

   
    useEffect(() => {
        const controller = new AbortController();
        const timer = setTimeout(() => {
            async function fetchUsers() {
                try {
                    setLoading(true);
                    setError("");
                    const response = await fetch(
                        `https://dummyjson.com/users/search?q=${search}`,
                        {
                            signal: controller.signal,
                        }
                    );
                    if (!response.ok) {
                        throw new Error("Failed to fetch users");
                    }
                    const data = await response.json();
                    setUsers(data.users);
                } catch (err) {
                    if (err.name === "AbortError") {
                        return;
                    }
                    setError(err.message);
                } finally {
                    if(search===this.search)
                    setLoading(false);
                }
            }
            if (search.trim() === "") {
                setUsers([]);
                setLoading(false);
                return;
            }
            fetchUsers();
        }, 500)
        return () => {
            clearTimeout(timer);
            controller.abort();
        };
       
    }, [search]);

    return (
        <div className="min-h-screen bg-slate-950 flex justify-center py-12 px-4">
            <div className="w-full max-w-xl bg-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-800">

                <h1 className="text-3xl font-bold text-slate-100 mb-6 text-center">
                    User Search
                </h1>

                {/* Search */}
                <div className="flex gap-3 mb-6">
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearch}
                        placeholder="Search users..."
                        className="flex-1 bg-slate-800 text-slate-100
                     placeholder-slate-500
                     border border-slate-700 rounded-lg
                     px-4 py-2 outline-none
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />

                </div>

                {/* Loading */}
                {loading && (
                    <p className="text-center text-slate-400">
                        Loading users...
                    </p>
                )}

                {/* Error */}
                {error && (
                    <p className="text-center text-red-400">
                        {error}
                    </p>
                )}

                {/* No results */}
                {!loading && !error && search && users.length === 0 && (
                    <p className="text-center text-slate-400">
                        No users found.
                    </p>
                )}

                {/* Results */}
                <ul className="space-y-3">
                    {users.map((user) => (
                        <li
                            key={user.id}
                            className="bg-slate-800 border border-slate-700
                       rounded-xl p-4
                       hover:border-slate-600
                       transition"
                        >
                            <h2 className="font-semibold text-lg text-slate-100">
                                {user.name}
                            </h2>

                            <p className="text-slate-400 text-sm mt-1">
                                {user.email}
                            </p>

                            <p className="text-slate-500 text-sm">
                                {user.phone}
                            </p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}