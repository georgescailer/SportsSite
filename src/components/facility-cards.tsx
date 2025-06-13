"use client"

import { useState } from "react"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import FacilityModal from "./facility-modal"
import ContactModal from "./contact-modal"
import { motion } from "framer-motion"

const indoorFacilities = [
  {
    title: "The Sports Hall",
    description: "Our flagship multi-purpose sports hall designed for maximum versatility",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oaisis_VillageSTMartins_LR_YCUK_37.jpg-nMUhMOOscP4mbmADYsF4oVpZIrrrkV.jpeg",
    badge: "Popular",
    dimensions: "Dimensions: 18m x 32.9m (592.2 sqm)",
    features: [
      "Professional wooden sports flooring",
      "Multiple basketball hoops available",
      "6-a-side football capacity",
      "High ceilings with excellent natural light",
      "Versatile configuration options",
      "Our largest venue space",
    ],
    emailSubject: "Space Inquiry - The Sports Hall",
  },
  {
    title: "The Old Gym",
    description: "Intimate training space with character, ideal for fitness and martial arts",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oaisis_VillageSTMartins_LR_YCUK_29.jpg-glRRQUNMCb61bOk02lAc7SRzkcvujC.jpeg",
    dimensions: "Dimensions: 10m x 15m (150 sqm)",
    features: [
      "Perfect for groups up to 25 people",
      "Excellent for martial arts and boxing",
      "Beautiful natural light from arched windows",
      "Original period features",
      "Wooden flooring",
      "Intimate atmosphere with character",
    ],
    emailSubject: "Space Inquiry - The Old Gym",
  },
  {
    title: "Dance Studio",
    description: "Professional dance and movement studio with premium facilities",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dance-studio-R0UwfVJkWaCOAzfL1tjNtSysP1Hwm4.png",
    dimensions: "Dimensions: 6.7m x 6.3m (42.21 sqm)",
    features: [
      "Sprung wooden floor for safety",
      "Full-length mirrors on all walls",
      "Professional track lighting system",
      "Natural light from windows",
      "Sound system available",
      "Climate controlled",
      "Dance classes: Up to 15 people",
      "Fitness sessions: Up to 20 people",
    ],
    emailSubject: "Space Inquiry - Dance Studio",
  },
]

const outdoorFacilities = [
  {
    title: "Outdoor Netball Pitch",
    description: "Full-size regulation netball court with professional markings and posts",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-02%20at%2014.36.16.png-qTGV0pTNSfJTmoVQDwFkQjd4njL3cq.jpeg",
    badge: "Featured",
    dimensions: "Full regulation size court",
    features: [
      "Professional netball posts",
      "All-weather surface",
      "Floodlighting available",
      "Professional court markings",
      "Suitable for tournaments",
      "Adjacent changing facilities",
    ],
    emailSubject: "Space Inquiry - Outdoor Netball Pitch",
  },
  {
    title: "The Sports Field",
    description: "Expansive outdoor grass field perfect for football, rugby, and large-scale events",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-02%20at%2014.36.36.png-up748yssKc98mP6euKWnX4SLTlISqb.jpeg",
    dimensions: "Large open grass area",
    features: [
      "Suitable for full-size football pitch",
      "Perfect for athletics training",
      "Adjacent changing facilities",
      "Well-maintained grass surface",
      "Ideal for sports days and tournaments",
      "Ample space for multiple activities",
    ],
    emailSubject: "Space Inquiry - The Sports Field",
  },
]

export default function FacilityCards() {
  const [selectedFacility, setSelectedFacility] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("indoor")
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [selectedFacilityForContact, setSelectedFacilityForContact] = useState<any>(null)

  const openModal = (facility: any) => {
    setSelectedFacility(facility)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedFacility(null)
  }

  const openContactModal = (facility: any) => {
    setSelectedFacilityForContact(facility)
    setContactModalOpen(true)
  }

  const closeContactModal = () => {
    setContactModalOpen(false)
    setSelectedFacilityForContact(null)
  }

  return (
    <>
      <Tabs defaultValue="indoor" onValueChange={setActiveTab} className="w-full">
        <TabsList className="relative grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-gray-100 p-1 rounded-full">
          <TabsTrigger className="relative z-10 rounded-lg text-gray-600 data-[state=active]:text-gray-900" value="indoor">
            Indoor Facilities
            {activeTab === "indoor" && (
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute inset-0 z-[-1] bg-white rounded-full shadow-sm"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </TabsTrigger>
          <TabsTrigger className="relative z-10 rounded-lg text-gray-600 data-[state=active]:text-gray-900" value="outdoor">
            Outdoor Facilities
            {activeTab === "outdoor" && (
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute inset-0 z-[-1] bg-white rounded-full shadow-sm"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="indoor">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {indoorFacilities.map((facility, index) => (
              <div key={index} className="flex flex-col rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group bg-white overflow-hidden">
                <div className="aspect-video w-full cursor-pointer" onClick={() => openModal(facility)}>
                  <img
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="bg-teal-600 text-white p-5 cursor-pointer" onClick={() => openModal(facility)}>
                  <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                  <p className="text-teal-100">{facility.description}</p>
                </div>

                <div className="p-5 flex-1">
                  <ul className="space-y-3">
                    {facility.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-5 pb-5 mt-auto flex justify-between">
                  <a onClick={() => openModal(facility)} className="text-teal-600 hover:text-teal-700 cursor-pointer">
                    View Details
                  </a>
                  <Button 
                    className="bg-teal-600 hover:bg-teal-700 text-white" 
                    onClick={() => openContactModal(facility)}
                  >
                    Enquire Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="outdoor">
          <div className="grid gap-8 md:grid-cols-2">
            {outdoorFacilities.map((facility, index) => (
              <div key={index} className="flex flex-col rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group bg-white overflow-hidden">
                <div className="aspect-video w-full cursor-pointer" onClick={() => openModal(facility)}>
                  <img
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="bg-teal-600 text-white p-5 cursor-pointer" onClick={() => openModal(facility)}>
                  <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                  <p className="text-teal-100">{facility.description}</p>
                </div>

                <div className="p-5 flex-1">
                  <ul className="space-y-3">
                    {facility.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-5 pb-5 mt-auto flex justify-between">
                  <a onClick={() => openModal(facility)} className="text-teal-600 hover:text-teal-700 cursor-pointer">
                    View Details
                  </a>
                  <Button 
                    className="bg-teal-600 hover:bg-teal-700 text-white" 
                    onClick={() => openContactModal(facility)}
                  >
                    Enquire Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Facility Details Modal */}
      {selectedFacility && <FacilityModal isOpen={isModalOpen} onClose={closeModal} facility={selectedFacility} />}
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={closeContactModal} 
        facilityName={selectedFacilityForContact?.title}
        subject={selectedFacilityForContact?.emailSubject}
      />
    </>
  )
}
