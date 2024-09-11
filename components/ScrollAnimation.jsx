import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const ScrollAnimation = ({ children }) => {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current
      const rect = element.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        controls.start({ opacity: 1, y: 0 })
      } else {
        controls.start({ opacity: 0, y: 50 })
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() 

    return () => {
      window.removeEventListener('scroll', handleScroll)
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
