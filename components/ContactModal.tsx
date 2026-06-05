"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    place: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields (message is optional)
    if (!formData.name || !formData.phone || !formData.place) {
      alert("Please fill in all required fields")
      return
    }

    setLoading(true)

    try {
      // Prepare message for WhatsApp
      const message = `Hello!

I am ${formData.name} interested in visiting Dharma Chavadi.

Details:
Phone: ${formData.phone}
Place From: ${formData.place}${formData.message ? `
Additional Message: ${formData.message}` : ""}`

      // WhatsApp URL
      const whatsappNumber = "9535570218"
      const encodedMessage = encodeURIComponent(message)
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

      // Open WhatsApp
      window.open(whatsappURL, "_blank")

      // Close modal and reset form
      setTimeout(() => {
        onClose()
        setFormData({
          name: "",
          phone: "",
          place: "",
          message: "",
        })
      }, 500)
    } catch (error) {
      console.error("Error:", error)
      alert("Error opening WhatsApp. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-md bg-background rounded-2xl shadow-2xl animate-scale-in"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-secondary/20 rounded-full transition"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>

          {/* Content */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-2 font-serif">
              Connect With Us
            </h2>
            <p className="text-foreground/70 mb-6">
              Share your details and we will help you plan your visit
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition"
                  required
                />
              </div>

              {/* Place From */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Place From <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                  placeholder="Enter your location/place"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your visit plans..."
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Opening WhatsApp..." : "Confirm & Send to WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
