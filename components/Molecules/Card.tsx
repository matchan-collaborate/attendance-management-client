import { cn } from "@/lib/tailwindUtils";
import React from "react";

type CenterdCardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CenterdCardProps) => {
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-sm shadow-lg w-full max-w-md min-h-[600px]",
        className
      )}
    >
      {children}
    </div>
  );
};
