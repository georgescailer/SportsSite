import Link from "next/link"
import { CalendarDays, MapPin, Users, DollarSign, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import TestimonialCard from "@/components/testimonial-card"
import HeroSlideshow from "@/components/hero-slideshow"
import FacilityCards from "@/components/facility-cards"
import Section from "@/components/section" // Declare the Section variable

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0 z-0">
          <HeroSlideshow />
        </div>
        <div className="container relative z-20 mx-auto px-4 py-24 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <Badge className="mb-4 bg-teal-600 hover:bg-teal-700">Welcome to the Village</Badge>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl drop-shadow-lg">
              Your Community Sports Hub
            </h1>
            <p className="mb-8 text-xl drop-shadow-md">
              Welcome to Oasis St Martin's Village - your local sports destination. Whether you're a football club
              seeking training space, a dance group looking for a studio, or a community organization planning an event,
              we have the perfect facility for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
                <Link href="mailto:thevillagestmartins@gmail.com">Find Your Space</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Our Spaces</h2>
            <p className="mt-4 text-lg text-gray-600">Everything you need for a successful sports event</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-2 rounded-full bg-teal-100 p-2 w-10 h-10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-teal-600" />
                </div>
                <CardTitle>Prime Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Centrally located with easy access to public transportation, ample parking, and close proximity to
                  local amenities and transport links.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-2 rounded-full bg-teal-100 p-2 w-10 h-10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-teal-600" />
                </div>
                <CardTitle>Flexible Capacity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our diverse range of spaces accommodate everything from intimate fitness classes to large sporting
                  events and tournaments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-2 rounded-full bg-teal-100 p-2 w-10 h-10 flex items-center justify-center">
                  <CalendarDays className="h-5 w-5 text-teal-600" />
                </div>
                <CardTitle>Multi-Purpose Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From our spacious sports hall to intimate dance studio, we offer versatile spaces that can be
                  configured for various sports and activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-2 rounded-full bg-teal-100 p-2 w-10 h-10 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-teal-600" />
                </div>
                <CardTitle>Competitive Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Affordable pricing options for all budgets, with special rates for regular bookings and community
                  organizations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Spaces Section */}
      <Section id="spaces" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Event Spaces</h2>
            <p className="mt-4 text-lg text-gray-600">Find the perfect space for your sports event</p>
          </div>

          <FacilityCards />

          <div className="mt-12 text-center">
            <Button className="bg-teal-600 hover:bg-teal-700" asChild>
              <Link href="mailto:thevillagestmartins@gmail.com?subject=General Inquiry - All Spaces">
                <ArrowRight className="mr-2 h-4 w-4" />
                Enquire About All Spaces
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-gray-600">Trusted by sports clubs and organizations across the community</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <TestimonialCard
              quote="Palace for Life are proud to use the fantastic sports hall and wider facilities at Oasis St Martins Village in Tulse Hill. The hall is of a brilliant standard and the wider site offers flexible, high-quality spaces that suit a range of activities. The staff are always welcoming, supportive, and a real pleasure to work alongside. OStMV is quickly becoming a vibrant hub of positivity and opportunity for the local community."
              author="Palace For Life"
              role="Community Sports Organization"
            />

            <TestimonialCard
              quote="We are a full time martial arts club and we've been hiring space at Oasis for 2 years and couldn't be happier. It's the perfect space for running our classes. The facilities are always clean, the staff are super friendly and the location is easy for our clients to find and accessible. We highly recommend Oasis!"
              author="Sanda Kickboxing Academy"
              role="Martial Arts Club"
            />

            <TestimonialCard
              quote="The Dance Studio is fantastic for our classes. The sprung floor and mirrors make it perfect for our dance workshops and fitness sessions."
              author="Emma Thompson"
              role="Dance Instructor"
            />
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ready to Reserve Your Space?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Contact us today to discuss your event needs and secure your booking.
              </p>
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 mt-4" asChild>
                <Link href="mailto:thevillagestmartins@gmail.com">Email Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
