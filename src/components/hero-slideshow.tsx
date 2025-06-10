"use client"

import { useState, useEffect } from "react"

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
    image: "/sports-field-new.jpg",
    title: "The Sports Field",
    description: "Expansive outdoor grass field for football and athletics",
  },
  {
    image: "/netball-court-new.jpg",
    title: "Outdoor Netball Pitch",
    description: "Full-size regulation netball court",
  },
]

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="h-full w-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="h-full w-full object-cover brightness-[0.7]"
          />
        </div>
      ))}
    </div>
  )
}
