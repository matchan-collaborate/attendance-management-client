import { cn } from "@/lib/tailwindUtils"
import React from "react"

type BorderedLabelProps = {
  children: React.ReactNode
  className?: string
}

export const GrayLabel = ({ children, className }: BorderedLabelProps) => {
  return <p className={cn(className, "text-gray-500")}>{children}</p>
}
