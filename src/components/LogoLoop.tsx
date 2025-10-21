"use client";

import React, { useRef, useEffect, useState } from 'react';

interface Logo {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 120,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Technology logos'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const firstChild = container.firstChild as HTMLElement;
    if (!firstChild) return;

    let animationId: number;
    let position = 0;
    const totalWidth = firstChild.offsetWidth;

    const animate = () => {
      if (!isPaused) {
        if (direction === 'left') {
          position -= speed / 60;
          if (Math.abs(position) >= totalWidth / 2) {
            position = 0;
          }
        } else {
          position += speed / 60;
          if (position >= 0) {
            position = -(totalWidth / 2);
          }
        }
        container.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    if (direction === 'right') {
      position = -(totalWidth / 2);
    }

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [speed, direction, isPaused]);

  const LogoItem = ({ logo, index }: { logo: Logo; index: number }) => {
    const content = logo.node ? (
      <div 
        className={`flex items-center justify-center transition-transform duration-300 ${scaleOnHover ? 'hover:scale-125' : ''}`}
        style={{ fontSize: `${logoHeight}px`, color: '#ffffff' }}
        title={logo.title}
      >
        {logo.node}
      </div>
    ) : (
      <img
        src={logo.src}
        alt={logo.alt || ''}
        className={`transition-transform duration-300 ${scaleOnHover ? 'hover:scale-125' : ''}`}
        style={{ height: `${logoHeight}px`, width: 'auto' }}
        title={logo.title}
      />
    );

    return logo.href ? (
      <a
        key={index}
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
        style={{ marginRight: `${gap}px` }}
      >
        {content}
      </a>
    ) : (
      <div
        key={index}
        className="inline-block"
        style={{ marginRight: `${gap}px` }}
      >
        {content}
      </div>
    );
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      aria-label={ariaLabel}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Fade out effect on edges */}
      {fadeOut && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`
            }}
          />
        </>
      )}

      {/* Logo container */}
      <div
        ref={containerRef}
        className="flex items-center whitespace-nowrap"
        style={{ willChange: 'transform' }}
      >
        {/* First set of logos */}
        <div className="inline-flex items-center">
          {logos.map((logo, index) => (
            <LogoItem key={`first-${index}`} logo={logo} index={index} />
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="inline-flex items-center">
          {logos.map((logo, index) => (
            <LogoItem key={`second-${index}`} logo={logo} index={index} />
          ))}
        </div>

        {/* Third set for extra smoothness */}
        <div className="inline-flex items-center">
          {logos.map((logo, index) => (
            <LogoItem key={`third-${index}`} logo={logo} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoLoop;
