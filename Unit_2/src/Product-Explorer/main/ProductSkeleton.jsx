export default function ProductSkeleton() {
    return (
        <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg">

            <div className="w-full h-48 bg-zinc-800 animate-pulse">
            </div>

            <div className="p-4">

                <div className="h-5 bg-zinc-800 rounded animate-pulse">
                </div>

                <div className="h-6 w-24 bg-zinc-800 rounded mt-3 animate-pulse">
                </div>

                <div className="h-10 bg-zinc-800 rounded-lg mt-4 animate-pulse">
                </div>

            </div>
        </div>
    );
}