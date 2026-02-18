"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar,
    Clock,
    CheckCircle2,
    ChevronDown,
    ArrowRight,
    Zap,
    Gift,
    Sparkles,
    Users2,
    MapPin,
    Lightbulb,
    Cpu,
    BadgeCheck,
    Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Scaleopal Labs AI & Robotics Summer Camp 2026",
    "description": "A 5-day intensive bootcamp where students build real-world AI and robotics projects.",
    "startDate": "2026-05-01",
    "endDate": "2026-05-30",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
        "@type": "Place",
        "name": "Scaleopal Labs Interaction Center",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bavdhan",
            "addressLocality": "Pune",
            "postalCode": "411021",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
        }
    },
    "image": [
        "https://images.unsplash.com/photo-1743677077216-00a458eff9e0?q=80&w=1200"
    ],
    "offers": {
        "@type": "Offer",
        "url": "https://labs.scaleopal.com/summer-camp",
        "price": "2649",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-02-01"
    },
    "organizer": {
        "@type": "Organization",
        "name": "Scaleopal Labs",
        "url": "https://labs.scaleopal.com"
    },
    "performer": {
        "@type": "Organization",
        "name": "Scaleopal Labs Team"
    }
};

// ─── IMAGES (Unsplash Source) ────────────────────────────────────────────────
const IMG_HERO = "https://images.unsplash.com/photo-1743677077216-00a458eff9e0?q=80&w=2400&auto=format&fit=crop";
const IMG_YOUNG = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop";
const IMG_MASTER = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop";
const IMG_KIT = "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop";
const IMG_MENTOR = "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop";
const IMG_CERTIFICATE = "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop";

// ─── CONTENT DATA ───────────────────────────────────────────────────────────

const tracks = [
    {
        id: "young",
        title: "Track 1: Young Innovators",
        eligibility: "Class 3rd to 6th",
        regularPrice: 3000,
        offerPrice: 2649,
        friendPrice: 2549,
        image: IMG_YOUNG,
        description: "Perfect for young builders starting their journey into electronics.",
        projects: [
            "P1. Paper circuit",
            "P2. AutoSwitchable Lamp",
            "P3. Touchless Doorbell",
            "P4. Water Level Indicator",
            "Mega Project: Hand following car"
        ],
        icon: Lightbulb,
        accentColor: "text-amber-600",
        accentBg: "bg-amber-50",
        borderColor: "border-amber-200"
    },
    {
        id: "master",
        title: "Track 2: Master Builders",
        eligibility: "Class 7th to 10th",
        regularPrice: 4500,
        offerPrice: 3649,
        friendPrice: 3549,
        image: IMG_MASTER,
        description: "Advanced robotics and AI for students ready to code and build.",
        projects: [
            "P1. Plantcare Automation",
            "P2. Smart Helmet (Alcohol & Sleepiness)",
            "P3. Water Level Indicator with alarm",
            "P4. AI Foundation (open cv) Face Recognization",
            "Mega Project: IR Remote-Controlled Robot"
        ],
        icon: Cpu,
        accentColor: "text-sky-600",
        accentBg: "bg-sky-50",
        borderColor: "border-sky-200"
    }
];

const blueprint = [
    {
        day: "Day 1",
        title: "The Blueprint & Basics",
        desc: "Introduction to smart systems, safety protocols, and building the first foundation project (Paper Circuits / Plantcare)."
    },
    {
        day: "Day 2",
        title: "Sensors & Senses",
        desc: "Understanding how machines \"see\" and \"feel\" the world. Students build automated systems (Lamps / Smart Helmets)."
    },
    {
        day: "Day 3",
        title: "Logic & Automation",
        desc: "Connecting hardware to decision-making logic. Completing mid-level automation projects (Doorbells / Water Indicators)."
    },
    {
        day: "Day 4",
        title: "AI & Machine Vision (Highlight)",
        desc: "Introducing Artificial Intelligence concepts. The Master Builders will train their cameras for OpenCV Face Recognition, while Young Innovators master advanced sensor integration."
    },
    {
        day: "Day 5",
        title: "The Mega Project & Showcase",
        desc: "Assembling the final moving robots (Hand Following Car / IR Remote Robot). The day ends with a student showcase and certificate distribution."
    }
];

const faqs = [
    {
        q: "How do I claim the \"Bring a Friend\" discount?",
        a: "Simply have your friend enter your name in the \"Referred By\" section during their registration. Your ₹100 discount will be applied directly to your payment link!"
    },
    {
        q: "Does my child need prior coding or robotics experience?",
        a: "Not at all! Both tracks are designed to take students from absolute beginners to confident builders within the 5 days."
    },
    {
        q: "Do students need to bring a laptop?",
        a: "For the Young Innovators track, no laptop is required. For the Master Builders track, a basic laptop is highly recommended for the AI Foundation (OpenCV) and advanced coding projects."
    },
    {
        q: "Is the environment safe?",
        a: "Absolutely. We maintain a strict student-to-mentor ratio, use child-safe components (no high-voltage soldering required for juniors), and ensure a fully supervised lab environment."
    }
];

// ─── HELPER COMPONENTS ──────────────────────────────────────────────────────

function SectionHeader({ title, subtitle, className = "" }: { title: string, subtitle?: string, className?: string }) {
    return (
        <div className={`text-center max-w-3xl mx-auto mb-16 ${className}`}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-lg text-slate-600 text-pretty">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

function CheckItem({ children, colorClass = "text-sky-600" }: { children: React.ReactNode, colorClass?: string }) {
    return (
        <li className="flex items-start gap-3">
            <CheckCircle2 className={`h-5 w-5 ${colorClass} shrink-0 mt-0.5`} />
            <span className="text-slate-700 text-sm font-medium leading-normal">{children}</span>
        </li>
    );
}

// ─── MAIN PAGE ──────────────────────────────────────────────────────────────

export default function SummerCampPage() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
            />

            {/* 1. HERO SECTION (Fully Responsive: Compact on Laptop, Full Screen on Monitor) */}
            <section className="relative xl:min-h-screen flex items-center pt-20 pb-8 lg:pt-16 lg:pb-6 xl:pt-28 xl:pb-20 overflow-hidden">

                {/* Background Image - Right-Aligned for Laptop, Center for Monitor */}
                <div className="absolute inset-0">
                    <Image
                        src={IMG_HERO}
                        alt="Students building robots in a lab"
                        fill
                        className="object-cover object-[75%_center] xl:object-center" // Adjusts focus based on screen size
                        priority
                        sizes="100vw"
                    />
                </div>

                {/* Gradient Overlay - Optimized for all screens */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 via-55% to-white/10 lg:via-white/60 lg:via-50% xl:via-white/40 xl:via-50%" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-lg lg:max-w-4xl xl:max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Badge - Responsive Scaling */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-sky-200 text-sky-800 text-xs xl:text-sm font-bold mb-3 xl:mb-5 shadow-sm">
                                <Sparkles className="h-3 w-3 xl:h-4 xl:w-4" />
                                <span>Scaleopal Labs Summer Camp 2026</span>
                            </div>

                            {/* Headline - Big on Monitor, Compact on Laptop */}
                            <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-2 lg:mb-3 xl:mb-6 drop-shadow-sm">
                                Transform Your <br className="hidden lg:block" />
                                Summer: The Ultimate <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
                                    AI & Robotics Bootcamp
                                </span>
                            </h1>

                            {/* Description - Responsive Text Size */}
                            <p className="text-sm lg:text-sm xl:text-xl text-slate-700 mb-3 lg:mb-4 xl:mb-8 leading-relaxed font-medium bg-white/40 backdrop-blur-[2px] rounded-lg p-2 -ml-2 border border-white/20 max-w-xl xl:max-w-2xl">
                                Step away from the screen and step into the lab. Join our intensive 5-day hardware and AI bootcamp designed for students to build real-world tech projects from scratch.
                            </p>

                            {/* Pills - Responsive Spacing */}
                            <div className="flex flex-wrap gap-2 lg:gap-3 xl:gap-4 mb-4 lg:mb-4 xl:mb-10 text-xs xl:text-base font-bold text-slate-800">
                                <div className="flex items-center gap-1.5 lg:gap-2 bg-white/60 px-2.5 py-1 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2 rounded-full backdrop-blur-sm shadow-sm border border-white/30">
                                    <Calendar className="h-3.5 w-3.5 lg:h-4 lg:w-4 xl:h-5 xl:w-5 text-sky-600" />
                                    <span>5 Days Intensive</span>
                                </div>
                                <div className="flex items-center gap-1.5 lg:gap-2 bg-white/60 px-2.5 py-1 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2 rounded-full backdrop-blur-sm shadow-sm border border-white/30">
                                    <Clock className="h-3.5 w-3.5 lg:h-4 lg:w-4 xl:h-5 xl:w-5 text-sky-600" />
                                    <span>3 Hours / Day</span>
                                </div>
                                <div className="flex items-center gap-1.5 lg:gap-2 bg-white/60 px-2.5 py-1 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2 rounded-full backdrop-blur-sm shadow-sm border border-white/30">
                                    <BadgeCheck className="h-3.5 w-3.5 lg:h-4 lg:w-4 xl:h-5 xl:w-5 text-sky-600" />
                                    <span>Certified</span>
                                </div>
                            </div>

                            {/* CTA Button + Benefit Cards — ALL in ONE horizontal row */}
                            <div className="flex flex-col lg:flex-row gap-3 xl:gap-4 items-start lg:items-center">
                                {/* CTA Button */}
                                <Button
                                    size="lg"
                                    className="h-11 lg:h-11 xl:h-14 px-6 xl:px-8 text-sm xl:text-lg bg-sky-600 hover:bg-sky-700 shadow-xl shadow-sky-200 border border-sky-500 shrink-0"
                                    onClick={() => scrollToSection('tracks')}
                                >
                                    Choose Your Innovation Track
                                    <ArrowRight className="ml-2 h-4 w-4 xl:h-5 xl:w-5" />
                                </Button>

                                {/* Card 1: Free Kit — Elongated horizontal card */}
                                <div
                                    onClick={() => scrollToSection('why-choose-us')}
                                    className="flex-1 min-w-0 px-3 py-2.5 xl:px-5 xl:py-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 shadow-lg flex gap-2.5 xl:gap-3 items-center hover:bg-white hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                                >
                                    <div className="h-8 w-8 xl:h-10 xl:w-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                                        <Gift className="h-4 w-4 xl:h-5 xl:w-5 text-orange-600" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-bold text-slate-900 text-xs xl:text-base leading-tight">Free Take-Home Kit</p>
                                        <p className="text-[11px] xl:text-sm text-slate-600 font-medium mt-0.5 leading-tight">
                                            Includes a full robotics kit to keep forever.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 2: Certificate — Elongated horizontal card */}
                                <div
                                    onClick={() => scrollToSection('why-choose-us')}
                                    className="flex-1 min-w-0 px-3 py-2.5 xl:px-5 xl:py-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 shadow-lg flex gap-2.5 xl:gap-3 items-center relative overflow-hidden hover:bg-white hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                                >
                                    <div className="h-8 w-8 xl:h-10 xl:w-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                                        <Award className="h-4 w-4 xl:h-5 xl:w-5 text-emerald-600" />
                                    </div>
                                    <div className="relative z-10 min-w-0">
                                        <p className="font-bold text-slate-900 text-xs xl:text-base leading-tight">Scaleopal Certified</p>
                                        <p className="text-[11px] xl:text-sm text-slate-600 font-medium mt-0.5 leading-tight">
                                            Earn a verified certificate of completion.
                                        </p>
                                    </div>
                                    <BadgeCheck className="absolute top-1.5 right-1.5 h-10 w-10 xl:h-12 xl:w-12 text-emerald-500/10 -rotate-12 z-0" />
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. TRACKS (Zig-Zag Layout with OVERLAY Class Badges) */}
            <section id="tracks" className="py-24 bg-white relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Tech Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:40px_40px]" />

                    {/* Soft Theme Glows */}
                    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
                    <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-amber-100/50 rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <SectionHeader
                        title="Choose Your Innovation Track"
                        subtitle="We bridge the gap between physical robots and smart AI logic."
                    />

                    <div className="space-y-24">
                        {tracks.map((track, idx) => (
                            <div key={track.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                                {/* Image Side */}
                                <div className="w-full lg:w-1/2 relative group">
                                    <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ${idx % 2 === 0 ? 'rotate-2' : '-rotate-2'} hover:rotate-0 transition-all duration-500`}>
                                        <Image
                                            src={track.image}
                                            alt={track.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                                        {/* PROMINENT ELIGIBILITY BADGE */}
                                        <div className="absolute top-6 left-6 z-20">
                                            <div className="bg-white/95 backdrop-blur-md text-slate-900 px-4 py-2 rounded-xl shadow-xl border-l-4 border-sky-500">
                                                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">Eligibility</p>
                                                <p className="text-lg font-extrabold">{track.eligibility}</p>
                                            </div>
                                        </div>

                                    </div>
                                    {/* Decorative Element */}
                                    <div className={`absolute -z-10 top-10 ${idx % 2 === 0 ? '-left-10' : '-right-10'} w-full h-full border-2 ${track.borderColor} rounded-3xl`} />
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2">
                                    <div className={`inline-flex items-center justify-center p-3 rounded-xl ${track.accentBg} ${track.accentColor} mb-6`}>
                                        <track.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{track.title}</h3>
                                    <div className={`h-1 w-20 rounded-full ${track.accentBg.replace('bg-', 'bg-').replace('-50', '-500')} mb-6 opacity-80`}></div>

                                    <p className="text-lg text-slate-600 mb-8">{track.description}</p>

                                    {/* Pricing Card */}
                                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8">
                                        <div className="flex items-end gap-3 mb-2">
                                            <span className="text-4xl font-bold text-slate-900">₹{track.offerPrice.toLocaleString()}</span>
                                            <span className="text-lg text-slate-400 line-through decoration-slate-400/50">₹{track.regularPrice.toLocaleString()}</span>
                                        </div>
                                        <p className="text-sm font-medium text-slate-500 mb-4">Per student • Includes Full Kit</p>

                                        <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Regular Price</p>
                                                <p className="font-semibold text-slate-700">₹{track.offerPrice.toLocaleString()}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase text-emerald-600 tracking-wider">Bring a Friend</p>
                                                <p className="font-bold text-emerald-700">₹{track.friendPrice.toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                            <Zap className="h-4 w-4 text-slate-400" />
                                            Projects You Will Build:
                                        </h4>
                                        <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                                            {track.projects.map((project, pIdx) => (
                                                <CheckItem key={pIdx} colorClass={track.accentColor}>
                                                    {project.includes("Mega Project") ? (
                                                        <span className="font-bold text-slate-900 bg-slate-100 px-1 rounded">{project}</span>
                                                    ) : (
                                                        project
                                                    )}
                                                </CheckItem>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link href="/summer-camp/apply" className="w-full sm:w-auto">
                                        <Button className="h-12 px-8 text-base w-full bg-slate-900 text-white hover:bg-slate-800">
                                            Enroll in {track.id === 'young' ? 'Track 1' : 'Track 2'}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. REFERRAL OFFER (Redesigned: Clean Ticket Style) */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-200 text-slate-900 shadow-xl">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-16 items-center">

                            {/* Left: Value Proposition */}
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs font-bold uppercase tracking-wider mb-6">
                                    <Users2 className="h-3 w-3" />
                                    Limited Time Offer
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                    Bring a Friend <br />
                                    <span className="text-indigo-600">
                                        & Save ₹100
                                    </span>
                                </h2>
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-md">
                                    Innovation is better with a team. When you register with a friend, the referring student unlocks an instant discount.
                                </p>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                                    <Lightbulb className="h-6 w-6 text-amber-500 shrink-0" />
                                    <div className="text-sm">
                                        <p className="font-bold text-slate-900 mb-1">How to claim?</p>
                                        <p className="text-slate-500">Simply have your friend enter your name in the &quot;Referred By&quot; field during their checkout.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Ticket/Pricing visuals */}
                            <div className="flex flex-col gap-4">
                                {/* Ticket 1 */}
                                <div className="group flex items-center bg-white rounded-2xl p-1 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                                    <div className="bg-amber-50 h-24 w-24 rounded-xl flex flex-col items-center justify-center shrink-0 border border-amber-100">
                                        <span className="text-xs font-bold text-amber-700 uppercase tracking-wider text-center px-1">Track 1</span>
                                    </div>
                                    <div className="px-6 py-2 flex-1">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Young Innovators Referral</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-bold text-slate-900">₹2,549</span>
                                            <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Save ₹100</span>
                                        </div>
                                    </div>
                                    <div className="pr-6">
                                        <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                            <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                </div>

                                {/* Ticket 2 */}
                                <div className="group flex items-center bg-white rounded-2xl p-1 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                                    <div className="bg-sky-50 h-24 w-24 rounded-xl flex flex-col items-center justify-center shrink-0 border border-sky-100">
                                        <span className="text-xs font-bold text-sky-700 uppercase tracking-wider text-center px-1">Track 2</span>
                                    </div>
                                    <div className="px-6 py-2 flex-1">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Master Builders Referral</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-bold text-slate-900">₹3,549</span>
                                            <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Save ₹100</span>
                                        </div>
                                    </div>
                                    <div className="pr-6">
                                        <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                            <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 4. BLUEPRINT & MENTORSHIP (Side by Side) */}
            <section id="why-choose-us" className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Left: Timeline */}
                        <div className="lg:w-3/5">
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">The 5-Day Blueprint</h2>
                            <p className="text-slate-600 mb-10">Parents often want to know exactly how the 15 hours will be spent.</p>

                            <div className="space-y-8 relative pl-8 border-l-2 border-slate-200 ml-4">
                                {blueprint.map((day, idx) => (
                                    <div key={idx} className="relative group">
                                        <div className="absolute -left-[41px] top-1.5 h-6 w-6 rounded-full bg-white border-4 border-sky-600 group-hover:scale-110 transition-transform shadow-sm" />
                                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-1 block">{day.day}</span>
                                            <h3 className="text-lg font-bold text-slate-900 mb-2">{day.title}</h3>
                                            <p className="text-slate-600 leading-relaxed text-sm">
                                                {day.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Why Choose Us (Sticky/Card Style) */}
                        <div className="lg:w-2/5">
                            <div className="sticky top-24">
                                <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose Scaleopal?</h2>

                                <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
                                    <Image
                                        src={IMG_MENTOR}
                                        alt="Mentorship at Scaleopal"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="font-bold">Industry-Grade Mentorship</p>
                                        <p className="text-xs opacity-80">Taught by professional AI engineers</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-6">
                                    <div className="flex gap-4">
                                        <div className="bg-emerald-50 h-10 w-10 rounded-lg flex items-center justify-center shrink-0">
                                            <Users2 className="h-5 w-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Beyond &quot;Just Coding&quot;</h4>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                                We focus on the physical integration of Artificial Intelligence and hardware. Students don&apos;t just write code; they see it come to life.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="bg-blue-50 h-10 w-10 rounded-lg flex items-center justify-center shrink-0">
                                            <Gift className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">100% Free Take-Home Kit</h4>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                                All components, sensors, and microcontrollers used during the camp go home with the student.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="bg-violet-50 h-10 w-10 rounded-lg flex items-center justify-center shrink-0">
                                            <BadgeCheck className="h-5 w-5 text-violet-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Verified Certificate</h4>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                                Receive a recognized certificate of completion upon finishing the camp.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. FAQ */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <SectionHeader title="Frequently Asked Questions" />

                    <div className="grid gap-4">
                        {faqs.map((faq, idx) => (
                            <FAQAccordion key={idx} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA */}
            <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <Image src={IMG_KIT} alt="Background" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build the Future?</h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                        Secure your spot in the Scaleopal Labs Summer Camp 2026. Batch 1 starts soon—don&apos;t miss out!
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/summer-camp/apply">
                            <Button size="lg" className="h-14 px-10 text-lg bg-sky-600 hover:bg-sky-500 shadow-xl shadow-sky-900/50">
                                Register Now
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-slate-700 text-slate-300 hover:bg-white/10 hover:text-white bg-transparent">
                            Request Callback
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}

function FAQAccordion({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 data-[state=open]:border-sky-200 data-[state=open]:ring-1 data-[state=open]:ring-sky-100">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
            >
                <span className="font-semibold text-slate-900 pr-4">{question}</span>
                <ChevronDown className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="p-5 pt-0 text-slate-600 bg-white border-t border-slate-50">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
