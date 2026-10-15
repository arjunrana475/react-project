import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks2/useFetch";
import ProductSkeleton from "./ProductSkeleton";

export default function ProductDetails() {
    const { id } = useParams();

    const url = `https://dummyjson.com/products/${id}`;

    const { data, loading, error } = useFetch(url);

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

    return (
        <div className="min-h-screen bg-zinc-950 px-6 py-10">

            <div className="max-w-6xl mx-auto">

                {/* Back Button */}
                <Link
                    to="/products"
                    className="inline-block mb-8 text-zinc-400 hover:text-white transition"
                >
                    ← Back to Products
                </Link>

                {/* Product Details Card */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">

                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* Product Image */}
                        <div className="bg-zinc-800 flex items-center justify-center p-8">
                            <img
                                src={data.thumbnail}
                                alt={data.title}
                                className="w-full max-w-md h-96 object-contain"
                            />
                        </div>

                        {/* Product Information */}
                        <div className="p-8 flex flex-col">

                            <p className="text-sm uppercase tracking-wide text-blue-400 mb-3">
                                {data.category}
                            </p>

                            <h1 className="text-3xl md:text-4xl font-bold text-white">
                                {data.title}
                            </h1>

                            <p className="text-zinc-400 mt-5 leading-relaxed">
                                {data.description}
                            </p>

                            {/* Price */}
                            <div className="mt-6">
                                <p className="text-3xl font-bold text-blue-400">
                                    ${data.price}
                                </p>
                            </div>

                            {/* Rating + Stock */}
                            <div className="flex flex-wrap gap-4 mt-6">

                                <div className="bg-zinc-800 px-4 py-2 rounded-lg">
                                    <p className="text-sm text-zinc-500">
                                        Rating
                                    </p>
                                    <p className="text-white font-semibold">
                                        ⭐ {data.rating}
                                    </p>
                                </div>

                                <div className="bg-zinc-800 px-4 py-2 rounded-lg">
                                    <p className="text-sm text-zinc-500">
                                        Stock
                                    </p>
                                    <p className="text-white font-semibold">
                                        {data.stock} available
                                    </p>
                                </div>

                            </div>

                            {/* Button */}
                            <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
                                Add to Cart
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}