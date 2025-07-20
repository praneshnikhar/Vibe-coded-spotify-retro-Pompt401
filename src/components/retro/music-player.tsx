"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, StopCircle, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(50);
    const [isMuted, setIsMuted] = useState(false);
    // In a real app, this would control actual audio
    const audioRef = useRef<HTMLAudioElement | null>(null); 
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(215); // Dummy duration
    
    const playSound = (sound: string) => {
        // This is a browser-only API
        if (typeof window !== 'undefined') {
            new Audio(sound).play();
        }
    }

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleStop = () => {
        playSound('/sounds/click.mp3');
        setIsPlaying(false);
        setCurrentTime(0);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="space-y-4 font-headline text-center">
            <h2 className="text-4xl text-secondary">MUSIC ZONE</h2>
            <div className="bg-black bg-opacity-50 p-4 border-2 border-dashed border-secondary">
                <div className="flex items-center justify-center gap-4">
                     <Image 
                        src="https://placehold.co/80x80.png" 
                        alt="Lit - A Place in the Sun Album Cover" 
                        width={80} 
                        height={80} 
                        data-ai-hint="album art"
                        className={cn("border-4 border-gray-500", isPlaying && "animate-spin-slow")} 
                        unoptimized
                    />
                    <div>
                        <p className="text-xl text-yellow-300">Now Playing:</p>
                        <p className="text-2xl text-cyan-300">My Own Worst Enemy</p>
                        <p className="text-lg text-gray-400">by Lit</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-white font-mono text-sm mt-2">
                    <span>{formatTime(currentTime)}</span>
                    <Slider
                        defaultValue={[0]}
                        value={[currentTime]}
                        max={duration}
                        step={1}
                        onValueChange={(value) => setCurrentTime(value[0])}
                        className="[&>span:first-child]:h-2 [&>span>span]:bg-blue-500 [&>a]:bg-white [&>a]:border-blue-500 [&>a]:h-5 [&>a]:w-5"
                    />
                    <span>{formatTime(duration)}</span>
                </div>
                
                <div className="flex justify-center items-center gap-4 mt-4">
                    <Button onClick={handlePlayPause} className={cn("bg-gray-400 hover:bg-gray-300 border-b-4 border-gray-600 active:border-b-0 active:mt-1", isPlaying ? 'bg-green-500 border-green-700 animate-pulse' : 'bg-silver')}>
                       {isPlaying ? <Pause /> : <Play />}
                    </Button>
                    <Button onClick={handleStop} className={cn("bg-gray-400 hover:bg-gray-300 border-b-4 border-gray-600 active:border-b-0 active:mt-1", !isPlaying && 'opacity-50', isPlaying && 'bg-red-500 border-red-700')}>
                        <StopCircle />
                    </Button>
                    <div className="flex items-center gap-2 w-32">
                        <button onClick={() => setIsMuted(!isMuted)}>
                            {isMuted ? <VolumeX className="text-white" /> : <Volume2 className="text-white" />}
                        </button>
                        <Slider 
                           defaultValue={[50]} 
                           max={100}
                           value={isMuted ? [0] : [volume]}
                           onValueChange={(value) => { setVolume(value[0]); setIsMuted(false); }}
                           className="[&>span:first-child]:h-1 [&>span>span]:bg-blue-400 [&>a]:h-4 [&>a]:w-4 [&>a]:bg-white [&>a]:border-blue-400"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
