"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, GraduationCap, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// Unsplash images for each card category
const imageGroups = {
    learn: [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=500&fit=crop", // Robot
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=500&fit=crop", // AI Brain
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=500&fit=crop", // Robot hand
    ],
    build: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop", // Tech workspace
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=500&fit=crop", // Circuit board
        "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&h=500&fit=crop", // Electronics
    ],
    ready: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=500&fit=crop", // Team collaboration
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=500&fit=crop", // Workshop
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=500&fit=crop", // Students learning
    ],
};

// Background image - students/robotics themed
const heroBackgroundImage = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=2560&h=1440&fit=crop&q=100";

export function HeroSection() {
    const [learnIndex, setLearnIndex] = useState(0);
    const [buildIndex, setBuildIndex] = useState(0);
    const [readyIndex, setReadyIndex] = useState(0);

    // Rotate images at different intervals for visual variety
    useEffect(() => {
        const learnInterval = setInterval(() => {
            setLearnIndex((prev) => (prev + 1) % imageGroups.learn.length);
        }, 4000);

        const buildInterval = setInterval(() => {
            setBuildIndex((prev) => (prev + 1) % imageGroups.build.length);
        }, 5000);

        const readyInterval = setInterval(() => {
            setReadyIndex((prev) => (prev + 1) % imageGroups.ready.length);
        }, 6000);

        return () => {
            clearInterval(learnInterval);
            clearInterval(buildInterval);
            clearInterval(readyInterval);
        };
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden pt-24 lg:pt-32">
            {/* Background Image */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src={heroBackgroundImage}
                    alt="Robotics and AI background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                    sizes="100vw"
                    unoptimized
                />
            </div>

            {/* Overlay for text readability */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/70 via-white/40 to-white/20" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1"
                    >
                        {/* Headline */}
                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
                            A new way to
                            <br />
                            <span className="text-slate-900">learn</span>
                            <br />
                            <span className="text-slate-900">& get </span>
                            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                                knowledge
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
                            Scaleopal Labs is here for you with hands-on robotics & AI
                            courses from active engineers building real-world systems.
                        </p>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Button
                                size="lg"
                                className="h-12 gap-2 rounded-full bg-sky-600 px-8 text-base font-semibold text-white hover:bg-sky-700 shadow-lg shadow-sky-200"
                                asChild
                            >
                                <Link href="/summer-camp">
                                    Join the Camp
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-12 rounded-full border-2 border-slate-300 bg-white/50 px-8 text-base font-semibold text-slate-700 backdrop-blur-sm hover:border-slate-400 hover:bg-white/70"
                                asChild
                            >
                                <Link href="#about">Learn more</Link>
                            </Button>
                        </div>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-12 flex flex-wrap items-center gap-8"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm">
                                    <Users className="h-5 w-5 text-slate-600" />
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-slate-900">500+</p>
                                    <p className="text-sm text-slate-600">Active students</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm">
                                    <GraduationCap className="h-5 w-5 text-slate-600" />
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-slate-900">15+</p>
                                    <p className="text-sm text-slate-600">AI Engineers</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm">
                                    <LinkIcon className="h-5 w-5 text-slate-600" />
                                </div>
                                <p className="text-base font-semibold text-slate-900">
                                    Resources
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Image Grid - Bento Layout */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {/* Large Image - Top Left */}
                            <div className="relative col-span-1 row-span-2 h-[320px] overflow-hidden rounded-3xl shadow-2xl sm:h-[400px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={learnIndex}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.7 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={imageGroups.learn[learnIndex]}
                                            alt="AI and Robotics Learning"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-sky-600/40 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <p className="text-sm font-medium text-white/80">Learn</p>
                                            <p className="text-lg font-bold text-white">AI & Robotics</p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Top Right Image */}
                            <div className="relative h-[150px] overflow-hidden rounded-3xl shadow-2xl sm:h-[190px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={buildIndex}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.7 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={imageGroups.build[buildIndex]}
                                            alt="Building Real Projects"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-amber-600/40 to-transparent" />
                                        <div className="absolute bottom-3 left-3 right-3">
                                            <p className="text-xs font-medium text-white/80">Build</p>
                                            <p className="text-sm font-bold text-white">Real Projects</p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Bottom Right Image */}
                            <div className="relative h-[150px] overflow-hidden rounded-3xl shadow-2xl sm:h-[190px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={readyIndex}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.7 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={imageGroups.ready[readyIndex]}
                                            alt="Get Industry Ready"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/40 to-transparent" />
                                        <div className="absolute bottom-3 left-3 right-3">
                                            <p className="text-xs font-medium text-white/80">Get</p>
                                            <p className="text-sm font-bold text-white">Industry Ready</p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
