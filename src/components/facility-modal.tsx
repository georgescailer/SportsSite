"use client"
import { X, CheckCircle2, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import ContactModal from "./contact-modal"

interface FacilityModalProps {
  isOpen: boolean
  onClose: () => void
  facility: {
    title: string
    description: string
    image: string
    badge?: string
    features: string[]
    dimensions: string
    emailSubject: string
  }
}

export default function FacilityModal({ isOpen, onClose, facility }: FacilityModalProps) {
  const [contactModalOpen, setContactModalOpen] = useState(false)

  if (!isOpen) return null

  const openContactModal = () => {
    setContactModalOpen(true)
  }

  const closeContactModal = () => {
    setContactModalOpen(false)
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

        {/* Modal */}
        <div className="relative bg-white rounded-xl shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 hover:bg-white transition-colors shadow-lg"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Content */}
          <div className="grid lg:grid-cols-5 gap-0 min-h-[600px]">
            {/* Image - Takes up 3/5 of the width on large screens */}
            <div className="lg:col-span-3 min-h-[400px] lg:min-h-[600px] overflow-hidden">
              <img
                src={facility.image || "/placeholder.svg"}
                alt={facility.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Details - Takes up 2/5 of the width on large screens */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              {/* Header with green background */}
              <div className="bg-teal-600 text-white p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl lg:text-3xl font-bold">{facility.title}</h2>
                  {facility.badge && <Badge className="bg-white/30 text-white hover:bg-white/40">{facility.badge}</Badge>}
                </div>
                <p className="text-teal-100 text-base lg:text-lg">{facility.description}</p>
              </div>

              {/* Facility details */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-6 text-gray-700">
                  <Calendar className="h-5 w-5 text-teal-600" />
                  <span className="font-medium">{facility.dimensions}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">Facility Features</h3>
                <ul className="space-y-3 mb-8">
                  {facility.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer with action buttons */}
              <div className="border-t border-gray-100 p-6 lg:p-8">
                <p className="text-gray-700 mb-4">
                  Interested in booking this facility? Contact us today to check availability and rates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-teal-600 hover:bg-teal-700 text-white shadow-md flex-1" 
                    onClick={openContactModal}
                  >
                    <Mail className="mr-2 h-4 w-4" /> Contact Us
                  </Button>
                  <Button variant="outline" onClick={onClose} className="border-teal-200 text-teal-700 hover:bg-teal-50 flex-1">
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={closeContactModal} 
        facilityName={facility.title}
        subject={facility.emailSubject}
      />
    </>
  )
}
