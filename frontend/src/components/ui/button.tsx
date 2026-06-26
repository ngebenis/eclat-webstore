import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Base styles
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'rounded-full text-sm font-semibold tracking-wide',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eclat-700 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    'select-none',
  ],
  {
    variants: {
      variant: {
        default:
          'bg-eclat-800 text-white shadow-sm hover:bg-eclat-900 active:scale-[0.98]',
        secondary:
          'bg-eclat-100 text-eclat-900 hover:bg-eclat-200 active:scale-[0.98]',
        outline:
          'border-2 border-eclat-700 bg-transparent text-eclat-800 hover:bg-eclat-50 active:scale-[0.98]',
        ghost:
          'bg-transparent text-eclat-800 hover:bg-eclat-50 hover:text-eclat-900',
        link:
          'bg-transparent text-eclat-700 underline-offset-4 hover:underline hover:text-eclat-900 p-0 h-auto',
        destructive:
          'bg-red-600 text-white shadow-sm hover:bg-red-700 active:scale-[0.98]',
        gold:
          'bg-amber-500 text-white shadow-sm hover:bg-amber-600 active:scale-[0.98]',
        white:
          'bg-white text-eclat-900 shadow-sm hover:bg-eclat-50 active:scale-[0.98]',
        'outline-white':
          'border-2 border-white bg-transparent text-white hover:bg-white/10 active:scale-[0.98]',
      },
      size: {
        default: 'h-11 px-6 py-2.5',
        sm:      'h-9  px-4 py-2 text-xs',
        lg:      'h-13 px-8 py-3 text-base',
        xl:      'h-14 px-10 py-3.5 text-base',
        icon:    'h-10 w-10',
        'icon-sm': 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size:    'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
