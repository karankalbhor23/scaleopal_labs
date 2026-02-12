"use client";

import { motion } from "framer-motion";
import { Cpu, Brain, Zap, ArrowRight, Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function RealityGap() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-24 text-slate-900 border-y border-slate-100">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-[10%] -top-[10%] h-[40%] w-[40%] rounded-full bg-sky-200/20 blur-[120px]" />
                <div className="absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full bg-indigo-200/20 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Side: The "Gap" Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge
                            variant="secondary"
                            className="mb-6 bg-sky-100 text-sky-700 hover:bg-sky-100 font-semibold"
                        >
                            The Reality Gap
                        </Badge>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Textbooks Are <span className="text-sky-600">5 Years Behind.</span>
                        </h2>
                        <p className="mb-8 text-xl leading-relaxed text-slate-600">
                            The world is moving to <span className="text-slate-900 font-semibold">Agentic AI, Humanoid Robotics, and Edge Computing</span>. Traditional schools are still teaching definition-based theory.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                                    <Zap className="h-6 w-6 text-sky-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900">The Disconnect</h4>
                                    <p className="text-slate-600">While industry leaders build autonomous systems, students are memorizing static diagrams from the 2010s.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                                    <Cpu className="h-6 w-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900">Silicon Valley Stack</h4>
                                    <p className="text-slate-600">Scaleopal Labs brings enterprise-grade tech stacks and real-world engineering directly to the classroom.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Data Visualization / Stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <Card className="border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
                            <div className="relative z-10">
                                <div className="mb-8 flex items-center justify-between">
                                    <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center">
                                        <Timer className="h-6 w-6 text-sky-600" />
                                    </div>
                                    <div className="text-right">
                                        <span className="text-4xl font-bold text-slate-900 leading-none">2035</span>
                                        <p className="text-xs uppercase tracking-widest text-slate-400 mt-1 font-bold">Projection</p>
                                    </div>
                                </div>

                                <div className="mb-6 space-y-4">
                                    <div className="flex items-end justify-between">
                                        <p className="text-sm font-semibold text-slate-500">Future-Proof Readiness</p>
                                        <p className="text-2xl font-bold text-sky-600">85%</p>
                                    </div>
                                    <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "85%" }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-gradient-to-r from-sky-500 to-indigo-500"
                                        />
                                    </div>
                                </div>

                                <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
                                    <p className="text-xl font-medium leading-relaxed text-slate-800 italic">
                                        "85% of the jobs your child will have in 2035 haven't been invented yet. We prepare them for the unknown."
                                    </p>
                                </div>

                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                                        <Brain className="mb-2 h-5 w-5 text-indigo-500" />
                                        <p className="text-xs font-bold text-slate-400">Cognitive Focus</p>
                                        <p className="text-sm font-bold text-slate-900">Problem Solving</p>
                                    </div>
                                    <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                                        <Cpu className="mb-2 h-5 w-5 text-sky-500" />
                                        <p className="text-xs font-bold text-slate-400">Technical Skill</p>
                                        <p className="text-sm font-bold text-slate-900">AI Integration</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Grid */}
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #475569 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                        </Card>

                        {/* Floating Element */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 -top-4 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 p-[1px] shadow-2xl"
                        >
                            <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-bold text-slate-900">
                                <ArrowRight className="h-4 w-4 text-sky-600" />
                                <span>Closing the Gap</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
