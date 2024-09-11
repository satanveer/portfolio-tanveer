"use client"

import React, { useEffect, useContext } from 'react'
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { context } from "@/app/page"
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useContext(context)
  const pathname = usePathname()

  const menuItems = [
    { label: "Home", href: "#about", description: "Welcome to my portfolio" },
    { label: "About", href: "#about", description: "Learn more about me and my skills" },
    { label: "Projects", href: "#project", description: "Explore my recent work and achievements" },
    { label: "Contact", href: "#about", description: "Get in touch with me" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/satanveer", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/satanveer/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:satanveersingh@gmail.com", label: "Email" },
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
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 "
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="relative w-10 h-10 focus:outline-none bg-white text-purple-500 border-none"
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
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button asChild className={`bg-white text-purple-500 hover:bg-purple-100 transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}>
            <Link href="mailto:your.email@example.com">Hire me</Link>
          </Button>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex flex-col items-start justify-center h-full px-8 md:px-16 lg:px-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {menuItems.map((item, index) => (
                <motion.div 
                  key={item.href} 
                  className="my-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`text-4xl font-bold transition-all duration-300 ease-in-out transform group-hover:translate-x-2 inline-block ${
                      pathname === item.href ? 'text-white' : 'text-purple-100 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <motion.p 
                    className="text-lg text-purple-200 mt-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + 0.2 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              ))}

              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-200 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                    >
                      <link.icon size={24} />
                      <span className="sr-only">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}