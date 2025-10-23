"use client";

import dynamic from 'next/dynamic';

// Lazy load heavy WebGL components with loading state
export const LazyLiquidEther = dynamic(
  () => import('@/components/LiquidEther'),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-black" />
  }
);

export const LazyPixelBlast = dynamic(
  () => import('@/components/PixelBlast'),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-transparent" />
  }
);

export const LazyMagicBento = dynamic(
  () => import('@/components/MagicBento'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full min-h-[400px] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }
);

export const LazyChromaGrid = dynamic(
  () => import('@/components/ChromaGrid'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full min-h-[600px] flex items-center justify-center">
        <div className="text-white">Loading team...</div>
      </div>
    )
  }
);

