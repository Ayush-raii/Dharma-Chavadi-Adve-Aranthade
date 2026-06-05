"use client"

import { useState } from "react"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import ContactModal from "@/components/ContactModal"

export default function OldSana() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bgndimg-oldsana2-80YMgVcWIY7iPzUCaPxDKfIWeKk8JQ.jpg"
            alt="Old Sana Heritage"
            fill
            className="object-cover brightness-40"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 py-20">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block rounded-full bg-accent/20 px-6 py-2 border border-accent/40">
              <span className="text-sm font-medium text-accent">Historical Heritage</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-accent drop-shadow-lg max-w-xl mx-auto break-words">
              JUMADHI BANTA MAISANDHAYA DHAIVASTHANA
            </h1>

            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-accent/90 font-light drop-shadow">
              Exploring the sacred significance and spiritual importance of this ancient temple sanctuary
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
            {/* Image */}
            <div className="relative h-96 overflow-hidden rounded-2xl animate-fade-in-left">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oldsamaimg-main-9lXdCoDpOjRoH2nW6V6BcKNrzxxDp4.jpg"
                alt="Old Sana Temple"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-8 animate-fade-in-right">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-primary font-serif mb-6">
                  Sacred Architecture & Divine Legacy
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  The Old Sana represents a significant chapter in our spiritual heritage. This was previously this sana was constructed <span>30+</span>years ago, later Dharma Chavadi was Constructed.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                 The main difference between sana and Dharma Chavadi is that there is no muguli in Dharma chavadi it is represented as a house(Arasu mane), also it dosent have bali during festivals which was followed when there was sana.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                  <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
                  <p className="text-sm text-foreground/70">Years Old History</p>
                </div>
                <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                  <div className="text-3xl font-bold text-secondary mb-2">Centuries</div>
                  <p className="text-sm text-foreground/70">Of Worship</p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex gap-3 text-foreground/80">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                  <span>Intricate stone carvings with spiritual significance</span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                  <span>Ancient rituals performed with sacred precision</span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                  <span>Preserved traditions honoring ancestral wisdom</span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                  <span>Sacred sanctuary for spiritual pilgrims and devotees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Significance */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-primary/20 to-secondary/20 border-t border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary font-serif text-center mb-12">
            Spiritual Significance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-background/50 backdrop-blur border border-border hover:border-primary transition">
              <h3 className="text-2xl font-bold text-primary mb-4">Divine Connection</h3>
              <p className="text-foreground/70 leading-relaxed">
                A place where devotees connect with the divine through sacred rituals, meditation, and spiritual practices passed down through generations.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-background/50 backdrop-blur border border-border hover:border-primary transition">
              <h3 className="text-2xl font-bold text-primary mb-4">Cultural Preservation</h3>
              <p className="text-foreground/70 leading-relaxed">
                The temple stands as a living museum of our cultural heritage, preserving architectural techniques and spiritual knowledge from ancient times.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-background/50 backdrop-blur border border-border hover:border-primary transition">
              <h3 className="text-2xl font-bold text-primary mb-4">Community Heritage</h3>
              <p className="text-foreground/70 leading-relaxed">
                A gathering place for our community to celebrate festivals, perform ceremonies, and strengthen bonds through shared spiritual experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Plan Your Visit</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Experience the spiritual majesty of Old Sana and connect with centuries of sacred heritage.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition hover:shadow-lg hover:shadow-primary/30"
          >
            Click Here
          </button>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
