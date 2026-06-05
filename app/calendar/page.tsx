"use client"

import { useState, useMemo, useEffect } from "react"
import Navigation from "@/components/Navigation"
import { Plus, ChevronLeft, ChevronRight } from "lucide-react"

interface SpecialDay {
  date: string
  eventName: string
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5))
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [eventName, setEventName] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [specialDays, setSpecialDays] = useState<SpecialDay[]>([
    { date: "2026-06-04", eventName: "Sacred Festival" },
    { date: "2026-06-15", eventName: "Spiritual Gathering" },
    { date: "2026-06-20", eventName: "Divine Celebration" },
  ])
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("calendarEvents")
    if (saved) {
      setSpecialDays(JSON.parse(saved))
    }
  }, [])

  // Save to localStorage whenever specialDays changes
  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(specialDays))
  }, [specialDays])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError("")

    // Simple validation - you can replace with backend call
    if (!email.trim() || !password.trim()) {
      setLoginError("Please enter email and password")
      return
    }

    if (!email.includes("@")) {
      setLoginError("Please enter a valid email")
      return
    }

    // For now, simple check - replace with backend authentication
    if (password.length < 6) {
      setLoginError("Password must be at least 6 characters")
      return
    }

    // Login successful
    setIsLoginOpen(false)
    setIsAdminMode(true)
    setEmail("")
    setPassword("")
  }

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault()

    if (!eventName.trim() || !eventDate) {
      alert("Please fill in all fields")
      return
    }

    const newSpecialDay = {
      date: eventDate,
      eventName: eventName,
    }

    setSpecialDays([...specialDays, newSpecialDay])
    setEventName("")
    setEventDate("")
  }

  const handleLogout = () => {
    setIsAdminMode(false)
    setEventName("")
    setEventDate("")
  }

  // Calendar calculations
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
  const monthName = currentDate.toLocaleString("default", { month: "long", year: "numeric" })

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
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return specialDays.find(sd => sd.date === dateStr)
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

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

      {/* Calendar Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Add Event Section */}
          {!isAdminMode && (
            <div className="mb-8 text-center">
              <button
                onClick={() => setIsLoginOpen(true)}
                className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-background transition hover:shadow-lg hover:shadow-primary/30 mx-auto"
              >
                <Plus size={20} />
                Add Event to Calendar
              </button>
            </div>
          )}

          {/* Login Modal */}
          {isLoginOpen && !isAdminMode && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
              <div className="bg-background rounded-xl shadow-2xl max-w-md w-full p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Admin Login</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  {loginError && (
                    <p className="text-red-500 text-sm">{loginError}</p>
                  )}

                  <div className="flex gap-3">
                    <button
                      type="submit"
                      className="flex-1 rounded-lg bg-primary px-4 py-2 font-medium text-background transition hover:shadow-lg"
                    >
                      Login
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsLoginOpen(false)
                        setLoginError("")
                        setEmail("")
                        setPassword("")
                      }}
                      className="flex-1 rounded-lg border border-border px-4 py-2 font-medium text-foreground transition hover:bg-muted"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Admin Add Event Form */}
          {isAdminMode && (
            <div className="mb-8 p-6 rounded-xl bg-secondary/10 border border-secondary/20">
              <h3 className="text-xl font-bold text-primary mb-4">Add New Event</h3>

              <form onSubmit={handleAddEvent} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Event Name
                  </label>
                  <input
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    placeholder="Enter event name"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-foreground/40 focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 rounded-lg bg-primary px-4 py-2 font-medium text-background transition hover:shadow-lg"
                  >
                    Add Event
                  </button>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex-1 rounded-lg border border-border px-4 py-2 font-medium text-foreground transition hover:bg-muted"
                  >
                    Logout
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Calendar */}
          <div className="rounded-xl bg-white/5 border border-border p-6">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={previousMonth}
                className="p-2 rounded-lg hover:bg-secondary/20 transition"
              >
                <ChevronLeft size={24} />
              </button>
              <h2 className="text-2xl font-bold text-primary">{monthName}</h2>
              <button
                onClick={nextMonth}
                className="p-2 rounded-lg hover:bg-secondary/20 transition"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="text-center font-bold text-primary text-sm py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, index) => {
                const special = day ? isSpecialDay(day) : undefined

                return (
                  <div
                    key={index}
                    className={`p-3 rounded-lg text-center text-sm h-24 flex flex-col items-center justify-center transition ${
                      day
                        ? special
                          ? "bg-secondary/30 border-2 border-secondary"
                          : "bg-background/50 border border-border hover:border-primary"
                        : "bg-transparent"
                    }`}
                  >
                    {day && (
                      <>
                        <span className="font-bold text-foreground">{day}</span>
                        {special && (
                          <span className="text-xs text-secondary font-semibold mt-1 text-center line-clamp-2">
                            {special.eventName}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Events List */}
          {specialDays.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {specialDays
                  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                  .map((event, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-secondary/10 border border-secondary/20 flex justify-between items-center"
                    >
                      <div>
                        <p className="font-semibold text-primary">{event.eventName}</p>
                        <p className="text-sm text-foreground/70">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
