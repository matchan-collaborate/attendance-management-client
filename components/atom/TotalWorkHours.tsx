import { cn } from "@/lib/tailwindUtils"
import React from "react"

// このコンポーネントはサーバーコンポーネントとして扱う
export const TotalWorkHours = ({ className }: { className?: string }) => {
  return <p className={cn("text-4xl font-bold", className)}>100:00:00</p>
}
