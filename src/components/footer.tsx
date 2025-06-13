import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <div className="flex items-center gap-3 mb-4">
              <img src="/oasis-logo.png" alt="Oasis St Martin's Village" className="h-10 w-auto" />
              <h3 className="text-xl font-bold">Oasis St Martin's Village</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium sports and event spaces for community clubs and activities. Host your next training session,
              tournament, or sports event with us.
            </p>
            <div className="mt-6 flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">•</span> Home
                </Link>
              </li>
              <li>
                <Link href="#spaces" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">•</span> Facilities
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">•</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold border-b border-gray-800 pb-2">Our Facilities</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#spaces" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">•</span> Sports Hall
                </Link>
              </li>
              <li>
                <Link href="#spaces" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">•</span> Dance Studio
                </Link>
              </li>
              <li>
                <Link href="#spaces" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">•</span> Sports Field
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold border-b border-gray-800 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-teal-400 mt-0.5" />
                <span className="text-gray-400">155 Tulse Hill, London SW2 3UP</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-teal-400" />
                <a href="mailto:thevillagestmartins@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                  thevillagestmartins@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Oasis St Martin's Village. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
