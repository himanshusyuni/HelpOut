import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, icon, size, ...props }, ref) => {
  const sizes = {
    default: "h-9 w-full rounded-md",
    sm: "h-8 rounded-md text-sm",
    lg: "h-10 rounded-md",
    icon: "h-9 w-9",
  };

  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        type={type}
        className={cn(
          sizes[size] || sizes.default,
          "border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          icon && "pl-8", // Add left padding if an icon is present
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});

Input.displayName = "Input";

export { Input };
