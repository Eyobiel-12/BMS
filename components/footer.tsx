import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Clock, ArrowRight } from "lucide-react"
import { GoldAccent } from "@/components/decorative-elements"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Top section with logo and newsletter */}
        <div className="flex flex-col items-center justify-between border-b border-gray-800 pb-8 md:flex-row">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="relative h-14 w-36 sm:h-16 sm:w-40 bg-white rounded-md overflow-hidden">
                <Image src="/logo.png" alt="BSM Stoffering Meubelen" fill className="object-contain p-2" />
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-base sm:text-lg font-semibold">
              <GoldAccent>Italiaans</GoldAccent> geïnspireerd vakmanschap
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-400">Professionele meubelstoffering met 18 jaar ervaring</p>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-16">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Over Ons</h3>
            <p className="mt-4 text-sm sm:text-base text-gray-300">
              BSM Stoffering Meubelen biedt professionele meubelstoffering, restauratie en reparatie met 18 jaar
              ervaring, waaronder werk in Italië.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="group">
                <span className="sr-only">Facebook</span>
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all group-hover:bg-primary group-hover:text-white">
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
              </a>
              <a href="#" className="group">
                <span className="sr-only">Instagram</span>
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all group-hover:bg-primary group-hover:text-white">
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mt-6 sm:mt-0">Diensten</h3>
            <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/diensten#herstofferen"
                  className="group flex items-center text-sm sm:text-base text-gray-300 transition-colors hover:text-white"
                >
                  <ArrowRight className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-primary transition-transform group-hover:translate-x-1" />
                  Herstofferen
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten#restauratie"
                  className="group flex items-center text-sm sm:text-base text-gray-300 transition-colors hover:text-white"
                >
                  <ArrowRight className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-primary transition-transform group-hover:translate-x-1" />
                  Restauratie
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten#reparatie"
                  className="group flex items-center text-sm sm:text-base text-gray-300 transition-colors hover:text-white"
                >
                  <ArrowRight className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-primary transition-transform group-hover:translate-x-1" />
                  Reparatie
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten#speciale-projecten"
                  className="group flex items-center text-sm sm:text-base text-gray-300 transition-colors hover:text-white"
                >
                  <ArrowRight className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-primary transition-transform group-hover:translate-x-1" />
                  Speciale Projecten
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mt-6 md:mt-0">Contact</h3>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary mt-0.5" />
                <span className="text-sm sm:text-base text-gray-300">Tweelingenlaan 36a, 7324 AM Apeldoorn</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                <a href="tel:+31687350361" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  06 - 87 35 03 61
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                <a href="tel:+31687237358" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  06 - 87 23 73 58
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                <a href="mailto:bsm.apeldoorn@hotmail.com" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  bsm.apeldoorn@hotmail.com
                </a>
              </li>
              <li className="flex items-start mt-4">
                <Clock className="mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <h4 className="text-sm sm:text-base font-medium text-gray-200 mb-1">Openingstijden</h4>
                  <p className="text-sm sm:text-base text-gray-300">Maandag t/m zaterdag: 9:00 tot 18:00</p>
                  <p className="text-sm sm:text-base text-gray-300">Zondag: met overleg</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-8">
          <p className="text-center text-xs sm:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} BSM Stoffering Meubelen. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  )
}
