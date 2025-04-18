"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { GoldAccent } from "@/components/decorative-elements"

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "BSM heeft onze antieke bank prachtig gerestaureerd. Het vakmanschap is van het hoogste niveau en de aandacht voor detail is indrukwekkend.",
    author: "Aiden",
    role: "Apeldoorn",
  },
  {
    id: 2,
    quote:
      "Ik ben zeer tevreden met de herstoffering van mijn eetkamerstoelen. De kwaliteit van het werk is uitstekend en de service was vriendelijk en professioneel.",
    author: "Lana",
    role: "Deventer",
  },
  {
    id: 3,
    quote:
      "Bashir heeft onze oude Italiaanse bank nieuw leven ingeblazen. Zijn kennis van traditionele technieken gecombineerd met moderne materialen is indrukwekkend.",
    author: "Suze",
    role: "Zutphen",
  },
  {
    id: 4,
    quote:
      "De service en kwaliteit van BSM zijn ongeëvenaard. Mijn bank ziet er nu weer als nieuw uit!",
    author: "Morris",
    role: "Apeldoorn",
  },
  {
    id: 5,
    quote:
      "Professioneel werk en uitstekende communicatie. Ze hebben mijn oude fauteuil omgetoverd tot een modern meesterwerk.",
    author: "Rafael",
    role: "Deventer",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)

  const goToPrevious = () => {
    if (isAnimating) return
    setDirection("left")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    if (isAnimating) return
    setDirection("right")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(goToNext, 8000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative overflow-hidden py-12">
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <Quote className="h-12 w-12 text-primary/20" />
      </div>

      <div className="relative h-64 overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute inset-0 flex flex-col items-center justify-center px-4 text-center transition-all duration-500 ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : index < currentIndex || (currentIndex === 0 && index === testimonials.length - 1)
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          >
            <p className="max-w-2xl text-lg text-gray-700 italic">"{testimonial.quote}"</p>
            <div className="mt-6">
              <p className="font-semibold text-gray-900">
                <GoldAccent>{testimonial.author}</GoldAccent>
              </p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-4" : "bg-gray-300"
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? "right" : "left")
              setIsAnimating(true)
              setCurrentIndex(index)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md hover:bg-white focus:outline-none"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md hover:bg-white focus:outline-none"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
