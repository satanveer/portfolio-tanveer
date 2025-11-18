import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const ScrollAnimation = ({ children }) => {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const element = ref.current
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          controls.start({ opacity: 1, y: 0 })
        } else {
          controls.start({ opacity: 0, y: 50 })
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
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimation
