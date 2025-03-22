import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Scissors, Star, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductGrid from "@/components/product-grid"
import { products } from "@/lib/products"
import hero from "../public/hero.jpg"
import hero2 from "../public/hero2.jpg"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={hero}
            alt="Tailor at work"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Bespoke Tailoring for the Modern Individual
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              Handcrafted garments made with precision and care. Experience the perfect fit that only custom tailoring
              can provide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="text-base">
                <Link href="/products">
                  View Collection <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black text-base"
              >
                <Link href="#contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Craftsmanship That Speaks Volumes</h2>
              <p className="text-muted-foreground mb-6">
                With over 8 years of experience in the art of tailoring, we bring precision and passion to every
                stitch. Our commitment to quality ensures that each garment not only fits perfectly but also stands the
                test of time.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <div className="rounded-full p-2 bg-primary/10 text-primary">
                    <Scissors className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Custom Tailoring</h3>
                    <p className="text-sm text-muted-foreground">Perfectly fitted to your measurements</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full p-2 bg-primary/10 text-primary">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Premium Materials</h3>
                    <p className="text-sm text-muted-foreground">Sourced from the finest suppliers</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full p-2 bg-primary/10 text-primary">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Modern Designs</h3>
                    <p className="text-sm text-muted-foreground">Contemporary styles with timeless appeal</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src={hero2}
                alt="Tailor workshop"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Creations</h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore our latest handcrafted pieces, each telling a unique story of craftsmanship and style.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
          <ProductGrid products={products.slice(0, 4)} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-secondary/30">
        <div className="px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Let&apos;s Create Something Together</h2>
              <p className="text-muted-foreground mb-6">
                Book a consultation to discuss your vision. Whether it&apos;s a wedding suit, a special occasion dress, or a
                wardrobe refresh, we&apos;re here to bring your ideas to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="font-medium">Address:</div>
                  <div className="text-muted-foreground">123 Fashion Avenue, Style District</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="font-medium">Phone:</div>
                  <div className="text-muted-foreground">(555) 123-4567</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="font-medium">Email:</div>
                  <div className="text-muted-foreground">contact@tailorshop.com</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="font-medium">Hours:</div>
                  <div className="text-muted-foreground">Mon-Fri: 9am-6pm, Sat: 10am-4pm</div>
                </div>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First name
                    </label>
                    <input
                      id="first-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last name
                    </label>
                    <input
                      id="last-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your project"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

