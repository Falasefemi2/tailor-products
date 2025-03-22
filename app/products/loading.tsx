export default function ProductsLoading() {
    return (
        <div className="container px-4 py-16 md:px-6 md:py-24">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div>
                    <div className="h-10 w-48 bg-secondary/50 rounded-md animate-pulse" />
                    <div className="mt-4 h-5 w-96 bg-secondary/50 rounded-md animate-pulse" />
                </div>
            </div>

            <div className="mt-12">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {Array(8)
                        .fill(0)
                        .map((_, i) => (
                            <div key={i} className="overflow-hidden rounded-lg border border-border/50 bg-background shadow-sm">
                                <div className="relative aspect-square overflow-hidden bg-secondary/50 animate-pulse" />
                                <div className="p-4 space-y-3">
                                    <div className="h-5 w-3/4 bg-secondary/50 rounded-md animate-pulse" />
                                    <div className="h-4 w-full bg-secondary/50 rounded-md animate-pulse" />
                                    <div className="h-4 w-1/2 bg-secondary/50 rounded-md animate-pulse" />
                                    <div className="h-5 w-16 bg-secondary/50 rounded-md animate-pulse" />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

