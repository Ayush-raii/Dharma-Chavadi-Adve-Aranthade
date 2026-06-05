import Image from 'next/image'
import Navigation from '@/components/Navigation'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'ADVE ARANTHADE DHARMA CHAVADI',
  description: 'A spiritual sanctuary renovated on May 31, 2025. Experience sacred traditions and cultural heritage.',
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0 parallax-hero" style={{
          backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%3Dbackgroundimg-EpEnwRnmq8rjXt22Smr0qMHKotxHOS.jpg)',
          filter: 'brightness(0.4)'
        }}>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 py-20">
          <div className="space-y-8 animate-fade-in-up">
            {/* Official Logo */}
            <div className="flex justify-center mb-4">
              <Image
                src="/logo.png"
                alt="ADVE ARANTHADE DHARMA CHAVADI Official Logo"
                width={200}
                height={150}
                className="h-auto w-auto max-w-xs drop-shadow-lg"
              />
            </div>

            {/* Decorative Badge */}
            <div className="inline-block rounded-full bg-accent/20 px-6 py-2 border border-accent/40">
              <span className="text-sm font-medium text-accent">Renovated May 31, 2025</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-accent drop-shadow-lg">
              ADVE ARANTHADE DHARMA CHAVADI
            </h1>

            {/* Subtitle */}
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-accent/90 font-light drop-shadow">
              A spiritual sanctuary dedicated to sacred traditions and cultural preservation
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="https://maps.app.goo.gl/PcuHkWEs6QdqgGpk7" target="_blank" rel="noopener noreferrer" className="rounded-full bg-secondary px-8 py-3 font-medium text-background transition hover:shadow-lg hover:shadow-secondary/50 flex items-center justify-center gap-2 group">
                Visit Our Location
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </a>
              <a href="/gallery" className="rounded-full border-2 border-accent px-8 py-3 font-medium text-accent transition hover:bg-accent/10 drop-shadow">
                View Gallery
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-12 animate-bounce">
              <svg className="h-8 w-8 mx-auto text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-in">
            {/* Logo Divider */}
            <div className="flex justify-center mb-8">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={90}
                className="h-20 w-auto opacity-80"
              />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif">
              ADVE ARANTHADE DHARMA CHAVADI
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Recently renovated on May 31, 2025, this sacred temple stands as a testament to devotion and spiritual excellence. 
              We invite you to explore our heritage, participate in our sacred practices, and connect with the divine wisdom that guides our community.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
              <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/20 hover:border-secondary/40 transition">
                <div className="text-4xl font-bold text-secondary mb-2">2025</div>
                <p className="text-foreground/70">Recently Renovated</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/20 hover:border-secondary/40 transition">
                <div className="text-4xl font-bold text-secondary mb-2">RED STONES</div>
                <p className="text-foreground/70">Full Red Stones are used</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/20 hover:border-secondary/40 transition">
                <div className="text-4xl font-bold text-secondary mb-2">SINGLE WOOD</div>
                <p className="text-foreground/70">All the Pillars are done with Single Wood</p>
              </div>
            </div>
          </div>
          <div className="mt-12 rounded-2xl bg-background/80 p-6 border border-border max-w-3xl mx-auto sm:mt-16">
                  <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4">Sacred Reflections</h3>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                    Dharma Chavadi invites devotees to reflect on the timeless blessings of Daiva, the quiet strength of tradition.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-foreground/80">
                      <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                      <span>Every prayer here honours the lineage of our ancestors.</span>
                    </li>
                    <li className="flex gap-3 text-foreground/80">
                      <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                      <span>The entire main Chavadi is surrounded with real wood engraved, with stunning architecture.</span>
                    </li>
                    <li className="flex gap-3 text-foreground/80">
                      <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                      <span>Following ancient traditions, we maintain the sanctity and reverence of our practices.</span>
                    </li>
                  </ul>
                </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-primary/20 to-secondary/20 border-t border-b border-border">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Explore Our Offerings</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Discover our gallery, yearly calendar of festivals, and deep dive into the history of Old Sana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/gallery" className="rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition hover:shadow-lg hover:shadow-primary/30">
              View Gallery
            </a>
            <a href="/calendar" className="rounded-full border-2 border-primary px-8 py-3 font-medium text-primary transition hover:bg-primary/5">
              See Calendar
            </a>
            <a href="/oldsana" className="rounded-full border-2 border-primary px-8 py-3 font-medium text-primary transition hover:bg-primary/5">
              Old Sana Details
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
