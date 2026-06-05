'use client'

import { useState, useMemo } from 'react'
import Navigation from '@/components/Navigation'
import AdminLoginModal from '@/components/AdminLoginModal'
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react'

interface SpecialDay {
  date: string
  eventName: string
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5)) // June 2026
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [eventName, setEventName] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [specialDays, setSpecialDays] = useState<SpecialDay[]>([
    { date: '2026-06-04', eventName: 'Sacred Festival' },
    { date: '2026-06-15', eventName: 'Spiritual Gathering' },
    { date: '2026-06-20', eventName: 'Divine Celebration' },
  ])

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!eventName.trim() || !eventDate) {
      alert('Please fill in all fields')
      return
    }

    const newSpecialDay = {
      date: eventDate,
      eventName: eventName,
    }

    setSpecialDays([...specialDays, newSpecialDay])
    setEventName('')
    setEventDate('')
    setIsAdminMode(false)
  }

  const handleAdminLoginSuccess = () => {
    setIsLoginOpen(false)
    setIsAdminMode(true)
  }

  const handleAddEventClick = () => {
    setIsLoginOpen(true)
  }

  // Calendar calculations
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })

  const calendarDays = useMemo(() => {
    const days = []
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    return days
  }, [daysInMonth, firstDayOfMonth])

  const isSpecialDay = (day: number | null): SpecialDay | undefined => {
    if (!day) return undefined
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return specialDays.find(sd => sd.date === dateStr)
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-gradient-to-b from-background via-background to-muted">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-primary mb-4">
            Festival Calendar
          </h1>
          <p className="text-lg text-foreground/70">
            Celebrate sacred festivals and special days throughout the year at ADVE ARANTHADE DHARMA CHAVADI
          </p>
        </div>
      </section>

      {/* Add Event Button */}
      {!isAdminMode && (
        <section className="py-8 bg-background border-b border-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <button
              onClick={handleAddEventClick}
              className="flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-medium text-background transition hover:shadow-lg hover:shadow-secondary/50"
            >
              <Plus size={20} />
              Add New Event / Special Day
            </button>
          </div>
        </section>
      )}

      {/* Admin Add Event Form */}
      {isAdminMode && (
        <section className="py-8 bg-secondary/10 border-b border-secondary/20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl bg-background p-6 border border-secondary/20">
              <h3 className="text-xl font-bold text-primary mb-6">Add Special Religious Day/Event</h3>
              
              <form onSubmit={handleAddEvent} className="space-y-4">
                <div>
                  <label htmlFor="eventName" className="block text-sm font-medium text-foreground mb-2">
                    Event Name
                  </label>
                  <input
                    id="eventName"
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    placeholder="e.g., Sacred Festival, Spiritual Gathering, Holy Celebration"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-foreground/40 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition"
                  />
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-2">
                    Date
                  </label>
                  <input
                    id="eventDate"
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="rounded-lg bg-secondary px-6 py-2 font-medium text-background transition hover:shadow-lg hover:shadow-secondary/30"
                  >
                    Add Event
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsAdminMode(false)}
                    className="rounded-lg border border-border px-6 py-2 font-medium text-foreground transition hover:bg-muted"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Calendar Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Calendar Header */}
          <div className="rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 p-8 border border-secondary/30">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={previousMonth}
                className="rounded-lg p-2 text-primary hover:bg-secondary/20 transition"
                aria-label="Previous month"
              >
                <ChevronLeft size={24} />
              </button>
              
              <h2 className="text-3xl font-bold text-primary font-serif">{monthName}</h2>
              
              <button
                onClick={nextMonth}
                className="rounded-lg p-2 text-primary hover:bg-secondary/20 transition"
                aria-label="Next month"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Week Days Header */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="text-center font-semibold text-sm text-primary/70 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days Grid */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, index) => {
                const specialDay = day ? isSpecialDay(day) : undefined
                
                return (
                  <div
                    key={index}
                    className={`aspect-square p-2 rounded-lg text-center text-sm font-medium transition ${
                      day === null
                        ? 'bg-transparent'
                        : specialDay
                        ? 'bg-secondary/80 text-background hover:bg-secondary border-2 border-secondary shadow-md'
                        : 'bg-muted text-foreground hover:bg-muted/80 border border-border'
                    }`}
                  >
                    {day && (
                      <div>
                        <div className="text-lg font-bold">{day}</div>
                        {specialDay && (
                          <div className="text-xs mt-1 line-clamp-2 leading-tight">
                            {specialDay.eventName}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded bg-secondary/80 border-2 border-secondary"></div>
              <span className="text-sm text-foreground">Special Event/Holy Day</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded bg-muted border border-border"></div>
              <span className="text-sm text-foreground">Regular Day</span>
            </div>
          </div>

          {/* Events List */}
          {specialDays.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-primary mb-6 font-serif">Upcoming Sacred Events</h3>
              <div className="space-y-3">
                {specialDays.map((event, index) => {
                  const eventDate = new Date(event.date)
                  const formattedDate = eventDate.toLocaleDateString('default', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                  
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-secondary/10 border border-secondary/20 hover:border-secondary/40 transition"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 rounded-full bg-secondary mt-1.5 flex-shrink-0"></div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-primary">{event.eventName}</h4>
                          <p className="text-sm text-foreground/70">{formattedDate}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-primary/20 to-secondary/20 border-t border-border">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Explore Our Heritage</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Discover the history of our sacred temple and view our gallery of spiritual moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/oldsana" className="rounded-full bg-secondary px-8 py-3 font-medium text-background transition hover:shadow-lg hover:shadow-secondary/50">
              Old Sana History
            </a>
            <a href="/gallery" className="rounded-full border-2 border-primary px-8 py-3 font-medium text-primary transition hover:bg-primary/5">
              View Gallery
            </a>
          </div>
        </div>
      </section>

      <AdminLoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSuccess={handleAdminLoginSuccess}
        title="Festival Calendar Admin Login"
      />
    </main>
  )
}
