import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import type { Metadata } from "next"


export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params // Destructure id from the resolved params
  const product = products.find((p) => p.id === id)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} | Tailor Shop`,
    description: product.description,
  }
}

export default async function ProductPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  if (!params) {
    notFound();
  }

  const { id } = await params; // Destructure id from the resolved params

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }


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
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="mt-4 text-2xl font-semibold">₦{product.price.toFixed(2)}</div>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium">Description</h3>
              <p className="mt-2 text-muted-foreground">{product.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Details</h3>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="flex-1">
              Book Consultation
            </Button>
            <Button variant="outline" size="lg" className="flex-1">
              Request Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

