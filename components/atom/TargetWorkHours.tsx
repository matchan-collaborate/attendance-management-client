import { cn } from "@/lib/tailwindUtils"
import React from "react"

// このコンポーネントはサーバーコンポーネントとして扱う
export const TargetWorkHours = ({ className }: { className?: string }) => {
  return <p className={cn("text-2xl font-bold mt-1", className)}>140:00:00</p>
}
