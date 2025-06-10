"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <img src="/oasis-logo.png" alt="Oasis St Martin's Village" className="h-10 w-auto" />
              <span className="text-lg font-bold text-teal-600 hidden sm:block">Oasis St Martin's Village</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <Button className="bg-teal-600 hover:bg-teal-700" asChild>
              <Link href="mailto:thevillagestmartins@gmail.com">Contact Us</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
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
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <div className="mt-4 px-3">
              <Button className="w-full bg-teal-600 hover:bg-teal-700" asChild>
                <Link href="mailto:thevillagestmartins@gmail.com">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
