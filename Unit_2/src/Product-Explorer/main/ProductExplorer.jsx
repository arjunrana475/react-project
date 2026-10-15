import { useState, useEffect } from "react";
import useFetch from "../hooks2/useFetch";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import ProductSkeleton from "./ProductSkeleton";

export default function ProductExplorer() {
    const url = "https://dummyjson.com/products";

    const { data, loading, error } = useFetch(url);

    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [search]);

    if (loading) {
        return (
            <div className="min-h-screen bg-zinc-950 px-6 py-8">
                <div className="max-w-7xl mx-auto">

                    <h1 className="text-4xl font-bold text-white mb-8">
                        Product Explorer
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <ProductSkeleton key={item} />
                        ))}
                    </div>

                </div>
            </div>
        );
    }

    if (error.trim() !== "") {
        return (
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
                <h1 className="text-xl text-red-400">
                    {error}
                </h1>
            </div>
        );
    }

    const categories = [
        ...new Set(data.products.map((pro) => pro.category))
    ];

    const filteredProducts = data.products.filter((pro) => {
        const matchesSearch =
            pro.title
                .toLowerCase()
                .includes(debouncedSearch.toLowerCase());

        const matchesCategory =
            selectedCategory === "all" ||
            pro.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    function handleReset() {
        setSearch("");
        setDebouncedSearch("");
        setSelectedCategory("all");
    }

    return (
        <div className="min-h-screen bg-zinc-950 px-6 py-8">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-8">

                <h1 className="text-4xl font-bold text-white mb-6">
                    Product Explorer
                </h1>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4">

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search products..."
                        className="flex-1 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                    />

                    <select
                        value={selectedCategory}
                        onChange={(e) =>
                            setSelectedCategory(e.target.value)
                        }
                        className="bg-zinc-900 border border-zinc-800 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                    >
                        <option value="all">All Categories</option>

                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                    <button
                        onClick={handleReset}
                        className="px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition"
                    >
                        Reset
                    </button>

                </div>

                {search !== debouncedSearch && (
                    <p className="text-sm text-zinc-500 mt-2">
                        Searching...
                    </p>
                )}
            </div>

            {/* Products */}
            <div className="max-w-7xl mx-auto">

                {filteredProducts.length === 0 ? (

                    <div className="text-center py-20">
                        <h2 className="text-2xl font-semibold text-zinc-300">
                            No products found
                        </h2>

                        <p className="text-zinc-500 mt-2">
                            Try a different search or category.
                        </p>
                    </div>

                ) : (

                    <>
                        <p className="text-2xl font-semibold text-zinc-300 mb-6">
                            Showing {filteredProducts.length}{" "}
                            {filteredProducts.length === 1
                                ? "product"
                                : "products"}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                            {filteredProducts.map((pro) => (
                                <ProductCard key={pro.id}  pro={pro } />
                               

                            ))}

                        </div>
                    </>
                )}

            </div>
        </div>
    );
}