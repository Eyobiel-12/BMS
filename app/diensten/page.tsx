import Image from "next/image"
import Link from "next/link"
import { Scissors, Brush, PenToolIcon as Tool, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DienstenPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Onze Diensten</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Ontdek ons uitgebreide aanbod aan professionele meubelstofferingsdiensten
            </p>
          </div>
        </div>
      </section>

      {/* Herstofferen */}
      <section id="herstofferen" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Scissors className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Herstofferen</h2>
              <p className="mt-4 text-lg text-gray-600">
                Geef uw meubels een complete make-over met onze professionele herstoffeerdienst. Of het nu gaat om een
                geliefde fauteuil, bank, eetkamerstoelen of een ander meubelstuk, wij kunnen het transformeren met
                nieuwe bekleding.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">•</div>
                  <p className="ml-3 text-gray-600">Uitgebreide selectie van hoogwaardige stoffen en materialen</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">•</div>
                  <p className="ml-3 text-gray-600">
                    Professioneel advies bij het kiezen van de juiste stof voor uw interieur
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">•</div>
                  <p className="ml-3 text-gray-600">
                    Vakkundige verwijdering van oude bekleding en voorbereiding van het frame
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">•</div>
                  <p className="ml-3 text-gray-600">Nauwkeurige installatie van nieuwe vulling, vering en bekleding</p>
                </div>
              </div>
              <div className="mt-10">
                <Button asChild>
                  <Link href="/contact">Vraag een Offerte Aan</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image src="/gallery/fabrics.jpeg" alt="Stofferingsstoffen" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Restauratie */}
      <section id="restauratie" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1 relative h-[400px] overflow-hidden rounded-xl">
              <Image src="/gallery/sofa4.jpeg" alt="Gerestaureerde bank" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Brush className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Restauratie</h2>
              <p className="mt-4 text-lg text-gray-600">
                Herstel de originele schoonheid en functionaliteit van uw waardevolle of antieke meubels. Onze
                restauratiediensten zijn gericht op het behouden van het karakter en de integriteit van uw
                meubelstukken, terwijl we ze weer in optimale conditie brengen.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">•</div>
                  <p className="ml-3 text-gray-600">
                    Zorgvuldige beoordeling en documentatie van de oorspronkelijke staat
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">•</div>
                  <p className="ml-3 text-gray-600">Reparatie van beschadigde of verzwakte frames en structuren</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">•</div>
                  <p className="ml-3 text-gray-600">Herstel of vervanging van traditionele vering en vulling</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">•</div>
                  <p className="ml-3 text-gray-600">Behoud van originele details en afwerkingen waar mogelijk</p>
                </div>
              </div>
              <div className="mt-10">
                <Button asChild>
                  <Link href="/contact">Vraag een Offerte Aan</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reparatie */}
      <section id="reparatie" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Tool className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Reparatie</h2>
              <p className="mt-4 text-lg text-gray-600">
                Verleng de levensduur van uw meubels met onze professionele reparatiediensten. We kunnen een breed scala
                aan problemen oplossen, van kleine beschadigingen tot grotere structurele problemen.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">•</div>
                  <p className="ml-3 text-gray-600">Reparatie van scheuren, gaten en slijtage in de bekleding</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">•</div>
                  <p className="ml-3 text-gray-600">Vervanging van gebroken of versleten veren en veersystemen</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">•</div>
                  <p className="ml-3 text-gray-600">
                    Herstel van verzwakte of gebroken frames en structurele elementen
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">•</div>
                  <p className="ml-3 text-gray-600">Vervanging van versleten vulling en schuim voor optimaal comfort</p>
                </div>
              </div>
              <div className="mt-10">
                <Button asChild>
                  <Link href="/contact">Vraag een Offerte Aan</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image src="/gallery/sofa1.jpeg" alt="Gerepareerde bank" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Speciale Projecten */}
      <section id="speciale-projecten" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1 relative h-[400px] overflow-hidden rounded-xl">
              <Image src="/gallery/bed.jpeg" alt="Speciaal project - gestoffeerd bed" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Speciale Projecten</h2>
              <p className="mt-4 text-lg text-gray-600">
                Heeft u een uniek of op maat gemaakt project in gedachten? Wij werken nauw met u samen om uw visie tot
                leven te brengen. Van aangepaste meubelontwerpen tot complexe stofferingsprojecten, wij hebben de
                expertise om het te realiseren.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">•</div>
                  <p className="ml-3 text-gray-600">Op maat gemaakte meubels volgens uw specificaties</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">•</div>
                  <p className="ml-3 text-gray-600">Unieke stofferingsoplossingen voor ongewone of complexe items</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">•</div>
                  <p className="ml-3 text-gray-600">Commerciële projecten voor bedrijven, restaurants en hotels</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">•</div>
                  <p className="ml-3 text-gray-600">Samenwerking met interieurontwerpers en architecten</p>
                </div>
              </div>
              <div className="mt-10">
                <Button asChild>
                  <Link href="/contact">Vraag een Offerte Aan</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klaar om uw project te bespreken?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte of om uw vragen te stellen.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Neem Contact Op</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
