"use client";

import React, { useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { context } from "@/app/page";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar({ refs }) {
  const [isMenuOpen, setIsMenuOpen] = useContext(context);

  const menuItems = [
    { label: "Home", ref: refs.homeRef, description: "Welcome to my portfolio" },
    { label: "About", ref: refs.aboutRef, description: "Learn more about me and my skills" },
    { label: "Projects", ref: refs.projectsRef, description: "Explore my recent work and achievements" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/satanveer", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/satanveer/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:satanveersingh@gmail.com", label: "Email" },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close the menu after clicking
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Toggle button content */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="relative focus:outline-none bg-white text-purple-500 border-none text-xl align-middle justify-center flex"
        >
          ☰{/* Menu icon (can replace with an actual icon or svg) */}
        </Button>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button asChild className={`bg-white text-purple-500 hover:bg-purple-100 transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}>
            <a href="mailto:satanveersingh@gmail.com">Hire me</a>
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
                  key={item.label}
                  className="my-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    className="text-4xl font-bold transition-all duration-300 ease-in-out transform group-hover:translate-x-2 inline-block text-purple-100 hover:text-white"
                    onClick={() => scrollToSection(item.ref)}
                  >
                    {item.label}
                  </button>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
