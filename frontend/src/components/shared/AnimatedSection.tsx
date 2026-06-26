'use client'

import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'

type Animation = 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right'

interface AnimatedSectionProps {
  children:   ReactNode
  className?: string
  delay?:     number         // ms
  animation?: Animation
  threshold?: number         // 0–1
  as?:        keyof JSX.IntrinsicElements
}

export function AnimatedSection({
  children,
  className,
  delay      = 0,
  animation  = 'slide-up',
  threshold  = 0.12,
  as:        Tag = 'div',
}: AnimatedSectionProps) {
  const ref     = useRef<HTMLElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis(true)
          observer.unobserve(el)
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const style: CSSProperties = {
    animationDelay:    `${delay}ms`,
    animationFillMode: 'both',
  }

  return (
    // @ts-expect-error: dynamic tag
    <Tag
      ref={ref}
      className={cn(
        'transition-all',
        vis ? `animate-${animation}` : 'opacity-0',
        className,
      )}
      style={vis ? style : undefined}
    >
      {children}
    </Tag>
  )
}
