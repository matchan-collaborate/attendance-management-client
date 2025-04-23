import { cn } from "@/lib/tailwindUtils"
import React from "react"
import { buttonStyles } from "./buttonStyles"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger"
  size?: "sm" | "md" | "lg"
}

export const Button = ({ type = "button", variant = "primary", size = "md", className, ...props }: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    />
  )
}
