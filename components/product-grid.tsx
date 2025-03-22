"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import type { Product } from "@/lib/types"
import { useState } from "react"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const router = useRouter()
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null)

  const handleProductClick = (e: React.MouseEvent<HTMLAnchorElement>, productId: string) => {
    e.preventDefault()
    setLoadingProductId(productId)
    router.push(`/products/${productId}`)
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          onClick={(e) => handleProductClick(e, product.id)}
          className="group overflow-hidden rounded-lg border border-border/50 bg-background shadow-sm transition-all hover:border-border hover:shadow-md"
        >
          <div className="relative aspect-square overflow-hidden">
            {loadingProductId === product.id ? (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
                <div className="h-8 w-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
              </div>
            ) : null}
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium">{product.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
            <div className="mt-2 font-medium">₦{product.price.toFixed(2)}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

