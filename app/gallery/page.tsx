"use client"

import Image from "next/image"
import Navigation from "@/components/Navigation"
import { useState, useMemo } from "react"

interface GalleryImage {
  src: string
  alt: string
  objectFit?: "contain" | "cover"
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bgndimg-oldsana2-80YMgVcWIY7iPzUCaPxDKfIWeKk8JQ.jpg", alt: "Temple Heritage" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oldsamaimg-main-9lXdCoDpOjRoH2nW6V6BcKNrzxxDp4.jpg", alt: "Sacred Architecture" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%3Dbackgroundimg-EpEnwRnmq8rjXt22Smr0qMHKotxHOS.jpg", alt: "Spiritual Beauty" },
  ])
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null)

  const handleOpenLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
    
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

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-64 pt-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30" style={{
          backgroundImage: "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%3Dbackgroundimg-EpEnwRnmq8rjXt22Smr0qMHKotxHOS.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        </div>

        <div className="relative z-10 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-primary">Photo Gallery</h1>
          <p className="mt-4 text-foreground/70">Explore the visual beauty of ADVE ARANTHADE DHARMA CHAVADI</p>
        </div>
      </section>

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
              <p className="text-foreground/60 text-lg">No images in gallery yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl w-full max-h-96 flex items-center justify-center">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={imageDimensions?.width || 800}
              height={imageDimensions?.height || 600}
              className="max-h-96 w-auto"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
