import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium">Tailor Shop</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Handcrafted garments made with precision and care since 2008.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium">Shop</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">
                All Products
              </Link>
              <Link href="/products?category=suits" className="text-sm text-muted-foreground hover:text-foreground">
                Suits
              </Link>
              <Link href="/products?category=dresses" className="text-sm text-muted-foreground hover:text-foreground">
                Dresses
              </Link>
              <Link
                href="/products?category=accessories"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Accessories
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-medium">Company</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About Us
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                Careers
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-medium">Legal</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/shipping" className="text-sm text-muted-foreground hover:text-foreground">
                Shipping Policy
              </Link>
              <Link href="/returns" className="text-sm text-muted-foreground hover:text-foreground">
                Returns & Exchanges
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tailor Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

