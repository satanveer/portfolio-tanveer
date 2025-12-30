import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { ChevronDown, ChevronUp } from 'lucide-react'

const skills = [
  { 
    name: 'React.js', 
    logo: 'https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000', 
    summary: 'Building modern web applications', 
    experience: 80,
    color: 'from-purple-500 to-purple-600'
  },
  { 
    name: 'Next.js', 
    logo: 'https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000', 
    summary: 'React framework for production', 
    experience: 80,
    color: 'from-purple-500 to-purple-600'
  },
  { 
    name: 'JavaScript', 
    logo: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000', 
    summary: 'Dynamic programming language', 
    experience: 60,
    color: 'from-purple-500 to-purple-600'
  },
  { 
    name: 'TypeScript', 
    logo: 'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000', 
    summary: 'Typed superset of JavaScript', 
    experience: 70,
    color: 'from-purple-500 to-purple-600'
  },
  { 
    name: 'C++', 
    logo: 'https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png&color=000000', 
    summary: 'Versatile programming language', 
    experience: 65,
    color: 'from-purple-500 to-purple-600'
  },
  { 
    name: 'Python', 
    logo: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000', 
    summary: 'Versatile programming language', 
    experience: 65,
    color: 'from-purple-500 to-purple-600'
  },
  { 
    name: 'Tailwind CSS', 
    logo: 'https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000', 
    summary: 'Utility-first CSS framework', 
    experience: 50,
    color: 'from-purple-500 to-purple-600'
  },
  { 
    name: 'MySQL', 
    logo: 'https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000', 
    summary: 'Relational database management system', 
    experience: 45,
    color: 'from-purple-500 to-purple-600'
  },
  { 
    name: 'Flask', 
    logo: 'https://img.icons8.com/?size=100&id=ewGOClUtmFX4&format=png&color=000000', 
    summary: 'Lightweight Python web framework', 
    experience: 60,
    color: 'from-purple-500 to-purple-600'
  },
  { 
    name: 'Django', 
    logo: 'https://img.icons8.com/?size=100&id=qV-JzWYl9dzP&format=png&color=000000', 
    summary: 'High-level Python web framework', 
    experience: 55,
    color: 'from-purple-500 to-purple-600'
  },
  { 
    name: 'Spring Boot', 
    logo: 'https://img.icons8.com/?size=100&id=90519&format=png&color=000000', 
    summary: 'Java-based framework for microservices', 
    experience: 50,
    color: 'from-purple-500 to-purple-600'
  },
  { 
    name: 'Appwrite', 
    logo: '/appwrite.png', 
    summary: 'Open-source backend-as-a-service platform', 
    experience: 65,
    color: 'from-purple-500 to-purple-600'
  },
]

export default function Mainbody({ menuState }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <div>
      <main className={`transition-opacity duration-500 ease-in-out ${menuState ? 'opacity-0' : 'opacity-100'}`}>
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
          {/* Animated Background Gradient Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-0 -right-4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob"
              animate={{
                x: [0, -100, 0],
                y: [0, 100, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob"
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Hero Section with 3D Parallax */}
          <ScrollAnimation>
            <div className="relative h-screen flex items-center justify-center">
              {/* Profile Image with 3D Effect */}
              <motion.div
                className="relative z-10"
                style={{
                  rotateX: useTransform(
                    useMotionValue(mousePosition.y),
                    [0, typeof window !== 'undefined' ? window.innerHeight : 1000],
                    [10, -10]
                  ),
                  rotateY: useTransform(
                    useMotionValue(mousePosition.x),
                    [0, typeof window !== 'undefined' ? window.innerWidth : 1000],
                    [-10, 10]
                  ),
                }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  duration: 1
                }}
              >
                <div className="relative w-[280px] h-[400px] md:w-[420px] md:h-[600px] overflow-hidden rounded-3xl shadow-2xl border-4 border-white/20">
                  <motion.img
                    src="/Tanveer-portfolio.png"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 glass-strong px-6 py-3 rounded-full shadow-xl"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <p className="gradient-text text-xl font-bold whitespace-nowrap">
                    Full Stack Developer ✨
                  </p>
                </motion.div>
              </motion.div>

              {/* Animated Text Background */}
              <motion.div
                className="absolute text-7xl md:text-[300px] lg:text-[400px] font-bold opacity-10 whitespace-nowrap select-none overflow-hidden pointer-events-none"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                <span className="gradient-text">TANVEER SINGH</span>
              </motion.div>

            </div>
          </ScrollAnimation>

          {/* Skills Section */}
          <ScrollAnimation>
            <div className="py-12 px-4 sm:px-6 lg:px-8 relative">
              {/* Section Title */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.h2 
                  className="text-5xl md:text-6xl font-bold mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="gradient-text">My Skills</span>
                </motion.h2>
                <p className="text-lg text-muted-foreground">Technologies I work with</p>
              </motion.div>

              <div className="max-w-7xl mx-auto">
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                  layout
                >
                  {skills.slice(0, isOpen ? skills.length : 4).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.2,
                        delay: index * 0.03,
                        type: "spring",
                        stiffness: 300
                      }}
                    >
                      <SkillCard skill={skill} index={index} />
                    </motion.div>
                  ))}
                </motion.div>

                {/* View More Button */}
                <motion.div 
                  className="mt-12 text-center" 
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
                        View More Skills
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </main>
    </div>
  )
}

function SkillCard({ skill, index }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      className="relative group card-3d"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        rotateY: 5,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Glowing Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
        style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
      />
      
      <div className={`bg-card glass-strong rounded-2xl p-6 h-full flex flex-col items-start shadow-xl border border-white/10 overflow-hidden relative`}>
        {/* Animated Background Gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          initial={false}
          animate={isHovered ? { scale: 1.5 } : { scale: 1 }}
        />

        {/* Content */}
        <div className="relative z-10 w-full">
          {/* Logo and Title */}
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              className="relative"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-full blur-lg opacity-50`} />
              <Image
                src={skill.logo}
                alt={skill.name}
                width={56}
                height={56}
                className="relative z-10"
              />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.summary}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2 w-full">
            <div className="flex justify-between text-sm font-medium">
              <span>Experience</span>
              <motion.span
                key={skill.experience}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-bold"
              >
                {skill.experience}%
              </motion.span>
            </div>
            <div className="relative">
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.experience}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Sparkle Effect */}
        {isHovered && [...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 1,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function ScrollAnimation({ children }) {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && typeof window !== 'undefined') {
        const { top } = ref.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (top < windowHeight * 0.75) {
          controls.start({ opacity: 1, y: 0 })
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
