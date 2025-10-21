"use client";

import GradientText from '@/components/GradientText';
import MagicBento from '@/components/MagicBento'
import { motion } from 'framer-motion'

const Services = () => {
  const servicesData = [
    {
      color: '#060010',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      label: 'Frontend & Backend',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80'
    },
    {
      color: '#060010',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      label: 'iOS & Android',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80'
    },
    {
      color: '#060010',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces with best UX practices',
      label: 'Design',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=80'
    },
    {
      color: '#060010',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment services',
      label: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80'
    },
    {
      color: '#060010',
      title: 'API Development',
      description: 'RESTful APIs and backend systems integration',
      label: 'Integration',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=80'
    },
    {
      color: '#060010',
      title: 'Consulting',
      description: 'Technical consulting and software architecture planning',
      label: 'Advisory',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80'
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
              Our Services
            </GradientText>
          </motion.div>
          
          <motion.p 
            className="text-lg mx-auto text-white sm:text-base md:text-lg lg:text-xl font-bold text-center max-w-4xl leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We provide a comprehensive range of advanced software services to achieve your business goals
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <MagicBento 
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
            cards={servicesData}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Services

