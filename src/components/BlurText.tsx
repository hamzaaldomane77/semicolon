"use client";

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  onAnimationComplete?: () => void;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  onAnimationComplete
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <p className={`blur-text ${className} flex flex-wrap`}>
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: direction === 'top' ? -30 : 30,
            filter: 'blur(10px)'
          }}
          animate={isVisible ? {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)'
          } : {
            opacity: 0,
            y: direction === 'top' ? -30 : 30,
            filter: 'blur(10px)'
          }}
          transition={{
            duration: 0.6,
            delay: (index * delay) / 1000,
            ease: 'easeOut'
          }}
          onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
          style={{
            display: 'inline-block',
            marginRight: animateBy === 'words' && index < elements.length - 1 ? '0.25em' : '0'
          }}
        >
          {segment === ' ' ? '\u00A0' : segment}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
