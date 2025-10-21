"use client";

import GradientText from '@/components/GradientText';
import CardSwap, { Card } from '@/components/CardSwap';
import { motion } from 'framer-motion';

const Projects = () => {
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

          {/* Right Side - Card Swapper */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-xl mx-auto lg:mx-0 overflow-visible"
          >
            <div style={{ height: 'clamp(350px, 50vh, 480px)', position: 'relative' }} className="overflow-visible">
              <CardSwap
                cardDistance={20}
                verticalDistance={30}
                delay={1500}
                pauseOnHover={true}
              >
              {projectsData.map((project, index) => (
                <Card key={index}>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${project.image})`,
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40" />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-7">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                          {project.title}
                        </h3>
                        
                        <p className="text-sm md:text-base text-white/90 mb-4 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                        
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold border border-white/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        {/* View Project Button */}
                        <button className="mt-3 px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg">
                          View Project
                        </button>
                      </motion.div>
                    </div>
                    
                    {/* Card Number */}
                    <div className="absolute top-5 right-5 z-10">
                      <span className="text-5xl md:text-6xl font-bold text-white/20">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {projectsData.map((_, index) => (
                <div
                  key={index}
                  className="w-1.5 h-1.5 rounded-full bg-white/30 hover:bg-white/60 transition-colors cursor-pointer"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

