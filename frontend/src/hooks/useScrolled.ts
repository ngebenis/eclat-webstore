'use client'

import { useState, useEffect } from 'react'

/**
 * Returns true once the page has been scrolled past `threshold` pixels.
 * Uses passive scroll listener and RAF for maximum performance.
 */
export function useScrolled(threshold = 80): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > threshold)
          ticking = false
        })
        ticking = true
      }
    }

    // Set initial state
    setScrolled(window.scrollY > threshold)

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
