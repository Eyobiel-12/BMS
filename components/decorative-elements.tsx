import type React from "react"
import { cn } from "@/lib/utils"

interface DecorativeHeadingProps {
  children: React.ReactNode
  className?: string
  centered?: boolean
  withAccents?: boolean
}

export function DecorativeHeading({
  children,
  className,
  centered = false,
  withAccents = true,
}: DecorativeHeadingProps) {
  return (
    <div className={cn("relative py-4", centered && "text-center", className)}>
      {withAccents && (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-primary/30"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-px bg-primary/60"></div>
        </>
      )}
      {children}
      {withAccents && (
        <>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-primary/30"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-px bg-primary/60"></div>
        </>
      )}
    </div>
  )
}

interface DecorativeDividerProps {
  className?: string
  withDot?: boolean
}

export function DecorativeDivider({ className, withDot = true }: DecorativeDividerProps) {
  return (
    <div className={cn("decorative-divider", className)}>
      {withDot && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
      )}
    </div>
  )
}

interface ItalianFrameProps {
  children: React.ReactNode
  className?: string
}

export function ItalianFrame({ children, className }: ItalianFrameProps) {
  return (
    <div className={cn("relative p-6", className)}>
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/40"></div>
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/40"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary/40"></div>
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/40"></div>
      {children}
    </div>
  )
}

interface GoldAccentProps {
  children: React.ReactNode
  className?: string
}

export function GoldAccent({ children, className }: GoldAccentProps) {
  return <span className={cn("text-[#c9a66b]", className)}>{children}</span>
}
