import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OverOnsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Over Ons</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Leer meer over BSM Stoffering Meubelen en onze passie voor vakmanschap
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative h-[500px] overflow-hidden rounded-xl">
              <Image
                src="/owner.png"
                alt="Bashir - Eigenaar van BSM Stoffering Meubelen"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Onze Geschiedenis</h2>
              <p className="mt-4 text-lg text-gray-600">
                BSM Stoffering Meubelen is opgericht door Bashir, een gepassioneerde vakman met 18 jaar ervaring in de
                meubelstofferingsindustrie. Na zijn opleiding en jarenlange ervaring in Italië, een land bekend om zijn
                hoogwaardige meubelproductie, besloot Bashir zijn eigen bedrijf te starten in Apeldoorn.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Zijn doel was om hoogwaardige stoffeerdiensten aan te bieden die de perfecte balans vinden tussen
                traditioneel vakmanschap en moderne technieken. Vandaag de dag staat BSM Stoffering Meubelen bekend om
                zijn toewijding aan kwaliteit, oog voor detail en uitmuntende klantenservice.
              </p>
              <div className="mt-10">
                <Button asChild>
                  <Link href="/contact">Neem Contact Op</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Onze Waarden</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              De principes die ons werk en onze relaties met klanten leiden
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Vakmanschap</h3>
              <p className="mt-4 text-gray-600">
                We streven naar perfectie in elk aspect van ons werk, van de selectie van materialen tot de laatste
                afwerking. Elk project wordt met de grootste zorg en aandacht voor detail uitgevoerd.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Kwaliteit</h3>
              <p className="mt-4 text-gray-600">
                We gebruiken alleen de beste materialen en technieken om ervoor te zorgen dat onze stofferingen niet
                alleen mooi zijn, maar ook duurzaam en lang meegaan.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Integriteit</h3>
              <p className="mt-4 text-gray-600">
                We geloven in eerlijke prijzen, transparante communicatie en het nakomen van onze beloften. Uw
                tevredenheid is onze hoogste prioriteit.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Creativiteit</h3>
              <p className="mt-4 text-gray-600">
                We brengen creativiteit en innovatie in elk project, of het nu gaat om het herstofferen van een antiek
                stuk of het ontwerpen van een modern meubelstuk op maat.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Klantenservice</h3>
              <p className="mt-4 text-gray-600">
                We luisteren naar uw wensen en werken nauw met u samen om ervoor te zorgen dat het eindresultaat aan uw
                verwachtingen voldoet of deze overtreft.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Duurzaamheid</h3>
              <p className="mt-4 text-gray-600">
                Door meubels te herstofferen en te restaureren in plaats van ze te vervangen, dragen we bij aan een
                duurzamere toekomst met minder afval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Waarom Kiezen voor BSM Stoffering Meubelen?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Wat ons onderscheidt van andere stofferingsbedrijven
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-gray-900">18 Jaar Ervaring</h3>
                    <p className="mt-1 text-gray-600">
                      Met bijna twee decennia ervaring hebben we de kennis en vaardigheden om elk stofferingsproject aan
                      te pakken.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Internationale Expertise</h3>
                    <p className="mt-1 text-gray-600">
                      Onze ervaring in Italië heeft ons blootgesteld aan de hoogste standaarden van meubelproductie en
                      stoffering.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Persoonlijke Aandacht</h3>
                    <p className="mt-1 text-gray-600">
                      We behandelen elk project met individuele aandacht en zorgen ervoor dat het eindresultaat perfect
                      bij uw wensen past.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Uitgebreide Stoffencollectie</h3>
                    <p className="mt-1 text-gray-600">
                      We bieden een breed assortiment aan hoogwaardige stoffen en materialen om aan elke stijl en
                      voorkeur te voldoen.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Vakkundige Ambachtslieden</h3>
                    <p className="mt-1 text-gray-600">
                      Ons team bestaat uit getalenteerde vakmensen die trots zijn op hun werk en toewijding aan
                      kwaliteit.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Eerlijke Prijzen</h3>
                    <p className="mt-1 text-gray-600">
                      We bieden concurrerende prijzen zonder concessies te doen aan de kwaliteit van ons werk.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Snelle Doorlooptijden</h3>
                    <p className="mt-1 text-gray-600">
                      We streven ernaar om projecten efficiënt af te ronden zonder in te boeten op kwaliteit.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Tevreden Klanten</h3>
                    <p className="mt-1 text-gray-600">
                      Onze groeiende lijst van tevreden klanten is een bewijs van onze toewijding aan uitmuntendheid.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Klaar om samen te werken?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Neem vandaag nog contact met ons op om uw project te bespreken en een vrijblijvende offerte te ontvangen.
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
