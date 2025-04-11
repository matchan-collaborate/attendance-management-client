import { cn } from "@/lib/tailwindUtils"
import React from "react"

// このコンポーネントはサーバーコンポーネントとして扱う
export const RemainingWorkHours = ({ className }: { className?: string }) => {
  return <p className={cn("text-red-500 text-4xl font-bold", className)}>40:00:00</p>
}
