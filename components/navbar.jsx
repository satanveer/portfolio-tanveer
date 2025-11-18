"use client";

import React, { useEffect, useContext, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { context } from "@/app/page";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, X } from "lucide-react";

export default function Navbar({ refs }) {
  const [isMenuOpen, setIsMenuOpen] = useContext(context);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);

  const menuItems = [
    { label: "Home", ref: refs.homeRef, description: "Welcome to my portfolio" },
    { label: "About", ref: refs.aboutRef, description: "Learn more about me and my skills" },
    { label: "Projects", ref: refs.projectsRef, description: "Explore my recent work and achievements" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/satanveer", label: "GitHub", color: "from-gray-700 to-gray-900" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/satanveer/", label: "LinkedIn", color: "from-blue-500 to-blue-700" },
    { icon: Mail, href: "mailto:satanveersingh@gmail.com", label: "Email", color: "from-purple-500 to-pink-500" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    document.body.style.overflow = isMenuOpen ? "hidden" : "visible";
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "visible";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); 
  };

  return (
    <>
      {/* Glassmorphism Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-lg' : 'glass'
        }`}
        style={{ opacity: navOpacity }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo/Menu Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="relative group bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none w-12 h-12 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold"
              >
                {isMenuOpen ? "✕" : "☰"}
              </motion.div>
            </Button>
          </motion.div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`p-2 rounded-full bg-gradient-to-r ${link.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <link.icon className="w-5 h-5" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Hire Me Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild 
              className={`bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white border-none shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 magnetic-btn ${
                isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <a href="mailto:satanveersingh@gmail.com" className="relative overflow-hidden group">
                <span className="relative z-10">Hire me</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Premium Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600"
              initial={{ scale: 0, borderRadius: "100%" }}
              animate={{ scale: 1, borderRadius: "0%" }}
              exit={{ scale: 0, borderRadius: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-24">
              {/* Menu Items */}
              <div className="space-y-8 mb-12">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, x: -100, rotateY: -90 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: 100, rotateY: 90 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 200,
                    }}
                    onClick={() => scrollToSection(item.ref)}
                  >
                    <div>
                      <motion.h3
                        className="text-5xl md:text-7xl font-bold text-white"
                        whileHover={{ scale: 1.05, x: 20 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.h3>
                      <motion.p
                        className="text-lg md:text-xl text-white/80 mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (index * 0.1) + 0.2 }}
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
