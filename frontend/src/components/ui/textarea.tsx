import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[120px] w-full rounded-xl border bg-white px-4 py-3',
          'text-sm text-eclat-dark placeholder:text-muted-foreground',
          'resize-none transition-colors duration-150',
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
Textarea.displayName = 'Textarea'

export { Textarea }
