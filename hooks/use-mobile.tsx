"use client"

import { useState, useEffect } from "react"

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number;

// Breakpoint values match Tailwind's default breakpoints
const breakpointValues = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

/**
 * Hook to detect if the screen is mobile based on width
 * @param breakpoint - Either a string ('sm', 'md', 'lg', 'xl', 'xxl') or a custom number in pixels
 * @returns boolean - True if screen width is less than the breakpoint
 */
export function useMobile(breakpoint: Breakpoint = 'md'): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      const breakpointValue = typeof breakpoint === 'number' 
        ? breakpoint 
        : breakpointValues[breakpoint] || 768;
      
      setIsMobile(window.innerWidth < breakpointValue)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [breakpoint])

  return isMobile
}
