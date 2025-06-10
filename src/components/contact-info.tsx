import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactInfo() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
        <p className="text-gray-600 mb-6">
          Ready to reserve your space? Send us an email with your event details and we'll get back to you within 24
          hours with availability and pricing.
        </p>

        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-blue-600 mr-3" />
            <div>
              <p className="font-medium">Email Us</p>
              <a href="mailto:info@sportspace.com" className="text-blue-600 hover:text-blue-800">
                info@sportspace.com
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <Phone className="h-5 w-5 text-blue-600 mr-3" />
            <div>
              <p className="font-medium">Call Us</p>
              <a href="tel:+11234567890" className="text-blue-600 hover:text-blue-800">
                (123) 456-7890
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-blue-600 mr-3" />
            <div>
              <p className="font-medium">Visit Us</p>
              <p className="text-gray-600">123 Sports Avenue, Athletica City, AC 12345</p>
            </div>
          </div>

          <div className="flex items-center">
            <Clock className="h-5 w-5 text-blue-600 mr-3" />
            <div>
              <p className="font-medium">Office Hours</p>
              <p className="text-gray-600">
                Monday - Friday: 8AM - 6PM
                <br />
                Saturday - Sunday: 9AM - 5PM
              </p>
            </div>
          </div>
        </div>

        <Button className="mt-6 bg-blue-600 hover:bg-blue-700" asChild>
          <a href="mailto:info@sportspace.com?subject=Space Reservation Inquiry">Send Email Inquiry</a>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What to Include in Your Email</CardTitle>
          <CardDescription>Help us serve you better by including these details</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>Your name and organization</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>Preferred space type</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>Event date and time preferences</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>Duration of event</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>Expected number of attendees</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>Any special requirements</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
