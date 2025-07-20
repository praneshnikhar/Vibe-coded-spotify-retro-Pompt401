"use client";

import { useState, useEffect } from 'react';

const LastUpdated = () => {
    const [lastUpdated, setLastUpdated] = useState<string | null>(null);

    useEffect(() => {
        const date = new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        setLastUpdated(date);
    }, []);

    return (
        <p className="font-mono text-xs text-cyan-300 mt-2">
            Last Updated: {lastUpdated || 'Loading...'}
        </p>
    );
};

export default LastUpdated;
