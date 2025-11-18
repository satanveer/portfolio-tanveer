"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/navbar";
import Mainbody from "@/components/mainbody";
import ProjectsSection from "@/components/ProjectSection";
import AboutMe from "@/components/AboutMe";
import LoadingScreen from "@/components/LoadingScreen";

export const context = React.createContext();

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    window.addEventListener("mousemove", moveCursor);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button']");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);



  return (
    <div className="overflow-hidden relative">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-purple-500 rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: cursorPosition.x - 6,
          y: cursorPosition.y - 6,
          scale: cursorVariant === "hover" ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 25,
        }}
      />

      <context.Provider value={[isMenuOpen, setIsMenuOpen]}>
        <Navbar refs={{ homeRef, aboutRef, projectsRef }} />
        
        <motion.div
          ref={homeRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Mainbody menuState={isMenuOpen} />
        </motion.div>
        
        <motion.div
          ref={projectsRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <ProjectsSection />
        </motion.div>
        
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <AboutMe />
        </motion.div>
      </context.Provider>

      {/* Floating Back to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg z-50 hidden md:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: scrollYProgress.get() > 0.2 ? 1 : 0, scale: scrollYProgress.get() > 0.2 ? 1 : 0 }}
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </div>
  );
}
