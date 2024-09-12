"use client";

import React, { useRef, useState } from "react";
import Navbar from "@/components/navbar";
import Mainbody from "@/components/mainbody";
import ProjectsSection from "@/components/ProjectSection";
import AboutMe from "@/components/AboutMe";

export const context = React.createContext();

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Create refs for the sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div className="overflow-hidden">
      <context.Provider value={[isMenuOpen, setIsMenuOpen]}>
        <Navbar refs={{ homeRef, aboutRef, projectsRef }} />
        <div ref={homeRef}>
          <Mainbody menuState={isMenuOpen} />
        </div>
        
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        
        <div ref={projectsRef}>
          <ProjectsSection />
        </div>
      </context.Provider>
    </div>
  );
}
