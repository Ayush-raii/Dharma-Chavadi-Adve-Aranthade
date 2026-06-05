'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { validateAdminCredentials } from '@/lib/auth'

interface AdminLoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  title?: string
}

export default function AdminLoginModal({ isOpen, onClose, onSuccess, title = 'Admin Login' }: AdminLoginModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Validate credentials
    const result = validateAdminCredentials(email, password)
    
    if (!result.success) {
      setError(result.message)
      alert('Access Denied: ' + result.message)
      setLoading(false)
      return
    }

    // Success
    setEmail('')
    setPassword('')
    setLoading(false)
    onSuccess()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-background p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 hover:bg-muted transition"
        >
          <X size={20} className="text-foreground/60" />
        </button>

        {/* Title */}
        <h2 className="mb-2 text-2xl font-bold text-primary">{title}</h2>
        <p className="mb-6 text-sm text-foreground/60">Enter your administrator credentials</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
              disabled={loading}
            />
          </div>

          {error && (
            <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary py-2 font-medium text-primary-foreground transition hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Verifying...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}
