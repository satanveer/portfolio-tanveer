"use client"

import React from 'react'

import Link from "next/link"
import { useEffect } from "react"
import { context } from "@/app/page"
import { useContext } from 'react'
import { Button } from './ui/button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useContext(context)

  const menuItems = [
    { label: "Home", href: "/", description: "Welcome to my portfolio" },
    { label: "About", href: "/about", description: "Learn more about me and my skills" },
    { label: "Projects", href: "/projects", description: "Explore my recent work and achievements" },
    { label: "Contact", href: "/contact", description: "Get in touch with me" },
  ]

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'visible'
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-background">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="relative w-10 h-10 focus:outline-none"
        >
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </Button>
        
        <Button asChild className={`transition-opacity duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-0' : 'opacity-100'
        }`}>
          <Link href="mailto:your.email@example.com">Hire me</Link>
        </Button>
      </nav>

      <div 
        className={`fixed inset-0 bg-background transition-opacity duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-95 z-40' : 'opacity-0 -z-10'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className={`flex flex-col items-start justify-center h-full transition-opacity duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0'
        } px-8 md:px-16 lg:px-24`}>
          {menuItems.map((item) => (
            <div key={item.href} className="my-4 group">
              <Link
                href={item.href}
                className="text-4xl font-bold hover:text-primary transition-all duration-300 ease-in-out transform group-hover:translate-x-2 inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
              <p className="text-lg text-muted-foreground mt-2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      
    </>
  )
}