"use client";

import React from 'react';

interface GridItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  borderColor: string;
  gradient: string;
  url?: string;
}

interface ChromaGridProps {
  items: GridItem[];
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

const ChromaGrid: React.FC<ChromaGridProps> = ({ items }) => {

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 p-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => item.url && window.open(item.url, '_blank')}
          >
            <div className="relative">
              {/* Card Container */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  background: item.gradient,
                  padding: '3px'
                }}
              >
                {/* Inner Content */}
                <div className="bg-black rounded-2xl p-6 relative overflow-hidden">
                  {/* Image */}
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-base mb-2">{item.subtitle}</p>
                    {item.handle && (
                      <p className="text-white/50 text-sm">{item.handle}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChromaGrid;
