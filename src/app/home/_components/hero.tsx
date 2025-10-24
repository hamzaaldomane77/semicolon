
"use client";

import BubbleMenu from '@/components/BubbleMenu'
import BlurText from '@/components/BlurText'
import TextType  from '@/components/TextType'
import { LazyPrism } from './lazy-components'

import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
<div className="w-full min-h-screen relative bg-black">
  <BubbleMenu
    logo={<img src="/semi-colon-Prfile-Picture.png" alt="Semicolon Logo" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl sm:rounded-3xl md:rounded-4xl " />}
    items={[
      {
        label: 'Home',
        href: '#home',
        ariaLabel: 'Home',
        rotation: -8,
        hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
      },
      {
        label: 'About',
        href: '#about',
        ariaLabel: 'About',
        rotation: 8,
        hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
      },
      {
        label: 'Services',
        href: '#services',
        ariaLabel: 'Services',
        rotation: 8,
        hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
      },
      {
        label: 'Projects',
        href: '#projects',
        ariaLabel: 'Projects',
        rotation: 8,
        hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
      },
      {
        label: 'Team',
        href: '#team',
        ariaLabel: 'Team',
        rotation: -8,
        hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
      },
      {
        label: 'Technologies',
        href: '#technologies',
        ariaLabel: 'Technologies',
        rotation: 8,
        hoverStyles: { bgColor: '#06b6d4', textColor: '#ffffff' }
      }
    ]}
    menuAriaLabel="Toggle navigation"
    menuBg="#ffffff"
    menuContentColor="#111111"
    useFixedPosition={false}
    animationEase="back.out(1.5)"
    animationDuration={0.5}
    staggerDelay={0.12}
    className='sm:pl-10'
  />
  {/* Prism Background - Optimized for Mobile */}
  <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
    <LazyPrism
      animationType="rotate"
      timeScale={isMobile ? 0.3 : 0.5}
      height={isMobile ? 2.5 : 3.5}
      baseWidth={isMobile ? 4 : 5.5}
      scale={isMobile ? 2.5 : 3.6}
      hueShift={0}
      colorFrequency={1}
      noise={isMobile ? 0.3 : 0.5}
      glow={isMobile ? 0.7 : 1}
    />
  </div>
  
  {/* Hero Text */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none w-full px-4" style={{ zIndex: 10 }}>
    <div className="space-y-4 md:space-y-6">
      <BlurText
        text="At Semicolon, we go from analysis to code — launching ideas into success."
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="lg:pl-32 pl-6 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center tracking-tight leading-tight text-white drop-shadow-lg px-2"
      />
      
      <div className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 font-light">
        <TextType 
         text={[
          "Custom Website Development",
          "Mobile App Development",
          "UI/UX Design Services",
          "API Integration & Backend Solutions",
          "E-Commerce Platforms",
          "Software Maintenance & Support"
        ]}
          typingSpeed={90}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
    </div>
  </div>
  
</div>  )
}

export default Hero