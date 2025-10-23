
"use client";

import BubbleMenu from '@/components/BubbleMenu'
import BlurText from '@/components/BlurText'
import TextType  from '@/components/TextType'
import { LazyLiquidEther, LazyPixelBlast } from './lazy-components'

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
  {/* PixelBlast Background - Hidden on Mobile for Performance */}
  {!isMobile && (
    <div className="absolute inset-0 w-full h-full hidden md:block" style={{ zIndex: 1 }}>
      <LazyPixelBlast
        variant="circle"
        pixelSize={6}
        color="#B19EEF"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.6}
        edgeFade={0.25}
        transparent
        autoPauseOffscreen={true}
      />
    </div>
  )}

  <LazyLiquidEther
    colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
    mouseForce={isMobile ? 10 : 20}
    cursorSize={isMobile ? 50 : 100}
    isViscous={true}
    viscous={isMobile ? 20 : 30}
    iterationsViscous={isMobile ? 16 : 32}
    iterationsPoisson={isMobile ? 16 : 32}
    resolution={isMobile ? 0.3 : 0.5}
    isBounce={true}
    autoDemo={true}
    autoSpeed={0.5}
    autoIntensity={isMobile ? 1.5 : 2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
    style={{ zIndex: 2 }}
  />
  
  {/* Hero Text */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center pointer-events-none w-full px-4">
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