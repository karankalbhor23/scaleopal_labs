"use client";

import React from "react";

interface LogoProps {
    className?: string;
    size?: number;
}

export function Logo({ className = "", size = 40 }: LogoProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#052E16" /> {/* Deep Emerald */}
                    <stop offset="30%" stopColor="#0891B2" /> {/* Cyan */}
                    <stop offset="70%" stopColor="#0284C7" /> {/* Sky Blue */}
                    <stop offset="100%" stopColor="#1E40AF" /> {/* Royal Blue */}
                </linearGradient>
                <filter id="poly-texture" x="0" y="0" width="100%" height="100%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                </filter>
            </defs>

            {/* The "S" Shape with Arrow integrated */}
            <path
                d="M30 35 C 30 20, 70 20, 70 35 C 70 45, 30 55, 30 65 C 30 80, 70 80, 70 65"
                stroke="url(#logo-gradient)"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
            />
            {/* The Vertical Arrow */}
            <path
                d="M50 75 V 25 M50 25 L 40 35 M50 25 L 60 35"
                stroke="url(#logo-gradient)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Accent dots for "Labs" feel */}
            <circle cx="85" cy="15" r="4" fill="#0EA5E9" />
            <circle cx="15" cy="85" r="4" fill="#10B981" />
        </svg>
    );
}

export function Wordmark({ className = "" }: { className?: string }) {
    return (
        <div className={`flex flex-col ${className}`}>
            <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                Scaleopal <span className="text-sky-600">Labs</span>
            </span>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Engineering Laboratory
            </span>
        </div>
    );
}
