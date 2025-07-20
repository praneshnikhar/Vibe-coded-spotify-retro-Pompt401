"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const shapes = [
    { src: 'https://placehold.co/20x20.png', hint: 'star gif' },
    { src: 'https://placehold.co/20x20.png', hint: 'triangle gif' },
    { src: 'https://placehold.co/20x20.png', hint: 'square gif' },
    { src: 'https://placehold.co/20x20.png', hint: 'circle gif' },
];

const Shape = ({ style, animationDelay, shape }: { style: React.CSSProperties, animationDelay: string, shape: { src: string, hint: string } }) => (
  <div className="absolute animate-flash" style={{ ...style, animationDelay }}>
    <Image 
      src={shape.src}
      alt="geometric shape" 
      width={20} 
      height={20} 
      data-ai-hint={shape.hint} 
      className="animate-spin-slow" 
      unoptimized
    />
  </div>
);

const StarryBackground = () => {
  const [elements, setElements] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements = Array.from({ length: 50 }).map((_, i) => {
        const style: React.CSSProperties = {
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          transform: `scale(${Math.random() * 0.5 + 0.5})`,
        };
        const animationDelay = `${Math.random() * 5}s`;
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        return <Shape key={i} style={style} animationDelay={animationDelay} shape={shape} />;
      });
      setElements(newElements);
    };
    generateElements();
  }, []);

  return <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">{elements}</div>;
};

export default StarryBackground;
