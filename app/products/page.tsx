"use client"

import { useState, useEffect } from "react"
import { products } from "@/lib/products"
import ProductGrid from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import type { Product } from "@/lib/types"

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortOption, setSortOption] = useState("featured")
  // const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  // Get unique categories
  const categories = Array.from(new Set(products.map((product) => product.category)))

  // Filter and sort products
  useEffect(() => {
    let result = [...products]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (product) => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query),
      )
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter((product) => selectedCategories.includes(product.category))
    }

    // Apply sorting
    switch (sortOption) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high-low":
        result.sort((a, b) => b.price - a.price)
        break
      case "name-a-z":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "name-z-a":
        result.sort((a, b) => b.name.localeCompare(a.name))
        break
      // featured is default, no sorting needed
    }

    setFilteredProducts(result)
  }, [searchQuery, selectedCategories, sortOption])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setSortOption("featured")
  }

  return (
    <div className="px-4 py-16 md:px-6 md:py-24">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Collection</h1>
          <p className="mt-4 text-muted-foreground">
            Browse our handcrafted garments and accessories, each made with precision and care.
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Products</SheetTitle>
                <SheetDescription>Narrow down your product search with these filters.</SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-4">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => handleCategoryChange(category)}
                        />
                        <Label htmlFor={`category-${category}`} className="capitalize">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between">
                  <Button variant="outline" size="sm" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                  <Button size="sm" onClick={() => document.dispatchEvent(new Event("close-sheet"))}>
                    Apply Filters
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low-high">Price: Low to High</SelectItem>
              <SelectItem value="price-high-low">Price: High to Low</SelectItem>
              <SelectItem value="name-a-z">Name: A to Z</SelectItem>
              <SelectItem value="name-z-a">Name: Z to A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Active Filters */}
      {(selectedCategories.length > 0 || searchQuery) && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">Active filters:</span>

          {selectedCategories.map((category) => (
            <Button
              key={category}
              variant="secondary"
              size="sm"
              className="h-7 gap-1 rounded-full text-xs capitalize"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
              <span className="ml-1">×</span>
            </Button>
          ))}

          {searchQuery && (
            <Button
              variant="secondary"
              size="sm"
              className="h-7 gap-1 rounded-full text-xs"
              onClick={() => setSearchQuery("")}
            >
              &quot;{searchQuery}&quot;<span className="ml-1">×</span>
            </Button>
          )}

          <Button variant="link" size="sm" className="h-7 text-xs" onClick={clearFilters}>
            Clear all
          </Button>
        </div>
      )}

      {/* Results Count */}
      <div className="mt-6 text-sm text-muted-foreground">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
      </div>

      {/* Products Grid */}
      <div className="mt-6">
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-lg font-medium">No products found</p>
            <p className="mt-2 text-muted-foreground">Try adjusting your search or filter criteria</p>
            <Button variant="outline" className="mt-6" onClick={clearFilters}>
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

