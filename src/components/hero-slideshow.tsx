"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oaisis_VillageSTMartins_LR_YCUK_37.jpg-nMUhMOOscP4mbmADYsF4oVpZIrrrkV.jpeg",
    title: "The Sports Hall",
    description: "Our flagship multi-purpose sports hall",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oaisis_VillageSTMartins_LR_YCUK_29.jpg-glRRQUNMCb61bOk02lAc7SRzkcvujC.jpeg",
    title: "The Old Gym",
    description: "Intimate space with character and natural light",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dance-studio-R0UwfVJkWaCOAzfL1tjNtSysP1Hwm4.png",
    title: "Dance Studio",
    description: "Professional dance studio with mirrors and sprung floor",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-05%20174813.png-NQEWAvpk0UYCOycrkCnsRittbXYjQV.jpeg",
    title: "Fitness Activities",
    description: "Modern fitness and wellness programs for all ages",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-13%20144100-U8xYUktGDly7OdjBvj9zbbqwNiZjjn.png",
    title: "Community Activities",
    description: "Versatile spaces for community events and activities",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-13%20143948-NM2tS8fwv8Fhku3C3kgbq2jJCQBjRG.png",
    title: "Group Activities",
    description: "Spacious areas for team sports and group exercises",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oaisis_VillageSTMartins_LR_YCUK_37.jpg-8tJus4VLL1unO3W2GqgZhuUEmg4f1U.jpeg",
    title: "Main Sports Hall",
    description: "Multi-purpose facility for various sports activities",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9FKSmC4UKMXxOdlN0SSrUzVTyaRJXZ.png",
    title: "Activity Spaces",
    description: "Modern facilities designed for community use",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pWiBrDQ5IzpIdRuoAmKDzZUxhd0h5y.png",
    title: "Sports Programs",
    description: "Comprehensive sports and recreational programs",
  },
]

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (isHovering) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isHovering])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div 
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Slideshow images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
            index === currentSlide 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-110"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20"></div>
          
          {/* Caption */}
          <div className="absolute bottom-20 md:bottom-32 left-8 md:left-16 max-w-md transform transition-all duration-1000 delay-300 text-white z-30">
            <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-all duration-700 delay-500`}>
              {slide.title}
            </h3>
            <p className={`text-lg text-gray-200 ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-all duration-700 delay-700`}>
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none"></div>

      {/* Navigation buttons */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-3 z-30">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-100 w-8" : "bg-white/50 scale-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
