"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

interface ParallaxSectionProps {
  imageUrl: string
  height?: string
  children: React.ReactNode
  overlayOpacity?: number
}

export default function ParallaxSection({
  imageUrl,
  height = "h-[60vh]",
  children,
  overlayOpacity = 0.5,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const { top } = sectionRef.current.getBoundingClientRect()
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      if (top < windowHeight && top + sectionRef.current.offsetHeight > 0) {
        const newOffset = (scrollPosition - (scrollPosition + top - windowHeight)) * 0.15
        setOffset(newOffset)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${height}`}>
      <div className="absolute inset-0 w-full h-[120%]" style={{ transform: `translateY(${offset}px)` }}>
        <Image src={imageUrl || "/placeholder.svg"} alt="Parallax background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }}></div>
      </div>
      <div className="relative h-full flex items-center">{children}</div>
    </section>
  )
}
