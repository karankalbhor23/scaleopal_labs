"use strict";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    ArrowRight,
    Users2,
    Lightbulb,
    Cpu,
    Sparkles,
    Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
// Reusing images from the main page for consistency
const IMG_APPLY = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop";

const tracks = [
    {
        id: "young",
        title: "Track 1: Young Innovators",
        eligibility: "Class 3rd - 6th",
        price: 2649,
        originalPrice: 3000,
        icon: Lightbulb,
        color: "amber",
        desc: "For beginners. Build circuits & simple robots."
    },
    {
        id: "master",
        title: "Track 2: Master Builders",
        eligibility: "Class 7th - 10th",
        price: 3649,
        originalPrice: 4500,
        icon: Cpu,
        color: "sky",
        desc: "Advanced. Python coding & AI robotics."
    }
];

export default function ApplyPage() {
    const [selectedTrack, setSelectedTrack] = useState<string>("young");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [referralCode, setReferralCode] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        alert("Application submitted! (This is a demo)");
    };

    const currentTrack = tracks.find(t => t.id === selectedTrack) || tracks[0];
    const discount = referralCode ? 100 : 0;
    const finalPrice = currentTrack.price - discount;

    return (
        <div className="min-h-screen bg-slate-50 font-sans flex flex-col">

            <div className="flex-1 container mx-auto px-4 py-8 pt-24 lg:py-12 lg:pt-28">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">

                    {/* Left Column: Summary & Value (Hidden on mobile? No, maybe collapsed or order-2) */}
                    <div className="w-full lg:w-5/12 order-2 lg:order-1 h-fit sticky top-24">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                            {/* Hero Image in Summary */}
                            <div className="relative h-48 w-full">
                                <Image
                                    src={IMG_APPLY}
                                    alt="Students learning"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="font-bold text-xl">Future Engineers Camp</h3>
                                    <p className="text-slate-200 text-sm">5 Days of Innovation & Fun</p>
                                </div>
                            </div>

                            <div className="p-6">
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                    What's Included
                                </h4>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Full Robotic Kit (Take-home)",
                                        "Certificate of Completion",
                                        "15 Hours of Expert Mentorship",
                                        "Snacks & Refreshments",
                                        "Project Showcase Day"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                            <div className="h-1.5 w-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-slate-600 text-sm">Camp Fee</span>
                                        <span className="font-semibold text-slate-900">₹{currentTrack.price.toLocaleString()}</span>
                                    </div>
                                    {referralCode && (
                                        <div className="flex justify-between items-center mb-2 text-emerald-600">
                                            <span className="text-sm flex items-center gap-1">
                                                <Users2 className="h-3 w-3" /> Referral Discount
                                            </span>
                                            <span className="font-semibold">- ₹100</span>
                                        </div>
                                    )}
                                    <div className="border-t border-slate-200 my-2 pt-2 flex justify-between items-end">
                                        <span className="font-bold text-slate-900">Total</span>
                                        <span className="text-2xl font-bold text-indigo-600">₹{finalPrice.toLocaleString()}</span>
                                    </div>
                                    <p className="text-xs text-slate-400 mt-1 text-center">Secure Payment via Razorpay</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: The Form */}
                    <div className="w-full lg:w-7/12 order-1 lg:order-2">
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Secure Your Spot</h1>
                            <p className="text-slate-600 text-lg">
                                Complete the form below to register. Spots are limited to 20 per batch.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-8">

                            {/* Track Selection */}
                            <section>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">1. Choose Track</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {tracks.map((track) => (
                                        <div
                                            key={track.id}
                                            onClick={() => setSelectedTrack(track.id)}
                                            className={`
                                                cursor-pointer relative p-4 rounded-xl border-2 transition-all duration-200
                                                ${selectedTrack === track.id
                                                    ? 'border-indigo-600 bg-indigo-50/50 ring-1 ring-indigo-600'
                                                    : 'border-slate-200 hover:border-indigo-200 hover:bg-slate-50'}
                                            `}
                                        >
                                            <div className={`p-2 rounded-lg inline-flex mb-3 ${track.id === 'young' ? 'bg-amber-100 text-amber-700' : 'bg-sky-100 text-sky-700'}`}>
                                                <track.icon className="h-5 w-5" />
                                            </div>
                                            <h4 className="font-bold text-slate-900">{track.title}</h4>
                                            <p className="text-xs font-semibold text-slate-500 mb-2">{track.eligibility}</p>
                                            <p className="text-xs text-slate-600 leading-relaxed mb-3">{track.desc}</p>
                                            <div className="font-bold text-lg text-slate-900">₹{track.price}</div>

                                            {selectedTrack === track.id && (
                                                <div className="absolute top-4 right-4 text-indigo-600">
                                                    <CheckCircle2 className="h-5 w-5 fill-indigo-100" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Divider with visual connector */}
                            {/* <div className="h-px bg-slate-100 relative">
                                <div className="absolute left-0 -top-1.5 h-3 w-1 rounded-r-full bg-slate-200" />
                            </div> */}

                            {/* Student Details */}
                            <section className="space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">2. Student Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="studentName" className="text-sm font-medium text-slate-700">Student Name</label>
                                        <input
                                            type="text"
                                            id="studentName"
                                            required
                                            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900"
                                            placeholder="Enter student's full name"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="studentGrade" className="text-sm font-medium text-slate-700">Grade / Class</label>
                                        <select
                                            id="studentGrade"
                                            required
                                            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 bg-white"
                                        >
                                            <option value="">Select Class</option>
                                            <option value="3">Class 3</option>
                                            <option value="4">Class 4</option>
                                            <option value="5">Class 5</option>
                                            <option value="6">Class 6</option>
                                            <option value="7">Class 7</option>
                                            <option value="8">Class 8</option>
                                            <option value="9">Class 9</option>
                                            <option value="10">Class 10</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1.5 md:col-span-2">
                                        <label htmlFor="schoolName" className="text-sm font-medium text-slate-700">School Name</label>
                                        <input
                                            type="text"
                                            id="schoolName"
                                            required
                                            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900"
                                            placeholder="School name and location"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Parent Details */}
                            <section className="space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">3. Parent / Guardian Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5 md:col-span-2">
                                        <label htmlFor="parentName" className="text-sm font-medium text-slate-700">Parent Name</label>
                                        <input
                                            type="text"
                                            id="parentName"
                                            required
                                            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900"
                                            placeholder="Parent / Guardian full name"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="parentPhone" className="text-sm font-medium text-slate-700">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="parentPhone"
                                            required
                                            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900"
                                            placeholder="+91 "
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="parentEmail" className="text-sm font-medium text-slate-700">Email Address</label>
                                        <input
                                            type="email"
                                            id="parentEmail"
                                            required
                                            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900"
                                            placeholder="For confirmation & updates"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Referral Code */}
                            <section className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
                                <div className="flex items-start gap-4">
                                    <Users2 className="h-5 w-5 text-indigo-600 mt-1" />
                                    <div className="flex-1 space-y-2">
                                        <label htmlFor="referralBy" className="text-sm font-bold text-slate-900 block">Applying with a Friend?</label>
                                        <p className="text-xs text-slate-500">
                                            Enter your friend's name who referred you (or who you are joining with) to get an instant <strong>₹100 discount</strong>.
                                        </p>
                                        <input
                                            type="text"
                                            id="referralBy"
                                            value={referralCode}
                                            onChange={(e) => setReferralCode(e.target.value)}
                                            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 text-sm bg-white"
                                            placeholder="Friend's Name (Optional)"
                                        />
                                    </div>
                                </div>
                            </section>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-14 text-lg bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-200"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            Proceed to Payment <ArrowRight className="ml-2 h-5 w-5" />
                                        </>
                                    )}
                                </Button>
                                <p className="text-xs text-slate-400 text-center mt-4">
                                    By clicking "Proceed", you agree to our Terms & Conditions and Privacy Policy.
                                </p>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
