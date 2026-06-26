import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-eclat-800 text-white',
        secondary:
          'border-transparent bg-eclat-100 text-eclat-800',
        outline:
          'border-eclat-300 bg-transparent text-eclat-700',
        gold:
          'border-transparent bg-amber-100 text-amber-800',
        'gold-solid':
          'border-transparent bg-amber-500 text-white',
        destructive:
          'border-transparent bg-red-100 text-red-700',
        success:
          'border-transparent bg-emerald-100 text-emerald-800',
        'new':
          'border-transparent bg-teal-500 text-white',
        'hot':
          'border-transparent bg-orange-500 text-white',
        'best-seller':
          'border-transparent bg-eclat-700 text-white',
        muted:
          'border-transparent bg-muted text-muted-foreground',
        white:
          'border-white/30 bg-white/20 text-white backdrop-blur-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
