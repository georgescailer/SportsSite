"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 80)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent backdrop-blur-sm bg-black/5 py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <img src="/oasis-logo.png" alt="Oasis St Martin's Village" className="h-10 w-auto" />
              <span className={`text-lg font-bold ${scrolled ? 'text-teal-600' : 'text-white'} hidden sm:block transition-colors duration-300 drop-shadow-sm`}>
                Oasis St Martin's Village
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link 
                    href="#spaces" 
                    className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-500 font-medium transition-colors duration-300 drop-shadow-sm`}
                  >
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#contact" 
                    className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-500 font-medium transition-colors duration-300 drop-shadow-sm`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <Button 
              className={`${scrolled ? 'bg-teal-600 text-white' : 'bg-white/90 text-teal-600'} hover:bg-teal-700 hover:text-white transition-colors duration-300 shadow-md`} 
              asChild
            >
              <Link href="mailto:thevillagestmartins@gmail.com">Book Now</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center rounded-md p-2 ${
                scrolled ? 'text-gray-500 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              } hover:text-gray-700 transition-colors duration-300`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="space-y-1 px-4 py-5">
            <Link 
              href="#spaces"
              className="block py-2 text-gray-700 hover:text-teal-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Facilities
            </Link>
            <Link 
              href="#contact"
              className="block py-2 text-gray-700 hover:text-teal-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-4">
              <Button className="w-full bg-teal-600 hover:bg-teal-700" asChild>
                <Link href="mailto:thevillagestmartins@gmail.com">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
