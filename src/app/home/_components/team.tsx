"use client";

import GradientText from '@/components/GradientText';
import { LazyChromaGrid } from './lazy-components';
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      image: "/photo_2025-10-21_10-17-03.jpg",
      title: "Mohammed Azawi",
      subtitle: "Backend Leader & CEO",
      handle: "@mohammed_azawi",
      borderColor: "#8b5cf6",
      gradient: "linear-gradient(145deg, #8b5cf6, #000)",
      url: "#"
    },
    {
      image: "/photo_2025-10-21_10-17-17.jpg",
      title: "Hamza Domani",
      subtitle: "Frontend Developer",
      handle: "@hamza_domani",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "#"
    },
    {
      image: "https://ui-avatars.com/api/?name=Mohammed+Mujahid&size=400&background=10B981&color=fff&bold=true",
      title: "Mohammed Mujahid",
      subtitle: "Flutter Developer",
      handle: "@mohammed_mujahid",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-20 px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={2}
              showBorder={false}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold m-4"
            >
              Our Team
            </GradientText>
          </motion.div>
          
          <motion.p 
            className="text-lg mx-auto text-white sm:text-base md:text-lg lg:text-xl font-bold text-center max-w-4xl leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Meet the talented individuals behind our success
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div style={{ minHeight: '600px', position: 'relative' }}>
            <LazyChromaGrid 
              items={teamMembers}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;

