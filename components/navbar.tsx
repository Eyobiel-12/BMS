"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useMobile } from "@/hooks/use-mobile"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Diensten", href: "/diensten" },
  { name: "Galerij", href: "/galerij" },
  { name: "Over Ons", href: "/over-ons" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (mobileMenuOpen && !target.closest(".mobile-menu-container") && !target.closest(".mobile-menu-button")) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-white/90 backdrop-blur-sm py-3 border-b border-gray-100"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top bar with contact info - hidden on mobile */}
        <div className="hidden md:flex items-center justify-end py-1 text-sm text-muted-foreground space-x-6">
          <a href="tel:+31687350361" className="flex items-center hover:text-primary transition-colors">
            <Phone className="h-3 w-3 mr-2" />
            <span>06 - 87 35 03 61</span>
          </a>
          <div className="h-4 w-px bg-gray-300"></div>
          <a href="mailto:bsm.apeldoorn@hotmail.com" className="hover:text-primary transition-colors flex items-center">
            <Mail className="h-3 w-3 mr-2" />
            <span>bsm.apeldoorn@hotmail.com</span>
          </a>
        </div>

        <nav
          className="flex items-center justify-between py-2 backdrop-blur-md transition-all duration-300"
          aria-label="Global"
        >
          <div className="flex items-center lg:flex-1">
            <Link
              href="/"
              className="relative transition-transform duration-300 hover:scale-105 flex items-center gap-3"
            >
              <span className="sr-only">BSM Stoffering Meubelen</span>
              <div
                className={`relative ${
                  isMobile ? (scrolled ? "h-12 w-36" : "h-14 w-40") : scrolled ? "h-16 w-48" : "h-20 w-56"
                } transition-all duration-300`}
              >
                <Image
                  src="/logo.png"
                  alt="BSM Stoffering Meubelen"
                  fill
                  className="h-auto w-auto object-contain"
                  priority
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
                />
              </div>
              <div className={`transition-opacity duration-300`}>
                <h2 className="font-playfair text-primary font-semibold tracking-wide text-sm sm:text-base">
                  Stoffering en Meubelreparatie
                </h2>
              </div>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="mobile-menu-button inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open main menu"}</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link text-sm font-medium tracking-wide relative overflow-hidden ${
                  pathname === item.href ? "text-primary active" : "text-gray-800 hover:text-primary"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 ${pathname === item.href ? "scale-x-100" : ""}`}
                ></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild className="btn-hover-effect rounded-md px-6 shadow-md">
              <Link href="/contact">Neem Contact Op</Link>
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`mobile-menu-container lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transform transition-transform duration-300 ease-in-out origin-top z-[100] ${
          mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 sm:px-6 divide-y divide-gray-100">
          <div className="space-y-1 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2.5 text-base font-medium rounded-md ${
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-gray-900 hover:bg-gray-50 hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3">
            <Button asChild className="w-full btn-hover-effect mb-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Neem Contact Op
              </Link>
            </Button>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="tel:+31687350361" className="flex items-center px-3 py-2 hover:text-primary">
                <Phone className="h-4 w-4 mr-2" />
                <span>06 - 87 35 03 61</span>
              </a>
              <a href="mailto:bsm.apeldoorn@hotmail.com" className="flex items-center px-3 py-2 hover:text-primary">
                <Mail className="h-4 w-4 mr-2" />
                <span>bsm.apeldoorn@hotmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
