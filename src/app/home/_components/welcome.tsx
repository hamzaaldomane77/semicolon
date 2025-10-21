"use client";
import GradientText from '@/components/GradientText'
import { motion } from 'framer-motion'

const welcome = () => {
  return (
    <motion.div 
      className="min-h-52 flex flex-col items-center justify-center overflow-hidden bg-black gap-4 md:gap-6 px-4 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ 
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut"
        }}
      >
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={2.5}
          showBorder={false}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
        >
          welcome to semicolon
        </GradientText>
      </motion.div>
      
      <motion.h1 
        className='text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center max-w-4xl leading-relaxed px-2'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ 
          duration: 0.8,
          delay: 0.4,
          ease: "easeOut"
        }}
      >
        semicolon is a leading ICT company, offering a wide range of services and products to help companies achieve and exceed their goals in innovative ways.
      </motion.h1>
    </motion.div>
  )
}

export default welcome