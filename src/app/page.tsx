"use client"

import Link from "next/link"
import { CalendarDays, MapPin, Users, DollarSign, ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import TestimonialCard from "@/components/testimonial-card"
import HeroSlideshow from "@/components/hero-slideshow"
import FacilityCards from "@/components/facility-cards"
import Section from "@/components/section"
import ContactModal from "@/components/contact-modal"
import { useState } from "react"

export default function Page() {
  const [contactModalOpen, setContactModalOpen] = useState(false)

  const openContactModal = () => {
    setContactModalOpen(true)
  }

  const closeContactModal = () => {
    setContactModalOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen pt-16">
        <div className="absolute inset-0 z-0">
          <HeroSlideshow />
        </div>
        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-start pt-32">
          <div className="max-w-2xl text-white">
            <Badge className="mb-4 bg-teal-600 hover:bg-teal-700">Welcome to the Village</Badge>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl drop-shadow-lg animate-fade-in-up">
              Your Community Sports Hub
            </h1>
            <p className="mb-8 text-xl drop-shadow-md animate-fade-in-up animation-delay-200">
              Welcome to Oasis St Martin's Village - your local sports destination. Whether you're a football club
              seeking training space, a dance group looking for a studio, or a community organization planning an event,
              we have the perfect facility for you.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 shadow-lg" onClick={openContactModal}>
                Find Your Space
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20" asChild>
                <Link href="#spaces">View Facilities</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <a href="#spaces" className="text-white flex flex-col items-center">
            <span className="mb-2 text-sm font-medium">Scroll Down</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <Section className="bg-white py-24 pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Advantages</span>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Why Choose Our Spaces</h2>
            <p className="mt-6 text-xl text-gray-600">Everything you need for a successful sports event or activity in our premium facilities</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="mb-5 inline-block rounded-full bg-teal-100 p-4 group-hover:bg-teal-600 transition-colors duration-300">
                <MapPin className="h-7 w-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prime Location</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Centrally located with easy access to public transportation and ample parking.
              </p>
            </div>

            <div className="group text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="mb-5 inline-block rounded-full bg-teal-100 p-4 group-hover:bg-teal-600 transition-colors duration-300">
                <Users className="h-7 w-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Capacity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our spaces accommodate everything from intimate fitness classes to large tournaments.
              </p>
            </div>

            <div className="group text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="mb-5 inline-block rounded-full bg-teal-100 p-4 group-hover:bg-teal-600 transition-colors duration-300">
                <CalendarDays className="h-7 w-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Purpose Facilities</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Versatile spaces that can be configured for various sports and activities.
              </p>
            </div>

            <div className="group text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="mb-5 inline-block rounded-full bg-teal-100 p-4 group-hover:bg-teal-600 transition-colors duration-300">
                <DollarSign className="h-7 w-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Rates</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Affordable pricing options for all budgets, with special rates for community groups.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Spaces Section */}
      <Section id="spaces" className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Venues</span>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Explore Our Event Spaces</h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              From our versatile sports hall to our intimate dance studio, we have the perfect space for your sports event or activity
            </p>
          </div>

          <FacilityCards />

          <div className="mt-16 text-center">
            <Button className="bg-gray-100 hover:bg-gray-200 text-gray-800" onClick={openContactModal}>
              <ArrowRight className="mr-2 h-4 w-4" />
              Enquire About All Spaces
            </Button>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">What Our Clients Say</h2>
            <p className="mt-6 text-xl text-gray-600">Trusted by sports clubs and organizations across the community</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <TestimonialCard
              quote="Palace for Life are proud to use the fantastic sports hall and wider facilities at Oasis St Martins Village in Tulse Hill. The hall is of a brilliant standard and the wider site offers flexible, high-quality spaces that suit a range of activities. The staff are always welcoming, supportive, and a real pleasure to work alongside."
              author="Palace For Life"
              role="Community Sports Organization"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oaisis_VillageSTMartins_LR_YCUK_37.jpg-nMUhMOOscP4mbmADYsF4oVpZIrrrkV.jpeg"
            />

            <TestimonialCard
              quote="We are a full time martial arts club and we've been hiring space at Oasis for 2 years and couldn't be happier. It's the perfect space for running our classes. The facilities are always clean, the staff are super friendly and the location is easy for our clients to find and accessible."
              author="Sanda Kickboxing Academy"
              role="Martial Arts Club"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oaisis_VillageSTMartins_LR_YCUK_29.jpg-glRRQUNMCb61bOk02lAc7SRzkcvujC.jpeg"
            />

            <TestimonialCard
              quote="The Dance Studio is fantastic for our classes. The sprung floor and mirrors make it perfect for our dance workshops and fitness sessions. We highly recommend Oasis St Martin's Village for any dance or fitness activities."
              author="Emma Thompson"
              role="Dance Instructor"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dance-studio-R0UwfVJkWaCOAzfL1tjNtSysP1Hwm4.png"
            />
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12 lg:p-16 text-white">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Ready to Reserve Your Space?
                </h2>
                <p className="text-lg text-teal-100 mb-8">
                  Contact us today to discuss your event needs and secure your booking. Our team is ready to help you find the perfect space for your sports activity.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <MapPin className="mr-3 h-5 w-5 text-teal-200" />
                    <span>155 Tulse Hill, London SW2 3UP</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-teal-200" />
                    <span>thevillagestmartins@gmail.com</span>
                  </li>
                </ul>
                <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50" onClick={openContactModal}>
                  Contact Us Today
                </Button>
              </div>
              <div className="hidden md:block relative">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oaisis_VillageSTMartins_LR_YCUK_37.jpg-nMUhMOOscP4mbmADYsF4oVpZIrrrkV.jpeg" 
                  alt="Contact" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={closeContactModal} 
        facilityName="General Enquiry"
        subject="General Inquiry - All Spaces"
      />
    </div>
  )
}
