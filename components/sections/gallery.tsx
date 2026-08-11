"use client"

import { useState } from "react"
import Image from "next/image"
import { Images, X, ChevronLeft, ChevronRight, Play, ExternalLink } from "lucide-react"

const galleryImages = [
  {
    src: "https://i.postimg.cc/XY9r8JMm/gallery1.jpg",
    alt: "JEJC Office - Japan Education Consultancy Bangladesh",
    caption: "আমাদের অফিস",
  },
  {
    src: "https://i.postimg.cc/7YQhFNBH/gallery2.jpg",
    alt: "Japanese Language Class - JLPT Course Bangladesh",
    caption: "জাপানি ভাষা ক্লাস",
  },
  {
    src: "https://i.postimg.cc/cJkxvCx1/gallery3.jpg",
    alt: "Student Visa Success - Study in Japan from Bangladesh",
    caption: "ভিসা সাফল্য উদযাপন",
  },
  {
    src: "https://i.postimg.cc/m2XNpnQF/gallery4.jpg",
    alt: "Japan Cultural Event - JEJC Bangladesh",
    caption: "জাপান সাংস্কৃতিক অনুষ্ঠান",
  },
  {
    src: "https://i.postimg.cc/VkfLRwCr/gallery5.jpg",
    alt: "JEJC Students in Japan",
    caption: "জাপানে আমাদের শিক্ষার্থীরা",
  },
  {
    src: "https://i.postimg.cc/4xQBwNL7/gallery6.jpg",
    alt: "Japanese Language Graduation Ceremony",
    caption: "গ্র্যাজুয়েশন সেরিমনি",
  },
]

const videoLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-24 bg-muted relative overflow-hidden" id="gallery">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-tag mx-auto">
            <Images className="w-4 h-4" />
            গ্যালারি
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-5 tracking-tight text-balance">
            আমাদের <span className="text-primary">স্মৃতিময় মুহূর্ত</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            JEJC এর বিভিন্ন কার্যক্রম, শিক্ষার্থীদের সাফল্য এবং জাপান সাংস্কৃতিক অনুষ্ঠানের কিছু মুহূর্ত
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-square shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-semibold">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Link */}
        <div className="text-center">
          <a
            href={videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full font-semibold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <Play className="w-5 h-5" />
            আমাদের ভিডিও দেখুন
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              width={800}
              height={600}
              className="rounded-2xl object-contain max-h-[80vh]"
            />
            <p className="text-white text-center mt-4 text-lg font-semibold">
              {galleryImages[currentIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
