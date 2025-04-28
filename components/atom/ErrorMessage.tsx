import { cn } from "@/lib/tailwindUtils"
import React from "react"

type ErrorMessageProps = {
  errorMessage: string | undefined
  className?: string
}

const ErrorMessage = ({ errorMessage, className }: ErrorMessageProps) => {
  if (!errorMessage) return null

  return <p className={cn("text-red-500 text-sm", className)}>{errorMessage}</p>
}

export { ErrorMessage }
