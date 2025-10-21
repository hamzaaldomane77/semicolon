"use client";

import React, { useState, useEffect, ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      {children}
    </div>
  );
};

interface CardSwapProps {
  children: ReactNode;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
}

const CardSwap: React.FC<CardSwapProps> = ({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cards = React.Children.toArray(children);

  useEffect(() => {
    if (isPaused && pauseOnHover) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, delay);

    return () => clearInterval(interval);
  }, [cards.length, delay, isPaused, pauseOnHover]);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {cards.map((card, index) => {
        const isActive = index === activeIndex;
        const offset = index - activeIndex;
        
        let zIndex = cards.length - Math.abs(offset);
        let translateY = 0;
        let translateX = 0;
        let scale = 1;
        let opacity = 1;

        if (isActive) {
          zIndex = cards.length;
          scale = 1;
          opacity = 1;
        } else if (offset > 0) {
          // Cards after active
          translateY = offset * verticalDistance;
          translateX = offset * cardDistance;
          scale = 1 - offset * 0.05;
          opacity = Math.max(0.3, 1 - offset * 0.15);
        } else if (offset < 0) {
          // Cards before active (going down)
          translateY = -100;
          opacity = 0;
          scale = 0.8;
        }

        return (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{
              transform: `translateY(${translateY}px) translateX(${translateX}px) scale(${scale})`,
              opacity,
              zIndex,
              transformOrigin: 'center center'
            }}
          >
            {card}
          </div>
        );
      })}
    </div>
  );
};

export default CardSwap;
