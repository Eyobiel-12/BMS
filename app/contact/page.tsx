"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import PageTransition from "@/components/page-transition"
import { SectionHeading } from "@/components/section-heading"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Send email using EmailJS
    emailjs
      .sendForm("service_wljc4lh", "template_cnsuycl", formRef.current!, "l2lxr0_fA99Qhnxai")
      .then((result) => {
        console.log("Email sent successfully:", result.text)
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({
          user_name: "",
          user_email: "",
          user_phone: "",
          subject: "",
          message: "",
        })
      })
      .catch((error) => {
        console.error("Error sending email:", error)
        setIsSubmitting(false)
        setError(
          "Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw of neem telefonisch contact met ons op.",
        )
      })
  }

  return (
    <PageTransition>
      {/* Header */}
      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Neem Contact Op</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Heeft u vragen of wilt u een offerte aanvragen? Neem gerust contact met ons op.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="fade-in">
              <SectionHeading
                title="Contactgegevens"
                description="U kunt ons bereiken via telefoon, e-mail of door ons atelier te bezoeken. We staan klaar om al uw vragen te beantwoorden en u te helpen bij uw stofferingsbehoeften."
              />

              <div className="mt-10 space-y-6">
                <Card className="group overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Adres</CardTitle>
                      <CardDescription className="mt-1">Tweelingenlaan 36a, 7324 AM Apeldoorn</CardDescription>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Telefoon</CardTitle>
                      <CardDescription className="mt-1">
                        <a href="tel:+31687350361" className="transition-colors hover:text-primary">
                          06 - 87 35 03 61
                        </a>
                        <br />
                        <a href="tel:+31687237358" className="transition-colors hover:text-primary">
                          06 - 87 23 73 58
                        </a>
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">E-mail</CardTitle>
                      <CardDescription className="mt-1">
                        <a href="mailto:bsm.apeldoorn@hotmail.com" className="transition-colors hover:text-primary">
                          bsm.apeldoorn@hotmail.com
                        </a>
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Openingstijden</CardTitle>
                      <CardDescription className="mt-1">
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span>Maandag - Vrijdag</span>
                            <span className="font-medium">9:00 - 17:00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Zaterdag</span>
                            <span className="font-medium">Op afspraak</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Zondag</span>
                            <span className="font-medium">Gesloten</span>
                          </div>
                        </div>
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="fade-in-delay-1">
              <SectionHeading
                title="Stuur ons een bericht"
                description="Vul het onderstaande formulier in en we nemen zo snel mogelijk contact met u op."
              />

              <Card className="mt-8 border-none bg-white p-6 shadow-xl">
                {isSubmitted ? (
                  <CardContent className="p-6 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-green-800">Bedankt voor uw bericht!</h3>
                    <p className="mt-2 text-green-700">
                      We hebben uw bericht ontvangen en zullen zo snel mogelijk contact met u opnemen.
                    </p>
                    <Button className="mt-6 bg-green-600 hover:bg-green-700" onClick={() => setIsSubmitted(false)}>
                      Nieuw bericht versturen
                    </Button>
                  </CardContent>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 p-1">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="user_name">Naam</Label>
                        <Input
                          id="user_name"
                          name="user_name"
                          value={formData.user_name}
                          onChange={handleChange}
                          required
                          className="bg-gray-50/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user_email">E-mail</Label>
                        <Input
                          id="user_email"
                          name="user_email"
                          type="email"
                          value={formData.user_email}
                          onChange={handleChange}
                          required
                          className="bg-gray-50/50"
                        />
                      </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="user_phone">Telefoonnummer</Label>
                        <Input
                          id="user_phone"
                          name="user_phone"
                          value={formData.user_phone}
                          onChange={handleChange}
                          className="bg-gray-50/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Onderwerp</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="bg-gray-50/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Bericht</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-gray-50/50"
                      />
                    </div>
                    {error && (
                      <div className="rounded-md bg-red-50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-red-700">{error}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <Button type="submit" className="w-full btn-hover-effect group" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Verzenden...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Verstuur Bericht{" "}
                          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Onze Locatie</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Bezoek ons atelier in Apeldoorn</p>
          </div>
          <div className="mt-10 overflow-hidden rounded-xl shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.1123673523695!2d5.9532!3d52.2152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7df3a5f2c8a7d%3A0x9d5b0f9db2e7c2c0!2sTweelingenlaan%2036a%2C%207324%20AM%20Apeldoorn!5e0!3m2!1snl!2snl!4v1649252525252!5m2!1snl!2snl"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
