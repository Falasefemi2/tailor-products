import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ProductLoading() {
    return (
        <div className="container px-4 py-16 md:px-6 md:py-24">
            <Link
                href="/products"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
            </Link>

            <div className="grid gap-12 md:grid-cols-2">
                {/* Image skeleton */}
                <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary/50 animate-pulse" />

                <div className="flex flex-col">
                    {/* Title skeleton */}
                    <div className="h-10 w-3/4 bg-secondary/50 rounded-md animate-pulse" />

                    {/* Price skeleton */}
                    <div className="mt-4 h-8 w-24 bg-secondary/50 rounded-md animate-pulse" />

                    <div className="mt-6 space-y-6">
                        {/* Description section skeleton */}
                        <div>
                            <div className="h-6 w-32 bg-secondary/50 rounded-md animate-pulse" />
                            <div className="mt-2 space-y-2">
                                <div className="h-4 w-full bg-secondary/50 rounded-md animate-pulse" />
                                <div className="h-4 w-full bg-secondary/50 rounded-md animate-pulse" />
                                <div className="h-4 w-3/4 bg-secondary/50 rounded-md animate-pulse" />
                            </div>
                        </div>

                        {/* Details section skeleton */}
                        <div>
                            <div className="h-6 w-24 bg-secondary/50 rounded-md animate-pulse" />
                            <div className="mt-2 space-y-2 pl-5">
                                <div className="h-4 w-full bg-secondary/50 rounded-md animate-pulse" />
                                <div className="h-4 w-full bg-secondary/50 rounded-md animate-pulse" />
                                <div className="h-4 w-full bg-secondary/50 rounded-md animate-pulse" />
                                <div className="h-4 w-3/4 bg-secondary/50 rounded-md animate-pulse" />
                            </div>
                        </div>
                    </div>

                    {/* Buttons skeleton */}
                    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="h-12 bg-secondary/50 rounded-md animate-pulse" />
                        <div className="h-12 bg-secondary/50 rounded-md animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    )
}

