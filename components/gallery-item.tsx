"use client"

import { useState } from "react"
import Image from "next/image"
import { Maximize2 } from "lucide-react"
import { GoldAccent } from "@/components/decorative-elements"

interface GalleryItemProps {
  src: string
  alt: string
  title: string
  description: string
}

export default function GalleryItem({ src, alt, title, description }: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="gallery-item luxury-card shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full">
          <Maximize2 className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">
          <GoldAccent>{title}</GoldAccent>
        </h3>
        <p className="mt-2 text-white/90">{description}</p>
      </div>
    </div>
  )
}
