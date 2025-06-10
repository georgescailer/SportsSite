"use client"
import { X, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

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
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-7xl w-full max-h-[95vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 hover:bg-white transition-colors shadow-lg"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Content */}
        <div className="grid lg:grid-cols-5 gap-0 min-h-[600px]">
          {/* Image - Takes up 3/5 of the width on large screens */}
          <div className="lg:col-span-3 min-h-[400px] lg:min-h-[600px] overflow-hidden rounded-l-lg">
            <img
              src={facility.image || "/placeholder.svg"}
              alt={facility.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Details - Takes up 2/5 of the width on large screens */}
          <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{facility.title}</h2>
                {facility.badge && <Badge className="bg-teal-600">{facility.badge}</Badge>}
              </div>

              <p className="text-gray-600 mb-6 text-base lg:text-lg">{facility.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Facility Details</h3>
                <p className="text-gray-600 mb-4">{facility.dimensions}</p>

                <ul className="space-y-3">
                  {facility.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Button className="bg-teal-600 hover:bg-teal-700" asChild>
                <Link href={`mailto:thevillagestmartins@gmail.com?subject=${facility.emailSubject}`}>Enquire Now</Link>
              </Button>
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
