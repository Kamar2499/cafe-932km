'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedHeroProps {
  children: ReactNode
}

export default function AnimatedHero({ children }: AnimatedHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}
