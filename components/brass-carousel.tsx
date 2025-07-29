"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import img1 from '../public/images/c1.jpg'
import img2 from '../public/images/c2.jpg'
import img3 from '../public/images/c3.jpg'
import img4 from '../public/images/c4.jpg'
import img5 from '../public/images/c5.jpg'

const carouselImages = [
  {
    src: img1,
    alt: "Modern brass manufacturing workshop",
    title: "Advanced Manufacturing",
    description: "State-of-the-art precision engineering with cutting-edge technology",
  },
  {
    src: img2,
    alt: "Premium brass brackets collection",
    title: "Luxury Craftsmanship",
    description: "Meticulously crafted and hand-polished to perfection",
  },
  {
    src: img3,
    alt: "Brass bracket installation",
    title: "Perfect Integration",
    description: "Seamlessly designed for modern architectural excellence",
  },
  {
    src: img4,
    alt: "Detailed brass craftsmanship",
    title: "Artistic Excellence",
    description: "Where traditional craftsmanship meets innovative design",
  },
  {
    src: img5,
    alt: "Modern home with brass brackets",
    title: "Contemporary Elegance",
    description: "Elevating luxury living spaces with timeless design",
  },
]

export function BrassCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
        setIsTransitioning(false)
      }, 300)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    if (index === currentIndex) return
    setIsTransitioning(true)
    setIsAutoPlaying(false)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 300)
    setTimeout(() => setIsAutoPlaying(true), 12000)
  }

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Images with Smooth Transitions */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-out",
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105",
            )}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Enhanced gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
          </div>
        ))}
      </div>

      {/* Minimalist geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-32 right-32 w-2 h-32 bg-gradient-to-b from-amber-400/60 to-transparent animate-pulse" />
        <div
          className="absolute bottom-40 left-20 w-2 h-24 bg-gradient-to-t from-blue-400/60 to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 right-16 w-24 h-24 border border-amber-400/30 rotate-45 animate-spin-slow" />
      </div>

      {/* Centered Content - Only Title and Description with Reduced Size */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-5xl">
          <div
            className={cn(
              "transition-all duration-700 ease-out",
              isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0",
            )}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">
                {carouselImages[currentIndex]?.title}
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">
              {carouselImages[currentIndex]?.description}
            </p>
          </div>
        </div>
      </div>

      {/* Modern Minimal Dot Indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "relative transition-all duration-500 backdrop-blur-sm",
              index === currentIndex
                ? "w-16 h-1 bg-gradient-to-r from-amber-400 to-blue-400 shadow-lg shadow-amber-400/30"
                : "w-8 h-1 bg-white/30 hover:bg-white/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
