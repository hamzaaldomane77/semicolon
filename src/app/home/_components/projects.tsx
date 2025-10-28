"use client";

import GradientText from '@/components/GradientText';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projectsData = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with real-time inventory management, secure payment integration, and advanced analytics dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive medical records system with appointment scheduling, patient portal, and telemedicine capabilities for modern healthcare providers.',
      tech: ['Next.js', 'PostgreSQL', 'AWS', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Financial Analytics Dashboard',
      description: 'Real-time financial data visualization platform with AI-powered insights, custom reporting, and multi-currency support for global businesses.',
      tech: ['Vue.js', 'Python', 'TensorFlow', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Social Media App',
      description: 'Engaging social networking platform with real-time messaging, content sharing, and advanced recommendation algorithms for personalized feeds.',
      tech: ['React Native', 'Firebase', 'Node.js', 'Redis'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Learning Management System',
      description: 'Interactive educational platform with video streaming, live classes, progress tracking, and gamification to enhance student engagement.',
      tech: ['Angular', 'Django', 'PostgreSQL', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Real Estate Platform',
      description: 'Modern property listing platform with virtual tours, AI-powered property matching, and integrated mortgage calculator for buyers and sellers.',
      tech: ['React', 'Express', 'MongoDB', 'Google Maps'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Food Delivery App',
      description: 'Full-stack delivery platform with real-time order tracking, restaurant management, driver allocation, and seamless payment processing.',
      tech: ['Flutter', 'Node.js', 'PostgreSQL', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop&q=80',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Fitness Tracking App',
      description: 'Comprehensive health and fitness app with workout plans, nutrition tracking, progress analytics, and social community features.',
      tech: ['React Native', 'Firebase', 'TensorFlow', 'GraphQL'],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80',
      color: 'from-lime-500 to-green-600'
    },
    {
      title: 'Hotel Booking System',
      description: 'Advanced reservation platform with multi-property management, dynamic pricing, guest reviews, and integrated channel management.',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Project Management Tool',
      description: 'Collaborative workspace with task management, team communication, time tracking, and comprehensive reporting for agile teams.',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
      color: 'from-slate-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-20 px-4 md:px-8 lg:px-12 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center overflow-x-visible">
          {/* Left Side - Title and Description */}
          <motion.div 
            className="flex flex-col justify-center space-y-6 lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
              >
                Our Projects
              </GradientText>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold leading-relaxed">
                Explore our portfolio of successful projects and innovative solutions
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
                We take pride in delivering cutting-edge software solutions that transform businesses. 
                Our projects showcase our expertise in modern technologies and our commitment to excellence. 
                Each project represents a unique challenge we&apos;ve successfully overcome, creating value for our clients.
              </p>
              
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] rounded-full"></div>
                  <span className="text-white/80 text-sm md:text-base">Innovative Design & Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] rounded-full"></div>
                  <span className="text-white/80 text-sm md:text-base">Scalable & Secure Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] rounded-full"></div>
                  <span className="text-white/80 text-sm md:text-base">Client-Focused Approach</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Swiper with Cube Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-xl mx-auto lg:mx-0 flex flex-col  "
          >
            {/* Cube Swiper */}
          

            {/* Active Project Info Card */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-5 md:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 "
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {projectsData[activeIndex].title}
                  </h3>
                  <span className="text-[#40ffaa] text-xs md:text-sm font-semibold">
                    Project {String(activeIndex + 1).padStart(2, '0')} / {String(projectsData.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
              
              <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-3">
                {projectsData[activeIndex].description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {projectsData[activeIndex].tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 bg-gradient-to-r from-[#40ffaa]/20 to-[#4079ff]/20 rounded-lg text-white text-xs font-semibold border border-[#40ffaa]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* View Project Button */}
              <button className="px-5 py-2 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white text-xs md:text-sm font-bold rounded-full hover:shadow-lg hover:shadow-[#40ffaa]/50 transition-all duration-300 hover:scale-105">
                View Project Details →
              </button>
            </motion.div>
            <div className="relative mb-6">
              <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                modules={[EffectCube, Pagination, Autoplay]}
                className="projects-cube-swiper"
                style={{
                  width: '100%',
                  maxWidth: '450px',
                  paddingTop: 'min(10px, 100%)',
                  position: 'relative',
                  margin: '0 auto',
                }}
              >
                {projectsData.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                      
                      {/* Project Number Badge */}
                      <div className="absolute top-6 right-6 z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Custom Navigation Arrows */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  const prevIndex = activeIndex === 0 ? projectsData.length - 1 : activeIndex - 1;
                  setActiveIndex(prevIndex);
                }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#40ffaa]/20 to-[#4079ff]/20 border border-[#40ffaa]/30 flex items-center justify-center text-white hover:from-[#40ffaa]/40 hover:to-[#4079ff]/40 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex items-center gap-2">
                {projectsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === activeIndex 
                        ? 'w-8 h-2 bg-gradient-to-r from-[#40ffaa] to-[#4079ff]' 
                        : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => {
                  const nextIndex = activeIndex === projectsData.length - 1 ? 0 : activeIndex + 1;
                  setActiveIndex(nextIndex);
                }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#40ffaa]/20 to-[#4079ff]/20 border border-[#40ffaa]/30 flex items-center justify-center text-white hover:from-[#40ffaa]/40 hover:to-[#4079ff]/40 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .projects-cube-swiper {
          overflow: visible !important;
        }

        .projects-cube-swiper .swiper-wrapper {
          overflow: visible !important;
        }

        .projects-cube-swiper .swiper-slide {
          overflow: visible !important;
        }

        .projects-cube-swiper .swiper-pagination {
          display: none;
        }

        .projects-cube-swiper .swiper-cube-shadow {
          background: linear-gradient(135deg, rgba(64, 255, 170, 0.3), rgba(64, 121, 255, 0.3));
          border-radius: 20px;
        }

        @media (max-width: 768px) {
          .projects-cube-swiper {
            max-width: 90vw;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;

