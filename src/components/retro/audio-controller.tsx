"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

const AudioController = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
        // Autoplay is handled by the initial state
        audioRef.current.play().catch(error => console.log("Audio autoplay was blocked by the browser."));
    }
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex justify-center items-center">
        <audio ref={audioRef} loop>
            <source src="/midi/space.mid" type="audio/midi" />
        </audio>
        <Button 
            onClick={togglePlayPause} 
            className={cn(
                "font-headline text-black border-2 border-b-4 border-r-4 border-black transition-all duration-150 ease-in-out active:border-b-2 active:border-r-2 active:mt-1 active:mr-1",
                isPlaying ? "bg-red-500 hover:bg-red-400 animate-blink" : "bg-lime-500 hover:bg-lime-400"
            )}
            title={isPlaying ? "Pause Music" : "Play Music"}
        >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isPlaying ? 'PAUSE' : 'PLAY'}
        </Button>
    </div>
  );
};

export default AudioController;
