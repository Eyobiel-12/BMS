import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import GalleryItem from "@/components/gallery-item"
import PageTransition from "@/components/page-transition"
import ParallaxSection from "@/components/parallax-section"
import TestimonialSlider from "@/components/testimonial-slider"
import { DecorativeHeading, GoldAccent } from "@/components/decorative-elements"

const galleryItems = [
  {
    id: 1,
    src: "/gallery/green-chesterfield.png",
    alt: "Luxe Chesterfield bank in groen fluweel",
    title: "Chesterfield Hoekbank",
    description: "Luxueuze fluwelen hoekbank met klassieke Chesterfield details",
    featured: true,
  },
  {
    id: 2,
    src: "/gallery/vintage-teal-chair.png",
    alt: "Antieke stoel met turquoise fluweel en houten frame",
    title: "Antieke Fauteuil",
    description: "Gerestaureerde antieke stoel met handgesneden details en fluwelen bekleding",
    featured: true,
  },
  {
    id: 3,
    src: "/gallery/tan-dining-nook.png",
    alt: "Eetkamerhoek met fluwelen bekleding",
    title: "Eetkamerhoek op Maat",
    description: "Elegante eetkamerhoek met channel tufting en bijpassende stoelen",
  },
  {
    id: 4,
    src: "/gallery/dark-gray-sectional.png",
    alt: "Moderne hoekbank in donkergrijs fluweel",
    title: "Moderne Hoekbank",
    description: "Ruime hoekbank in luxueus donkergrijs fluweel voor maximaal comfort",
    featured: true,
  },
  {
    id: 5,
    src: "/gallery/chair1.jpeg",
    alt: "Gestoffeerde stoel met kleurstalen",
    title: "Klassieke Lederen Stoel",
    description: "Herstoffering met premium leder en decoratieve nagels",
  },
  {
    id: 6,
    src: "/gallery/gray-dining-chairs.png",
    alt: "Set van zes grijze eetkamerstoelen met diamond tufting",
    title: "Moderne Eetkamerstoelen",
    description: "Set van zes stoelen met elegante diamond tufting en houten poten",
  },
  {
    id: 7,
    src: "/gallery/bed.jpeg",
    alt: "Gestoffeerd bed",
    title: "Luxe Gestoffeerd Bed",
    description: "Op maat gemaakt bed met turquoise velours bekleding",
  },
  {
    id: 8,
    src: "/gallery/striped-wingback.png",
    alt: "Gestreepte wingback fauteuil met houten poten",
    title: "Klassieke Wingback",
    description: "Traditionele fauteuil met gestreepte stof en handgemaakte details",
  },
  {
    id: 9,
    src: "/gallery/chairs2.jpeg",
    alt: "Gestoffeerde stoelen",
    title: "Terracotta Fauteuils",
    description: "Set van twee fauteuils herstoffeerd in warme terracotta stof",
  },
  {
    id: 10,
    src: "/gallery/gray-sofa-ottoman.png",
    alt: "Grijze bank met houten frame en bijpassende poef",
    title: "Elegante Bank met Poef",
    description: "Klassieke bank met houten details en bijpassende poef op wieltjes",
  },
  {
    id: 11,
    src: "/gallery/sofa1.jpeg",
    alt: "Gestoffeerde bank",
    title: "Moderne Grijze Bank",
    description: "Minimalistische bank met duurzame grijze stof",
  },
  {
    id: 12,
    src: "/gallery/sofa2.jpeg",
    alt: "Gestoffeerde bank",
    title: "Fluwelen Loungebank",
    description: "Elegante bank met zacht fluweel en decoratieve details",
  },
  {
    id: 13,
    src: "/gallery/sofa3.jpeg",
    alt: "Gestoffeerde bank",
    title: "Blauwe Tweezitsbank",
    description: "Compacte tweezitsbank in levendig blauw textiel",
  },
  {
    id: 14,
    src: "/gallery/fabrics.jpeg",
    alt: "Stofferingsstoffen",
    title: "Uitgebreide Stoffencollectie",
    description: "Onze collectie hoogwaardige stoffen in diverse kleuren en texturen",
  },
  {
    id: 15,
    src: "/gallery/sofa4.jpeg",
    alt: "Gestoffeerde bank met houten frame",
    title: "Klassieke Bank met Houten Frame",
    description: "Traditionele bank met gerestaureerd houten frame en nieuwe stoffering",
  },
]

export default function GalerijPage() {
  // Separate featured items from regular gallery items
  const featuredItems = galleryItems.filter((item) => item.featured)
  const regularItems = galleryItems.filter((item) => !item.featured)

  return (
    <PageTransition>
      {/* Header */}
      <ParallaxSection imageUrl="/gallery/green-chesterfield.png" height="h-[50vh]" overlayOpacity={0.7}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Onze <GoldAccent>Galerij</GoldAccent>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Bekijk een selectie van onze meest luxueuze projecten en transformaties
          </p>
        </div>
      </ParallaxSection>

      {/* Featured Works */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DecorativeHeading centered className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Uitgelichte <GoldAccent>Projecten</GoldAccent>
            </h2>
            <p className="mt-4 text-lg text-gray-600">Onze meest recente meesterwerken</p>
          </DecorativeHeading>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredItems.map((item) => (
              <div key={item.id} className="relative overflow-hidden rounded-xl shadow-lg group">
                <div className="relative h-[400px]">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-semibold text-white">
                    <GoldAccent>{item.title}</GoldAccent>
                  </h3>
                  <p className="text-white/90 mt-2 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 luxury-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DecorativeHeading centered className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Italiaans Geïnspireerd <GoldAccent>Vakmanschap</GoldAccent>
            </h2>
            <p className="mt-4 text-lg text-gray-600">Elk project wordt met zorg en precisie uitgevoerd</p>
          </DecorativeHeading>

          <div className="gallery-grid">
            {regularItems.map((item) => (
              <GalleryItem
                key={item.id}
                src={item.src}
                alt={item.alt}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DecorativeHeading centered className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ons <GoldAccent>Proces</GoldAccent>
            </h2>
            <p className="mt-4 text-lg text-gray-600">Van concept tot realisatie</p>
          </DecorativeHeading>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative p-8 rounded-xl bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-3">Consultatie</h3>
              <p className="text-gray-600">
                We bespreken uw wensen, bekijken uw meubels en adviseren over materialen en mogelijkheden.
              </p>
            </div>

            <div className="relative p-8 rounded-xl bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-3">Ontwerp & Planning</h3>
              <p className="text-gray-600">
                We maken een gedetailleerd plan, selecteren materialen en plannen het project zorgvuldig in.
              </p>
            </div>

            <div className="relative p-8 rounded-xl bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-3">Vakkundige Uitvoering</h3>
              <p className="text-gray-600">
                Met precisie en vakmanschap transformeren we uw meubels tot prachtige, comfortabele stukken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 luxury-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DecorativeHeading centered className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Wat Onze <GoldAccent>Klanten</GoldAccent> Zeggen
            </h2>
          </DecorativeHeading>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Geïnspireerd door wat u ziet?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Laat ons uw meubels transformeren met onze professionele stoffeerdiensten.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild className="btn-hover-effect bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Neem Contact Op</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
