import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge?:     string
  title:      string
  subtitle?:  string
  centered?:  boolean
  light?:     boolean
  className?: string
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {badge && (
        <span className={cn(
          'mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-[0.15em]',
          light
            ? 'bg-white/20 text-white'
            : 'bg-eclat-100 text-eclat-700',
        )}>
          <span className={cn(
            'h-1.5 w-1.5 rounded-full',
            light ? 'bg-white' : 'bg-eclat-500',
          )} />
          {badge}
        </span>
      )}

      <h2 className={cn(
        'font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl',
        light ? 'text-white' : 'text-eclat-950',
      )}>
        {title}
      </h2>

      {subtitle && (
        <p className={cn(
          'mt-4 max-w-2xl text-base leading-relaxed sm:text-lg',
          centered && 'mx-auto',
          light ? 'text-white/70' : 'text-muted-foreground',
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
