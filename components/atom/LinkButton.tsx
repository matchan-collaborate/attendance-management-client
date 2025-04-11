import { cn } from "@/lib/tailwindUtils"
import { buttonStyles } from "./buttonStyles"
import Link from "next/link"
import React from "react"

type LinkButtonProps = {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "danger"
  size?: "sm" | "md" | "lg"
  className?: string
}

export const LinkButton = ({ href, children, variant = "primary", size = "md", className }: LinkButtonProps) => {
  return (
    <Link href={href} className={cn(buttonStyles({ variant, size }), className)}>
      {children}
    </Link>
  )
}
