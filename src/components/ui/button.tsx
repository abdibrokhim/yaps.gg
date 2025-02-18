import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#e5e5e5] text-black hover:bg-[#e5e5e5]/90 text-xs sm:text-sm",
        destructive:
          "bg-[hsl(var(--teal-100))] text-[hsl(var(--teal-700))] hover:bg-[hsl(var(--teal-100))]/90 text-xs sm:text-sm",
        outline:
          "border border-input bg-background hover:border-[hsl(var(--teal-700))] hover:text-[hsl(var(--teal-700))] text-xs animate-pulse",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs",
        ghost: "hover:bg-accent hover:text-accent-foreground border border-[var(--gray-600)] rounded-lg hover:bg-[var(--secondary-darkest)] transition-all duration-200",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-7 w-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
