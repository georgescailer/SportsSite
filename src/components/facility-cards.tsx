"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import FacilityModal from "./facility-modal"

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
    image: "/netball-court-new.jpg",
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
    image: "/sports-field-new.jpg",
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

  const openModal = (facility: any) => {
    setSelectedFacility(facility)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedFacility(null)
  }

  return (
    <>
      <Tabs defaultValue="indoor" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="indoor">Indoor Facilities</TabsTrigger>
          <TabsTrigger value="outdoor">Outdoor Facilities</TabsTrigger>
        </TabsList>

        <TabsContent value="indoor">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {indoorFacilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden" onClick={() => openModal(facility)}>
                  <img
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader onClick={() => openModal(facility)} className="cursor-pointer">
                  <div className="flex justify-between items-center">
                    <CardTitle>{facility.title}</CardTitle>
                    {facility.badge && <Badge>{facility.badge}</Badge>}
                  </div>
                  <CardDescription>{facility.description}</CardDescription>
                </CardHeader>
                <CardContent onClick={() => openModal(facility)} className="cursor-pointer">
                  <ul className="space-y-2">
                    {facility.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-lg font-semibold text-gray-600">Enquire for rates</div>
                  <Button className="bg-teal-600 hover:bg-teal-700" asChild>
                    <Link href={`mailto:thevillagestmartins@gmail.com?subject=${facility.emailSubject}`}>
                      Enquire Now
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="outdoor">
          <div className="grid gap-8 md:grid-cols-2">
            {outdoorFacilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden" onClick={() => openModal(facility)}>
                  <img
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader onClick={() => openModal(facility)} className="cursor-pointer">
                  <div className="flex justify-between items-center">
                    <CardTitle>{facility.title}</CardTitle>
                    {facility.badge && <Badge>{facility.badge}</Badge>}
                  </div>
                  <CardDescription>{facility.description}</CardDescription>
                </CardHeader>
                <CardContent onClick={() => openModal(facility)} className="cursor-pointer">
                  <ul className="space-y-2">
                    {facility.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-lg font-semibold text-gray-600">Enquire for rates</div>
                  <Button className="bg-teal-600 hover:bg-teal-700" asChild>
                    <Link href={`mailto:thevillagestmartins@gmail.com?subject=${facility.emailSubject}`}>
                      Enquire Now
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Modal */}
      {selectedFacility && <FacilityModal isOpen={isModalOpen} onClose={closeModal} facility={selectedFacility} />}
    </>
  )
}
