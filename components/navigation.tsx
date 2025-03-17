"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobile ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="font-bold text-xl">Nice Notes</div>

            {isMobile ? (
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            ) : (
              <div className="flex space-x-6">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-sm font-medium hover:text-primary transition-colors py-2 px-3"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("notes")}
                  className="text-sm font-medium hover:text-primary transition-colors py-2 px-3"
                >
                  Notes
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm font-medium hover:text-primary transition-colors py-2 px-3"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-sm font-medium hover:text-primary transition-colors py-2 px-3"
                >
                  FAQ
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-20 bg-background/95 backdrop-blur-md shadow-sm z-40 p-4 border-t">
          <div className="flex flex-col space-y-4 pt-4">
            <button
              onClick={() => scrollToSection("home")}
              className="py-4 text-lg font-medium hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("notes")}
              className="py-4 text-lg font-medium hover:text-primary transition-colors"
            >
              Notes
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="py-4 text-lg font-medium hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="py-4 text-lg font-medium hover:text-primary transition-colors"
            >
              FAQ
            </button>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from being hidden under the fixed navbar */}
      <div className="h-20"></div>
    </>
  )
}

