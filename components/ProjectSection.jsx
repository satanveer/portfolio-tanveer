"use client"

import React, { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "Cohort Builder",
    image: "/cohort-img.jpeg",
    summary: "AI-powered patient cohort builder with clarification-first UX. Takes natural language queries, asks targeted questions, and generates safe parameterized SQL. Features transparent debugging with full visibility into LLM reasoning and query generation.",
    githubLink: "https://github.com/satanveer/Cohort-Builder",
    liveLink: null,
    techStack: [
      { name: "React", icon: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000" },
      { name: "Flask", icon: "https://img.icons8.com/?size=100&id=ewGOClUtmFX4&format=png&color=000000" },
      { name: "Gemini AI", icon: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000" },
      { name: "SQLite", icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000" },
      { name: "Tailwind", icon: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000" }
    ],
    gradient: "from-purple-500 to-purple-600"
  },
  {
    title: "BobbyFlow",
    image: "/bobbyflow.png",
    summary: "A productivity app with deep insights about your focus sessions, Pomodoro activity, Google Calendar integration, and note-taking ability.",
    githubLink: "https://github.com/satanveer/focus-flow",
    liveLink: "https://www.bobbyflow.live/",
    techStack: [
      { name: "React", icon: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000" },
      { name: "Appwrite", icon: "/appwrite.png" },
      { name: "TailwindCSS", icon: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000" }
    ],
    gradient: "from-purple-500 to-purple-600"
  },
  {
    title: "DesiHatti",
    image: "/desihatti.png",
    summary: "A property dealing platform. Built with React, Spring Boot, and Tailwind.",
    githubLink: "https://github.com/satanveer/dhfe",
    liveLink: "https://dh-fe-psi.vercel.app/",
    techStack: [
      { name: "React", icon: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000" },
      { name: "Spring Boot", icon: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000" },
      { name: "TailwindCSS", icon: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000" }
    ],
    gradient: "from-purple-500 to-purple-600"
  }
]

export default function ProjectsSection() {
  const [isOpen, setIsOpen] = useState(false)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      {/* Section Title */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <span className="gradient-text">My Projects</span>
        </motion.h2>
        <p className="text-lg text-muted-foreground">Check out my latest work</p>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {projects.slice(0, isOpen ? projects.length : 3).map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* View More/Less Button */}
        {projects.length > 3 && (
          <motion.div
            className="mt-16 text-center"
            layout
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="outline"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-200 px-8 py-6 text-lg"
            >
              {isOpen ? (
                <>
                  <ChevronUp className="h-5 w-5" />
                  View Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-5 w-5" />
                  View More Projects
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, scale: 1, rotateY: 0 },
        hidden: { opacity: 0, scale: 0.9, rotateY: -20 }
      }}
      exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.08,
        type: "spring",
        stiffness: 200
      }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative bg-card glass-strong rounded-3xl overflow-hidden shadow-2xl border border-white/10 card-3d"
        whileHover={{ 
          y: -15,
          rotateX: 5,
          rotateY: 5,
          scale: 1.02,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden h-56 group">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.6 }}
          />

          {/* Quick Links Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/80 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/80 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <ExternalLink className="w-6 h-6 text-white" />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <motion.div 
          className="p-6 relative flex flex-col min-h-[420px]"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Title */}
          <motion.h3 
            className="text-2xl font-bold mb-3 gradient-text"
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -20 }
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p 
            className="text-muted-foreground mb-6 min-h-[120px]"
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 20 }
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {project.summary}
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 }
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-6 min-h-[100px]"
          >
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  className="relative group/tech"
                  whileHover={{ scale: 1.15, y: -5 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.5 + (techIndex * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm p-2 flex items-center justify-center shadow-lg border border-white/20">
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <span className="text-xs whitespace-nowrap bg-black/80 text-white px-2 py-1 rounded">{tech.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <motion.div
              className={project.liveLink ? "flex-1" : "w-full"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                variant="outline" 
                size="sm" 
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-none shadow-lg"
              >
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </a>
              </Button>
            </motion.div>
            {project.liveLink && (
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-none shadow-lg"
                >
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Corner Accent */}
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl rounded-full transform translate-x-12 -translate-y-12`} />
      </motion.div>
    </motion.div>
  )
} 