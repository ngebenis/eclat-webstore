'use client'

import { useEffect, useRef, useState } from 'react'

interface Options extends IntersectionObserverInit {
  /** Fire once and stop observing after the element enters viewport */
  freezeOnceVisible?: boolean
}

/**
 * Lightweight IntersectionObserver hook for scroll-triggered animations.
 *
 * @returns [ref, isVisible]
 */
export function useIntersectionObserver<T extends Element = HTMLDivElement>(
  options: Options = {},
): [React.RefObject<T>, boolean] {
  const {
    threshold          = 0.15,
    root               = null,
    rootMargin         = '0px',
    freezeOnceVisible  = true,
  } = options

  const ref      = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting
        setVisible(isVisible)
        if (isVisible && freezeOnceVisible) {
          observer.unobserve(el)
        }
      },
      { threshold, root, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, root, rootMargin, freezeOnceVisible])

  return [ref, visible]
}
