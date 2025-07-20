"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Star = ({ style, animationDelay }: { style: React.CSSProperties, animationDelay: string }) => (
  <div className="absolute animate-flash" style={{ ...style, animationDelay }}>
    <Image 
      src="https://placehold.co/20x20.png" 
      alt="star" 
      width={20} 
      height={20} 
      data-ai-hint="star" 
      className="animate-spin-slow" 
      unoptimized
    />
  </div>
);

const StarryBackground = () => {
  const [stars, setStars] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }).map((_, i) => {
        const style: React.CSSProperties = {
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          transform: `scale(${Math.random() * 0.5 + 0.5})`,
        };
        const animationDelay = `${Math.random() * 5}s`;
        return <Star key={i} style={style} animationDelay={animationDelay} />;
      });
      setStars(newStars);
    };
    generateStars();
  }, []);

  return <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">{stars}</div>;
};

export default StarryBackground;
