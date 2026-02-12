"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Users, CheckCircle, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { summerCamp } from "@/lib/data";

export function SummerCamp() {
    return (
        <section
            id="summer-camp"
            className="bg-slate-50 py-24 border-t border-slate-100"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <Badge className="mb-4 bg-sky-100 text-sky-700 hover:bg-sky-100 font-semibold border-sky-200">
                        <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                        Limited Seats Available
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        {summerCamp.title}
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">{summerCamp.subtitle}</p>
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 ring-1 ring-amber-100">
                        <Calendar className="h-4 w-4" />
                        {summerCamp.urgency}
                    </div>
                </motion.div>

                {/* Kit Cards */}
                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    {summerCamp.kits.map((kit, idx) => (
                        <motion.div
                            key={kit.level}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <Card
                                className={`relative overflow-hidden border border-slate-200 bg-white p-8 transition-all hover:shadow-xl ${kit.tag === "Most Popular"
                                    ? "ring-2 ring-sky-500 ring-offset-4 ring-offset-slate-50 shadow-sky-100 shadow-xl"
                                    : "shadow-sm"
                                    }`}
                            >
                                {/* Tag */}
                                <div className="absolute top-0 right-0">
                                    <div
                                        className={`rounded-bl-2xl px-4 py-2 text-xs font-bold uppercase tracking-wide ${kit.tag === "Most Popular"
                                            ? "bg-sky-600 text-white"
                                            : "bg-amber-100 text-amber-700"
                                            }`}
                                    >
                                        {kit.tag}
                                    </div>
                                </div>

                                {/* Kit Header */}
                                <div className="mb-6">
                                    <span className="text-sm font-bold text-sky-600">
                                        Level {kit.level}
                                    </span>
                                    <h3 className="mt-1 text-2xl font-bold text-slate-900">
                                        {kit.name}
                                    </h3>
                                    <p className="mt-2 text-slate-600 leading-relaxed">{kit.description}</p>
                                </div>

                                {/* Meta Info */}
                                <div className="mb-6 flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full">
                                        <Clock className="h-4 w-4 text-slate-400" />
                                        {kit.duration}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full">
                                        <Users className="h-4 w-4 text-slate-400" />
                                        {kit.ages}
                                    </div>
                                </div>

                                {/* Project Highlight */}
                                <div className="mb-6 rounded-xl bg-sky-50 p-4 border border-sky-100">
                                    <span className="text-xs font-bold uppercase tracking-wide text-sky-600">
                                        Final Project
                                    </span>
                                    <p className="mt-1 font-bold text-slate-900">
                                        {kit.project}
                                    </p>
                                </div>

                                {/* Highlights List */}
                                <ul className="mb-8 space-y-3">
                                    {kit.highlights.map((highlight, hidx) => (
                                        <li
                                            key={hidx}
                                            className="flex items-center gap-3 text-sm font-medium text-slate-600"
                                        >
                                            <CheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>

                                {/* Pricing */}
                                <div className="mb-6 flex items-baseline gap-3">
                                    <span className="text-4xl font-bold text-slate-900 leading-none">
                                        ₹{kit.price.toLocaleString("en-IN")}
                                    </span>
                                    <span className="text-lg text-slate-400 line-through">
                                        ₹{kit.originalPrice.toLocaleString("en-IN")}
                                    </span>
                                </div>

                                {/* CTA */}
                                <Button
                                    size="lg"
                                    className={`w-full h-12 text-base font-bold transition-all ${kit.tag === "Most Popular"
                                        ? "bg-sky-600 text-white hover:bg-sky-700 shadow-lg shadow-sky-200"
                                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                                        }`}
                                >
                                    Enroll in Level {kit.level}
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center text-sm font-medium text-slate-400"
                >
                    All kits include take-home hardware components • No prior coding
                    experience required
                </motion.p>
            </div>
        </section>
    );
}
