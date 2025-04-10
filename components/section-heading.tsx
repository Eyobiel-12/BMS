import type { ReactNode } from "react"

interface SectionHeadingProps {
  title: string
  highlightedWord?: string
  description?: string
  centered?: boolean
  children?: ReactNode
}

export function SectionHeading({
  title,
  highlightedWord,
  description,
  centered = false,
  children,
}: SectionHeadingProps) {
  let formattedTitle = title

  if (highlightedWord) {
    formattedTitle = title.replace(highlightedWord, `<span class="text-[#c9a66b]">${highlightedWord}</span>`)
  }

  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <div className="relative py-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-primary/30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-px bg-primary/60"></div>

        <h2
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          dangerouslySetInnerHTML={{ __html: formattedTitle }}
        ></h2>

        {description && <p className="mt-4 text-lg text-gray-600">{description}</p>}
        {children}

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-primary/30"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-px bg-primary/60"></div>
      </div>
    </div>
  )
}
