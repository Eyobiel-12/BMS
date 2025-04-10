import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, CheckCircle2, Scissors, PenToolIcon as Tool, Brush } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DecorativeHeading, ItalianFrame, GoldAccent } from "@/components/decorative-elements"
import TestimonialSlider from "@/components/testimonial-slider"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-luxury-sofa.png"
            alt="Luxe gestoffeerde Chesterfield bank in groen fluweel"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative flex h-full items-center pt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl fade-in">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="block">Italiaans geïnspireerd</span>
                <span className="block mt-2">
                  <GoldAccent>Vakmanschap</GoldAccent> in Stoffering
                </span>
              </h1>
              <p className="mt-6 text-xl text-white/90 fade-in-delay-1">
                Geef uw meubels nieuw leven met onze professionele stoffeerdiensten. Met 18 jaar ervaring brengen wij
                comfort en stijl terug in uw interieur.
              </p>
              <div className="mt-10 flex items-center gap-x-6 fade-in-delay-2">
                <Button size="lg" asChild className="btn-hover-effect">
                  <Link href="/contact">Vraag een Offerte Aan</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 text-white hover:bg-white/20 btn-hover-effect"
                  asChild
                >
                  <Link href="/galerij">Bekijk Ons Werk</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 luxury-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DecorativeHeading centered className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Onze <GoldAccent>Diensten</GoldAccent>
            </h2>
            <p className="mt-4 text-lg text-gray-600">Wij bieden een breed scala aan professionele stoffeerdiensten</p>
          </DecorativeHeading>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="service-card luxury-card relative border-none bg-white shadow-md">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Scissors className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Herstofferen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Geef uw meubels een nieuwe look met onze professionele herstoffeerdienst. Kies uit een breed
                  assortiment stoffen en kleuren.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 text-primary group" asChild>
                  <Link href="/diensten#herstofferen" className="flex items-center">
                    Meer informatie{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="service-card luxury-card relative border-none bg-white shadow-md">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Brush className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Restauratie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Herstel de originele schoonheid van uw antieke of beschadigde meubels met onze vakkundige
                  restauratiediensten.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 text-primary group" asChild>
                  <Link href="/diensten#restauratie" className="flex items-center">
                    Meer informatie{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="service-card luxury-card relative border-none bg-white shadow-md">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Tool className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Reparatie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Laat uw beschadigde meubels repareren door onze experts. We herstellen scheuren, gaten, gebroken
                  frames en meer.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 text-primary group" asChild>
                  <Link href="/diensten#reparatie" className="flex items-center">
                    Meer informatie{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="service-card luxury-card relative border-none bg-white shadow-md">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Speciale Projecten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Heeft u een uniek project in gedachten? Wij werken samen met u om uw visie tot leven te brengen met
                  maatwerk oplossingen.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 text-primary group" asChild>
                  <Link href="/diensten#speciale-projecten" className="flex items-center">
                    Meer informatie{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DecorativeHeading centered className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Uitgelicht <GoldAccent>Werk</GoldAccent>
            </h2>
            <p className="mt-4 text-lg text-gray-600">Ontdek onze meest recente meesterwerken</p>
          </DecorativeHeading>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <div className="relative h-[350px]">
                <Image
                  src="/gallery/green-chesterfield.png"
                  alt="Luxe Chesterfield bank in groen fluweel"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white">
                  <GoldAccent>Chesterfield Hoekbank</GoldAccent>
                </h3>
                <p className="text-white/90 mt-2">Luxueuze fluwelen hoekbank met klassieke Chesterfield details</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <div className="relative h-[350px]">
                <Image
                  src="/gallery/vintage-teal-chair.png"
                  alt="Antieke stoel met turquoise fluweel en houten frame"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white">
                  <GoldAccent>Antieke Fauteuil</GoldAccent>
                </h3>
                <p className="text-white/90 mt-2">
                  Gerestaureerde antieke stoel met handgesneden details en fluwelen bekleding
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <div className="relative h-[350px]">
                <Image
                  src="/gallery/dark-gray-sectional.png"
                  alt="Moderne hoekbank in donkergrijs fluweel"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white">
                  <GoldAccent>Moderne Hoekbank</GoldAccent>
                </h3>
                <p className="text-white/90 mt-2">
                  Ruime hoekbank in luxueus donkergrijs fluweel voor maximaal comfort
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild className="group">
              <Link href="/galerij" className="flex items-center justify-center">
                Bekijk Alle Projecten{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 luxury-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <ItalianFrame className="absolute inset-0 z-10"></ItalianFrame>
              <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl transform transition-transform hover:scale-[1.02] duration-500">
                <Image
                  src="/owner.png"
                  alt="Bashir - Eigenaar van BSM Stoffering Meubelen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="fade-in">
              <DecorativeHeading withAccents={false}>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Over <GoldAccent>Bashir</GoldAccent>
                </h2>
              </DecorativeHeading>
              <p className="mt-4 text-lg text-gray-600">
                Met 18 jaar ervaring in de meubelstofferingsindustrie, waaronder werk in Italië, brengt Bashir een schat
                aan kennis en vakmanschap naar elk project.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="text-gray-600">18 jaar ervaring in meubelstoffering</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="text-gray-600">Gewerkt in Italië, bekend om hoogwaardig meubilair</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="text-gray-600">Gespecialiseerd in zowel moderne als klassieke meubels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="text-gray-600">Toewijding aan kwaliteit en klanttevredenheid</span>
                </li>
              </ul>
              <div className="mt-10">
                <Button asChild className="btn-hover-effect">
                  <Link href="/over-ons">Meer Over Ons</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
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
          <div className="text-center fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klaar om uw meubels nieuw leven in te blazen?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte of om uw project te bespreken.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" asChild className="btn-hover-effect">
                <Link href="/contact">Neem Contact Op</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
