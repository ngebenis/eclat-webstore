import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-xl border bg-white px-4 py-2.5',
          'text-sm text-eclat-dark placeholder:text-muted-foreground',
          'transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eclat-700 focus-visible:ring-offset-0 focus-visible:border-eclat-500',
          'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted',
          error
            ? 'border-red-400 focus-visible:ring-red-400'
            : 'border-border hover:border-eclat-300',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
