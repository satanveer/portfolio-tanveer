"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Linkedin, Calendar, Briefcase, Award, Code2 } from 'lucide-react'
import Link from 'next/link'

const experiences = [
  {
    title: "FOUNDER",
    company: "AssignmentPal",
    period: "Nov 2022 - Jan 2025",
    icon: Award,
    color: "from-purple-500 to-purple-600",
    description: (
      <>
        Your global academic support team. Expert help for all your needs.{' '}
        <motion.button 
          className="flex items-center bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 mt-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="https://assignmentpal.biz" target="_blank" rel="noopener noreferrer" className="text-white flex items-center">
            Visit Website
          </a>
        </motion.button>
      </>
    )
  },
  {
    title: "Software Developer Intern",
    company: "Fidelity International",
    period: "Jan 2025 - Jul 2025",
    icon: Briefcase,
    color: "from-blue-500 to-blue-600",
    description: (
      <>
        Software Developer Intern at Fidelity International.{' '}
      </>
    )
  }
]

const stats = [
  { label: "Years Experience", value: "3+", icon: Calendar },
  { label: "Projects Completed", value: "15+", icon: Code2 },
  { label: "Happy Clients", value: "100+", icon: Award },
]

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
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
      transition={{ duration: 0.6, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  )
}

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-purple-50/20 to-background text-foreground py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* iMessage Bubble */}
        <motion.div
          className="mb-12 flex justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-md">
            <motion.div
              className="bg-gray-700 text-white rounded-3xl rounded-tr-sm px-5 py-3 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-base leading-relaxed">
                Let me tell you a bit about myself! Here's my journey, experience, and what drives me as a developer.
              </p>
            </motion.div>
            <p className="text-xs text-gray-400 mt-1 mr-2 text-right">Just now</p>
          </div>
        </motion.div>

        {/* Header Section */}
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            {/* Profile Image with Fancy Border */}
            <motion.div
              className="relative inline-block mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1
              }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/tanveer_image.jpg"
                    alt="Tanveer Singh"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Name and Title */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              <span className="gradient-text">Tanveer Singh</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-block"
            >
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-xl font-semibold shadow-xl">
                Full Stack Developer
              </span>
            </motion.div>
          </div>
        </FadeInWhenVisible>

        {/* Stats Section */}
        <FadeInWhenVisible delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-strong rounded-2xl p-6 text-center"
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <motion.div
                  className="inline-block mb-3"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-4xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </FadeInWhenVisible>

        {/* About Me Section */}
        <FadeInWhenVisible delay={0.3}>
          <section className="mb-16">
            <motion.h2 
              className="text-4xl font-bold mb-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text">About Me</span>
            </motion.h2>
            <motion.div
              className="glass-strong rounded-3xl p-8 shadow-2xl border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg leading-relaxed text-center">
                Skilled in developing robust web applications using Next.js, React, Tailwind CSS, and MySQL. Proven ability to integrate APIs,
                ensure responsive design, and enhance user experiences through dynamic front-end and efficient back-end development. Proficient
                in object-oriented programming and modern web technologies. Additionally, a partner in an Academic Support Service, providing
                assignment assistance to foreign students and serving over 100 clients.
              </p>
            </motion.div>
          </section>
        </FadeInWhenVisible>

        {/* Experience Timeline */}
        <FadeInWhenVisible delay={0.4}>
          <section className="mb-16">
            <motion.h2 
              className="text-4xl font-bold mb-10 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text">Experience</span>
            </motion.h2>
            
            <div className="space-y-8 relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 hidden md:block" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.2
                  }}
                >
                  <Card className="overflow-hidden glass-strong border border-white/10 shadow-xl">
                    <CardContent className="p-0">
                      <motion.div
                        className="relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Gradient Background */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-10`}
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.5 }}
                        />

                        <div className="p-6 md:p-8 relative z-10 flex items-start gap-4">
                          {/* Icon */}
                          <motion.div
                            className={`p-3 bg-gradient-to-br ${exp.color} rounded-xl shadow-lg flex-shrink-0`}
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.6 }}
                          >
                            <exp.icon className="w-6 h-6 text-white" />
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1">
                            <motion.h3
                              className="text-2xl font-bold mb-1"
                              whileHover={{ x: 10 }}
                            >
                              {exp.title}
                            </motion.h3>
                            <p className="text-lg text-muted-foreground mb-3">
                              {exp.company} | {exp.period}
                            </p>
                            <div className="text-foreground">
                              {exp.description}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Download CV Section */}
        <FadeInWhenVisible delay={0.5}>
          <div className="text-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="https://drive.google.com/file/d/1zEFUVX3QJenXwfNuLoRNmbl-2Zj5Tdiv/view?usp=sharing" passHref legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download My Resume
                </a>
              </Link>
            </motion.div>
          </div>
        </FadeInWhenVisible>

        {/* Footer/Social */}
        <FadeInWhenVisible delay={0.6}>
          <footer className="text-center py-12 border-t border-white/10">
            <p className="text-muted-foreground mb-6 text-lg">Let's connect and build something amazing!</p>
            <motion.div className="flex justify-center gap-6">
              <motion.a 
                href="https://www.linkedin.com/in/satanveer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-semibold">LinkedIn</span>
              </motion.a>
            </motion.div>
          </footer>
        </FadeInWhenVisible>
      </div>
    </div>
  )
}
