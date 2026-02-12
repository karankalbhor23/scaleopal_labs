"use client";

import { motion } from "framer-motion";
import {
    Globe,
    Cpu,
    Award,
    Users,
    ArrowRight,
    Terminal,
    Code2,
    ShieldCheck,
    Briefcase
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { engineerAdvantage } from "@/lib/data";

const iconMap: Record<string, any> = {
    Globe,
    Cpu,
    Award,
    Users,
};

export function EngineerAdvantage() {
    return (
        <section id="about" className="relative bg-white py-24 lg:py-32 overflow-hidden">
            {/* Engineering Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <Badge
                            variant="secondary"
                            className="mb-6 bg-sky-50 text-sky-700 border-sky-100 px-4 py-1"
                        >
                            The Engineering Standard
                        </Badge>
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            {engineerAdvantage.title}
                        </h2>
                        <p className="mt-6 text-xl text-slate-600 leading-relaxed font-medium">
                            We don't just teach code; we transfer the <span className="text-sky-600">engineering mindset</span> required to build the future of AI.
                        </p>
                    </motion.div>
                </div>

                <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2 h-auto lg:h-[600px]">
                    {/* Feature 1: The Core Differntiator */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 lg:row-span-1"
                    >
                        <Card className="h-full border-slate-100 bg-slate-50/50 p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-sky-600 rounded-xl shadow-lg shadow-sky-200">
                                            <Code2 className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900">Active Practitioners, Not Just Tutors</h3>
                                    </div>
                                    <p className="text-slate-600 font-medium max-w-lg mb-6">
                                        Every mentor at Scaleopal Labs is an active engineer. When they aren't teaching, they're building autonomous systems and LLM frameworks for global industry leaders.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {engineerAdvantage.comparison.scaleopal.points.slice(0, 3).map((point, i) => (
                                        <div key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <ShieldCheck className="h-4 w-4 text-emerald-500" />
                                            {point}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Abstract Decorative Element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                        </Card>
                    </motion.div>

                    {/* Feature 2: Small Card (Users/Batches) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-4 lg:row-span-1"
                    >
                        <Card className="h-full border-slate-100 bg-white p-8 hover:shadow-xl transition-all duration-500 flex flex-col justify-center">
                            <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 w-fit mb-6">
                                <Users className="h-6 w-6 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">15 Students. 1 Engineer.</h3>
                            <p className="text-slate-600 text-sm font-medium">
                                We maintain a strict ratio to ensure every student gets direct feedback from actual builders. No one gets left behind in complex logic.
                            </p>
                        </Card>
                    </motion.div>

                    {/* Feature 3: Side Small Card (Global) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-4 lg:row-span-1"
                    >
                        <Card className="h-full border-slate-100 bg-white p-8 hover:shadow-xl transition-all duration-500 flex flex-col justify-center">
                            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 w-fit mb-6">
                                <Globe className="h-6 w-6 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Global Industry Exposure</h3>
                            <p className="text-slate-600 text-sm font-medium">
                                Our curriculum is influenced by real requests we receive from global clients—giving students a unique perspective on what's actually being built today.
                            </p>
                        </Card>
                    </motion.div>

                    {/* Feature 4: The Internship (Wide Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-8 lg:row-span-1"
                    >
                        <Card className="h-full border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
                            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 h-full">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-sky-100 rounded-lg">
                                            <Award className="h-6 w-6 text-sky-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900">Engineering Internship</h3>
                                    </div>
                                    <p className="text-slate-600 font-medium mb-6">
                                        This is more than a certificate. Our students earn a verifiable <span className="text-sky-600 font-bold">Credential of Internship</span> by completing projects that meet enterprise engineering standards.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
                                            Details
                                        </button>
                                        <button className="flex items-center gap-2 text-sky-600 font-bold hover:text-sky-700 text-sm transition-colors">
                                            View Sample <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-full lg:w-56 h-auto aspect-[4/3] bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-6 text-center group-hover:bg-sky-50 group-hover:border-sky-200 transition-all duration-500">
                                    <div className="relative mb-3">
                                        <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-full" />
                                        <ShieldCheck className="h-12 w-12 text-sky-600 relative z-10" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Verified Credential</p>
                                        <p className="text-sm font-bold text-slate-900 whitespace-nowrap">ID: SCO-2026-INT</p>
                                        <div className="h-px w-8 bg-slate-200 mx-auto my-2" />
                                        <p className="text-[10px] font-medium text-slate-500 italic">Issued by Scaleopal Labs</p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Background Element */}
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-sky-50 rounded-full blur-3xl pointer-events-none" />
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
