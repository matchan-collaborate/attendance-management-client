import { cn } from "@/lib/tailwindUtils";
import React from "react";

type CenteredContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const CenterdContainer = ({
  children,
  className,
}: CenteredContainerProps) => {
  return (
    <div className={cn("flex items-center justify-center flex-1", className)}>
      {children}
    </div>
  );
};

export default CenterdContainer