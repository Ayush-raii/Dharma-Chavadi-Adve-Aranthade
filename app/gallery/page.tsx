'use client'

import Image from 'next/image'
import Navigation from '@/components/Navigation'
import AdminLoginModal from '@/components/AdminLoginModal'
import { Plus, X } from 'lucide-react'
import { useState, useRef } from 'react'

interface GalleryImage {
  src: string
  alt: string
  objectFit?: 'contain' | 'cover'
}

export default function Gallery() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [images, setImages] = useState<GalleryImage[]>([
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bgndimg-oldsana2-80YMgVcWIY7iPzUCaPxDKfIWeKk8JQ.jpg', alt: 'Temple Heritage' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oldsamaimg-main-9lXdCoDpOjRoH2nW6V6BcKNrzxxDp4.jpg', alt: 'Sacred Architecture' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%3Dbackgroundimg-EpEnwRnmq8rjXt22Smr0qMHKotxHOS.jpg', alt: 'Spiritual Beauty' },
  ])
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imageCaption, setImageCaption] = useState('')

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file')
      return
    }

    // Create object URL and add to gallery
    const objectUrl = URL.createObjectURL(file)
    
    // Get image dimensions
    const img = new window.Image()
    img.onload = () => {
      const newImage: GalleryImage = {
        src: objectUrl,
        alt: imageCaption || file.name,
        objectFit: img.width < img.height ? 'contain' : 'cover'
      }
      setImages([newImage, ...images])
      setImageCaption('')
      if (fileInputRef.current) fileInputRef.current.value = ''
      setIsAdminMode(false)
    }
    img.src = objectUrl
  }

  const handleAdminLoginSuccess = () => {
    setIsLoginOpen(false)
    setIsAdminMode(true)
  }

  const handleOpenLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
    
    // Get image dimensions for orientation-aware display
    const img = new window.Image()
    img.onload = () => {
      setImageDimensions({
        width: img.width,
        height: img.height,
      })
    }
    img.src = image.src
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setImageDimensions(null)
  }

  const handleAddImageClick = () => {
    setIsLoginOpen(true)
  }

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-64 pt-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30" style={{
          backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%3Dbackgroundimg-EpEnwRnmq8rjXt22Smr0qMHKotxHOS.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        </div>

        <div className="relative z-10 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-primary">Photo Gallery</h1>
          <p className="mt-4 text-foreground/70">Explore the visual beauty of ADVE ARANTHADE DHARMA CHAVADI</p>
        </div>
      </section>

      {/* Add Image Section */}
      {!isAdminMode && (
        <section className="py-8 bg-background border-b border-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <button
              onClick={handleAddImageClick}
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-background transition hover:shadow-lg hover:shadow-primary/30"
            >
              <Plus size={20} />
              Add Images to Gallery
            </button>
          </div>
        </section>
      )}

      {/* Admin File Upload Form */}
      {isAdminMode && (
        <section className="py-8 bg-secondary/10 border-b border-secondary/20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl bg-background p-6 border border-secondary/20">
              <h3 className="text-xl font-bold text-primary mb-6">Add New Image From Device</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="imageCaption" className="block text-sm font-medium text-foreground mb-2">
                    Image Caption (Optional)
                  </label>
                  <input
                    id="imageCaption"
                    type="text"
                    value={imageCaption}
                    onChange={(e) => setImageCaption(e.target.value)}
                    placeholder="Add a caption for this image"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
                  />
                </div>

                <div>
                  <label htmlFor="fileInput" className="block text-sm font-medium text-foreground mb-2">
                    Select Image File
                  </label>
                  <input
                    ref={fileInputRef}
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
                  />
                  <p className="text-xs text-foreground/50 mt-2">Supported formats: JPEG, PNG, WebP, GIF, SVG</p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsAdminMode(false)}
                  className="rounded-lg border border-border px-6 py-2 font-medium text-foreground transition hover:bg-muted"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Grid */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => handleOpenLightbox(image)}
                className="relative group overflow-hidden rounded-xl border border-secondary/20 hover:border-secondary/80 transition cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-background font-medium text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {images.length === 0 && (
            <div className="text-center py-16">
              <p className="text-foreground/60 text-lg">No images in gallery yet. Add one to get started!</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal - Orientation Aware */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 rounded-full bg-background/80 p-2 text-primary hover:bg-background transition"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Image Container - Orientation Aware */}
            <div className="relative w-full h-full flex items-center justify-center">
              {imageDimensions && imageDimensions.width < imageDimensions.height ? (
                // Portrait orientation
                <div className="relative w-auto max-w-xs h-full max-h-[80vh]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={imageDimensions.width}
                    height={imageDimensions.height}
                    className="object-contain w-full h-full"
                  />
                </div>
              ) : (
                // Landscape orientation
                <div className="relative w-full h-auto max-h-[80vh]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={imageDimensions?.width || 1200}
                    height={imageDimensions?.height || 800}
                    className="object-contain w-full h-auto"
                  />
                </div>
              )}
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 rounded-lg p-3 text-background text-sm">
              {selectedImage.alt}
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-primary/20 to-secondary/20 border-t border-border">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Discover More</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Explore our rich heritage through sacred locations and spiritual celebrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/oldsana" className="rounded-full bg-primary px-8 py-3 font-medium text-background transition hover:shadow-lg hover:shadow-primary/30">
              Old Sana History
            </a>
            <a href="/calendar" className="rounded-full border-2 border-primary px-8 py-3 font-medium text-primary transition hover:bg-primary/5">
              Festival Calendar
            </a>
          </div>
        </div>
      </section>

      <AdminLoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSuccess={handleAdminLoginSuccess}
        title="Gallery Admin Login"
      />
    </main>
  )
}
