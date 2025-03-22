import type React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
    className?: string
    children: React.ReactNode
}

export function Container({ className, children }: ContainerProps) {
    return <div className={cn("container px-4 md:px-6", className)}>{children}</div>
}

interface SectionProps {
    className?: string
    children: React.ReactNode
}

export function Section({ className, children }: SectionProps) {
    return <section className={cn("py-16 md:py-24", className)}>{children}</section>
}

