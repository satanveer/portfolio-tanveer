"use client"

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const codeLines = [
  "import React from 'react'",
  "import { motion } from 'framer-motion'",
  "",
  "function Portfolio() {",
  "  const skills = ['React', 'Next.js', 'TypeScript']",
  "  const projects = await fetchProjects()",
  "",
  "  return (",
  "    <motion.div>",
  "      <Hero name='Tanveer Singh' />",
  "      <Skills data={skills} />",
  "      <Projects items={projects} />",
  "    </motion.div>",
  "  )",
  "}",
  "",
  "export default Portfolio",
]

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showTransition, setShowTransition] = useState(false)
  const [visibleLines, setVisibleLines] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)

  useEffect(() => {
    // Typing animation
    const typingInterval = setInterval(() => {
      setCurrentChar(prev => {
        const totalChars = codeLines.slice(0, visibleLines + 1).join('').length
        if (prev < totalChars) {
          return prev + 1
        }
        if (visibleLines < codeLines.length - 1) {
          setVisibleLines(v => v + 1)
          return prev + 1
        }
        return prev
      })
    }, 30)

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          clearInterval(typingInterval)
          setTimeout(() => {
            setShowTransition(true)
            setTimeout(() => setIsLoading(false), 450)
          }, 200)
          return 100
        }
        return prev + 1
      })
    }, 40)

    return () => {
      clearInterval(interval)
      clearInterval(typingInterval)
    }
  }, [visibleLines])

  return (
    <AnimatePresence>
      {isLoading && (
        <>
          {/* Main Loading Screen */}
          <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: showTransition ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Grid Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }} />
          </div>

          {/* Main Content */}
          <div className="relative z-10 w-full max-w-4xl px-8">
            {/* Terminal Header */}
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-t-lg border border-purple-500/30 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-gray-400 text-sm font-mono">portfolio.tsx</span>
              </div>
            </div>

            {/* Code Editor */}
            <div className="bg-gray-900/95 backdrop-blur-sm rounded-b-lg border border-purple-500/30 border-t-0 p-6 font-mono text-sm h-96 overflow-hidden">
              {codeLines.slice(0, visibleLines + 1).map((line, index) => {
                const prevLines = codeLines.slice(0, index).join('')
                const displayText = index === visibleLines 
                  ? line.substring(0, Math.max(0, currentChar - prevLines.length))
                  : line

                return (
                  <div key={index} className="flex gap-4">
                    <span className="text-gray-600 select-none min-w-[2rem] text-right">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <pre className="flex-1">
                      {line.includes('import') && (
                        <span className="text-purple-400">import </span>
                      )}
                      {line.includes('from') && (
                        <>
                          <span className="text-blue-400">{displayText.match(/(?:import\s+)(.+?)(?=\s+from)/)?.[1]}</span>
                          <span className="text-purple-400"> from </span>
                          <span className="text-green-400">{displayText.match(/from\s+(.+)/)?.[1]}</span>
                        </>
                      )}
                      {line.includes('function') && (
                        <>
                          <span className="text-purple-400">function </span>
                          <span className="text-yellow-400">{displayText.match(/function\s+(\w+)/)?.[1]}</span>
                          <span className="text-gray-300">{displayText.match(/\w+(\(.*)/)?.[1]}</span>
                        </>
                      )}
                      {line.includes('const') && (
                        <>
                          <span className="text-purple-400">const </span>
                          <span className="text-blue-300">{displayText.match(/const\s+(\w+)/)?.[1]}</span>
                          <span className="text-gray-300">{displayText.includes('=') ? ' = ' : ''}</span>
                          <span className="text-green-400">{displayText.match(/=\s*(.+)/)?.[1]}</span>
                        </>
                      )}
                      {line.includes('return') && (
                        <>
                          <span className="text-purple-400">return </span>
                          <span className="text-gray-300">{displayText.replace('return ', '')}</span>
                        </>
                      )}
                      {line.includes('export') && (
                        <>
                          <span className="text-purple-400">export default </span>
                          <span className="text-yellow-400">{displayText.match(/default\s+(\w+)/)?.[1]}</span>
                        </>
                      )}
                      {line.includes('<') && !line.includes('import') && (
                        <span className="text-pink-400">{displayText}</span>
                      )}
                      {!line.includes('import') && !line.includes('function') && !line.includes('const') && 
                       !line.includes('return') && !line.includes('export') && !line.includes('<') && line.trim() && (
                        <span className="text-gray-300">{displayText}</span>
                      )}
                      {!line.trim() && <span className="text-gray-300">{displayText}</span>}
                    </pre>
                  </div>
                )
              })}
              
              {/* Blinking Cursor */}
              <motion.span
                className="inline-block w-2 h-4 bg-purple-500 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>

            {/* Progress Section */}
            <div className="mt-6 space-y-3">
              {/* Status Messages */}
              <div className="flex items-center gap-2 text-sm font-mono">
                <motion.div
                  className="w-2 h-2 rounded-full bg-purple-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className="text-purple-400">Building portfolio...</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden border border-purple-500/30">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Percentage & Stats */}
              <div className="flex justify-between items-center text-xs font-mono text-gray-400">
                <span>{progress}% complete</span>
                <span>{visibleLines + 1}/{codeLines.length} lines</span>
              </div>
            </div>
          </div>

          {/* Floating Code Snippets */}
          {['{', '}', '<', '>', '/', '=', ';'].map((char, i) => (
            <motion.div
              key={i}
              className="absolute text-purple-500/20 font-mono text-6xl font-bold pointer-events-none"
              style={{
                left: `${10 + (i * 13)}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {char}
            </motion.div>
          ))}
        </motion.div>        {/* Paper Tearing Transition */}
        {showTransition && (
          <motion.div
            className="fixed inset-0 z-[9998] overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Top torn piece */}
            <motion.div
              className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-700"
              initial={{ y: 0 }}
              animate={{ y: '-100%' }}
              transition={{ 
                duration: 0.5,
                ease: [0.65, 0, 0.35, 1],
                delay: 0.05
              }}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 98% 96%, 95% 100%, 92% 95%, 88% 98%, 85% 94%, 80% 97%, 75% 93%, 70% 98%, 65% 95%, 60% 99%, 55% 94%, 50% 97%, 45% 95%, 40% 99%, 35% 96%, 30% 98%, 25% 94%, 20% 97%, 15% 96%, 10% 99%, 5% 95%, 2% 98%, 0 94%)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
              }}
            />
            
            {/* Bottom torn piece */}
            <motion.div
              className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-700"
              initial={{ y: 0 }}
              animate={{ y: '100%' }}
              transition={{ 
                duration: 0.5,
                ease: [0.65, 0, 0.35, 1]
              }}
              style={{
                clipPath: 'polygon(0 5%, 2% 2%, 5% 6%, 10% 1%, 15% 4%, 20% 3%, 25% 6%, 30% 2%, 35% 4%, 40% 1%, 45% 5%, 50% 3%, 55% 6%, 60% 1%, 65% 5%, 70% 2%, 75% 7%, 80% 3%, 85% 6%, 88% 2%, 92% 5%, 95% 0%, 98% 4%, 100% 0, 100% 100%, 0 100%)',
                filter: 'drop-shadow(0 -4px 8px rgba(0,0,0,0.3))'
              }}
            />
          </motion.div>
        )}
        </>
      )}
    </AnimatePresence>
  )
}
