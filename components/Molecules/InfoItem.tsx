import { cn } from "@/lib/tailwindUtils"
import React from "react"

type InfoItemProps = {
  children: React.ReactNode
  className?: string
}

export const InfoItem = ({ children, className }: InfoItemProps) => {
  return <div className={cn("bg-gray-50 p-4 rounded-sm shadow-sm", className)}>{children}</div>
}
