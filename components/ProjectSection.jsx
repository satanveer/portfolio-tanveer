"use client"

import React, { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "Our tube",
    image: "/ourtube.png",
    summary: "A video sharing website , utilizing youtubeApi",
    githubLink: "https://github.com/satanveer/OurTube",
    liveLink: "https://ourtube-4ff.pages.dev/",
    techStack: ["React.js", "Next.js", "TailwindCSS"]
  },
  {
    title: "Tic Tac Toe",
    image: "/tictactoe.png",
    summary: "A simple Tic Tac Toe Game",
    githubLink: "https://github.com/satanveer/webdev/tree/master/Tic%20Tac%20Toe",
    liveLink: "https://tic-tac-toe-sy5j-blel1sx7g-tanveers-projects-bb05f01e.vercel.app/",
    techStack: ["HTML", "TailWindCSS", "JavaScript"]
  },
  {
    title: "QuizApp",
    image: "/quizapp.png",
    summary: "A geography Quiz App",
    githubLink: "https://webdev-fawn.vercel.app/",
    liveLink: "https://tic-tac-toe-sy5j-blel1sx7g-tanveers-projects-bb05f01e.vercel.app/",
    techStack: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "To Do List",
    image: "/TDL.png",
    summary: "A simple TDL app using Vanilla Js",
    githubLink: "https://github.com/satanveer/webdev/tree/master/ToDoList",
    liveLink: "https://todolist-sand-five.vercel.app/",
    techStack: ["HTML", "CSS", "JavaScript"]
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
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="max-w-7xl mx-auto">
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
          <AnimatePresence>
            {projects.slice(0, isOpen ? projects.length : 2).map((project, index) => (
              index % 2 === 0 && (
                <motion.div
                  key={project.title}
                  className="flex flex-col md:flex-row gap-8 mb-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: (index / 2) * 0.1 }}
                >
                  <ProjectCard project={project} />
                  {projects[index + 1] && <ProjectCard project={projects[index + 1]} />}
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="mt-12 text-center"
          layout
        >
          <Button
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center"
          >
            {isOpen ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                View Less
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                View More Projects
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
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
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 }
      }}
      transition={{ duration: 0.5 }}
      className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden flex-1"
      whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div 
        className="p-6"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 }
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h3 
          className="text-2xl font-semibold mb-2"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -20 }
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {project.title}
        </motion.h3>
        <motion.p 
          className="text-muted-foreground mb-4"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 20 }
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {project.summary}
        </motion.p>
        <div className="flex space-x-4 mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="outline" size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <Github className="mr-2 h-4 w-4" />
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  GitHub
                </motion.span>
              </a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="outline" size="sm" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white border-none">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <ExternalLink className="mr-2 h-4 w-4" />
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Live Demo
                </motion.span>
              </a>
            </Button>
          </motion.div>
        </div>
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h4 className="font-semibold mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <motion.span
                key={tech}
                className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
} 