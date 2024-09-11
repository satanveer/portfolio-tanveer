"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Linkedin } from 'lucide-react'
import Link from 'next/link'

const experiences = [
  {
    title: "FOUNDER",
    company: "AssignmentPal",
    period: "2022 - Present",
    description: (
      <>
        Your global academic support team. Expert help for all your needs.{' '}
        <button className="flex items-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 mt-2">
    
    <a href="https://assignmentpal.biz" target="_blank" rel="noopener noreferrer" className="text-white flex items-center">
      Visit 
    </a>
    <img
      src="https://img.icons8.com/?size=100&id=zWS3SNRj7odb&format=png&color=000000"  
      alt="Visit Icon"
      className="w-[16px] h-[16px] ml-2" 
    />
  </button>

      </>
    )
  }
]

const FadeInWhenVisible = ({ children }) => {
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
      transition={{ duration: 0.5 }}
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
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1
              }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <Image
                src="/tanveer_image.jpg"
                alt="Tanveer Singh"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6 border-4 border-primary"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold mb-4"
            >
              Tanveer Singh
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block"
            >
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-xl font-semibold shadow-lg">
                Web Developer
              </span>
            </motion.div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-lg">
            Skilled in developing robust web applications using Next.js, React, Tailwind CSS, and MySQL. Proven ability to integrate APIs,
            ensure responsive design, and enhance user experiences through dynamic front-end and efficient back-end development. Proficient
            in object-oriented programming and modern web technologies. Additionally, a partner in an Academic Support Service, providing
            assignment assistance to foreign students and serving over 100 clients.
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50, rotateX: -90 }}
                  animate={{ opacity: 1, x: 0, rotateX: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: index * 0.1,
                    duration: 0.5
                  }}
                  whileHover={{ 
                    scale: 1.03, 
                    rotateY: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-6 relative">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                        initial={{ opacity: 0, x: "-100%" }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="text-xl font-semibold relative z-10"
                      >
                        {exp.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                        className="text-muted-foreground relative z-10"
                      >
                        {exp.company} | {exp.period}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                        className="mt-2 relative z-10"
                      >
                        {exp.description}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="px-4 sm:px-6 lg:px-8 text-center">
    <Link href="https://drive.google.com/file/d/1zEFUVX3QJenXwfNuLoRNmbl-2Zj5Tdiv/view?usp=sharing" passHref legacyBehavior>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-semibold rounded-full shadow-md hover:opacity-75 hover:scale-100 transition-transform duration-500 ease-in-out"
      >
        Download CV
      </a>
    </Link>
  </div>

            </motion.div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <footer className="text-center py-8 border-t">
            <p className="text-muted-foreground mb-4">Find me on</p>
            <motion.a 
              href="https://www.linkedin.com/in/satanveer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </motion.a>
          </footer>
        </FadeInWhenVisible>
      </div>
    </div>
  )
}
