"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { ChevronDown, ChevronUp } from 'lucide-react'

const skills = [
  { 
    name: 'React.js', 
    logo: 'https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000', 
    summary: 'Building modern web applications', 
    experience: 80 
  },
  { 
    name: 'Next.js', 
    logo: 'https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000', 
    summary: 'React framework for production', 
    experience: 80 
  },
  { 
    name: 'JavaScript', 
    logo: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000', 
    summary: 'Dynamic programming language', 
    experience: 60 
  },
  { 
    name: 'TypeScript', 
    logo: 'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000', 
    summary: 'Typed superset of JavaScript', 
    experience: 70 
  },
  { 
    name: 'C++', 
    logo: 'https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png&color=000000', 
    summary: 'Versatile programming language', 
    experience: 65 
  },
  { 
    name: 'Python', 
    logo: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000', 
    summary: 'Versatile programming language', 
    experience: 65 
  },
  { 
    name: 'Tailwind CSS', 
    logo: 'https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000', 
    summary: 'Utility-first CSS framework', 
    experience: 50 
  },
  { 
    name: 'MySQL', 
    logo: 'https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000', 
    summary: 'Relational database management system', 
    experience: 45 
  },
]

export default function Mainbody({ menuState }) {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredLetter, setHoveredLetter] = useState(null)

  return (
    <div>
      <main className={`transition-opacity duration-500 ease-in-out ${menuState ? 'opacity-0' : 'opacity-100'}`}>
        <div className="min-h-screen bg-background text-foreground">
         
          <ScrollAnimation>
            <div className="relative h-screen flex items-center justify-center">
              <div className="relative w-[280px] h-[400px] md:w-[420px] md:h-[600px] overflow-hidden z-10">
                <img
                  src="/Tanveer-portfolio.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute text-9xl md:text-[400px] font-bold text-primary opacity-30 whitespace-nowrap select-none overflow-clip"
                style={{ cursor: 'default' }}
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {"Tanveer Singh".split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    animate={{
                      scale: hoveredLetter === index ? 1.2 : 1,
                      color: hoveredLetter === index ? "#ff0000" : "#000000",
                    }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setHoveredLetter(index)}
                    onMouseLeave={() => setHoveredLetter(null)}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </ScrollAnimation>

          
          <ScrollAnimation>
            <div className="py-16 px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
              <div className="max-w-7xl mx-auto">
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                  layout
                >
                  {skills.slice(0, isOpen ? skills.length : 4).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <SkillCard skill={skill} />
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div className="mt-8 text-center" layout>
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

function SkillCard({ skill }) {
  return (
    <motion.div
      className="bg-card text-card-foreground rounded-lg shadow-lg p-6 h-full flex flex-col items-center"
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <motion.div className="mb-4 flex items-center">
        <motion.img
          src={skill.logo}
          alt={skill.name}
          className="w-12 h-12 mr-4"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.5 }}
        />
        <div>
          <h3 className="text-xl font-semibold">{skill.name}</h3>
          <p className="text-sm text-muted-foreground">{skill.summary}</p>
        </div>
      </motion.div>
      <div className="space-y-2 w-full">
        <div className="flex justify-between text-sm">
          <span>Experience</span>
          <span>{skill.experience}%</span>
        </div>
        <Progress value={skill.experience} className="w-full" />
      </div>
    </motion.div>
  )
}

function ScrollAnimation({ children }) {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (top < windowHeight) {
          controls.start({ opacity: 1, y: 0 })
        } else {
          controls.start({ opacity: 0, y: 50 })
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
