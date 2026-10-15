
import { useSearchParams } from "react-router-dom";

const orders = [
    { id: 101, product: "Phone", status: "pending" },
    { id: 102, product: "Laptop", status: "completed" },
    { id: 103, product: "Phone Case", status: "pending" },
    { id: 104, product: "Headphones", status: "cancelled" },
];

export default function Orders() {
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search") ?? "";
    const status = searchParams.get("status") ?? "all";
    const sort = searchParams.get("sort") ?? "asc";

    // Filter orders
    const filteredOrders = orders.filter((order) => {
        const matchesSearch = order.product
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesStatus =
            status === "all" || order.status === status;

        return matchesSearch && matchesStatus;
    });

    // Search handler
    function handleSearch(value) {
        setSearchParams((prev) => {
            if (value) {
                prev.set("search", value);
            } else {
                prev.delete("search");
            }

            return prev;
        }, { replace: true });
    }

    // Status handler
    function handleStatus(value) {
        setSearchParams((prev) => {
            if (value === "all") {
                prev.delete("status");
            } else {
                prev.set("status", value);
            }

            return prev;
        });
    }

    // Sorting handler
    function handleSort(value) {
        setSearchParams((prev) => {
            if (value === "asc") {
                prev.delete("sort");
            } else {
                prev.set("sort", value);
            }

            return prev;
        });
    }

    // Sort a copy of the filtered array
    const sortedOrders = [...filteredOrders].sort((a, b) => {
        return sort === "desc"
            ? b.product.localeCompare(a.product)
            : a.product.localeCompare(b.product);
    });

    // Reset all filters
    function handleReset() {
        setSearchParams({});
    }

    return (
        <div className="mx-auto max-w-3xl space-y-4 p-6">
            <h1 className="text-2xl font-bold">Orders</h1>

            <input
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-lg border p-3"
            />

            <div className="flex flex-wrap gap-3">
                <select
                    value={status}
                    onChange={(e) => handleStatus(e.target.value)}
                    className="rounded-lg border p-3"
                >
                    <option value="all">All statuses</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                </select>

                <select
                    value={sort}
                    onChange={(e) => handleSort(e.target.value)}
                    className="rounded-lg border p-3"
                >
                    <option value="asc">Product name: A → Z</option>
                    <option value="desc">Product name: Z → A</option>
                </select>

                <button
                    onClick={handleReset}
                    className="rounded-lg bg-gray-800 px-4 py-3 text-white hover:bg-gray-700"
                >
                    Reset Filters
                </button>
            </div>

            <p className="text-sm text-gray-500">
                {sortedOrders.length} order(s) found
            </p>

            {sortedOrders.map((order) => (
                <div
                    key={order.id}
                    className="rounded-lg border p-4 shadow-sm"
                >
                    <h2 className="font-semibold">{order.product}</h2>
                    <p className="text-sm text-gray-600">
                        Order #{order.id} · {order.status}
                    </p>
                </div>
            ))}

            {sortedOrders.length === 0 && (
                <p>No matching orders.</p>
            )}
        </div>
    );
}