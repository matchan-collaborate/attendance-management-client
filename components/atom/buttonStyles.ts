import { cva } from "class-variance-authority"

export const buttonStyles = cva(
  "inline-flex items-center justify-center rounded transition cursor-pointer text-white",
  {
    variants: {
      variant: {
        primary: "bg-sky-400 hover:bg-sky-600 disabled:bg-blue-300",
        secondary: "bg-gray-400 hover:bg-gray-600 disabled:bg-gray-300",
        danger: "bg-rose-400 hover:bg-rose-600 disabled:bg-red-300",
      },
      size: {
        sm: "text-sm px-3 py-1",
        md: "text-base px-4 py-2",
        lg: "text-lg px-5 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)
