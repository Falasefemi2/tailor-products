import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 - Page Not Found</h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
          We couldn&apos;t find the page you were looking for. It might have been moved or deleted.
        </p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}

