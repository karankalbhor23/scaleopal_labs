"use client";

import { motion } from "framer-motion";
import {
    Building2,
    Cpu,
    GraduationCap,
    Wrench,
    ArrowRight,
    Download,
    Calendar,
    CheckCircle2,
    Server,
    Bot,
    Microscope,
    RotateCw,
    School
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SchoolsPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-500 via-indigo-900 to-slate-900"></div>
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Badge variant="outline" className="mb-6 border-sky-500/50 text-sky-400 px-4 py-1.5 text-sm uppercase tracking-wider backdrop-blur-sm bg-sky-950/30">
                                For Forward-Thinking Institutions
                            </Badge>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-sky-200">
                                Transform Your Computer Lab into a <br className="hidden md:block" />
                                <span className="text-sky-400">Future-Ready AI & Robotics Hub.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Equip your students with the skills of tomorrow. We provide turnkey hardware, modern curriculum, and expert training designed by practicing AI Engineers to bring your school to the forefront of tech education.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button size="lg" className="h-14 px-8 text-lg bg-sky-600 hover:bg-sky-500 text-white shadow-[0_0_30px_-5px_var(--color-sky-500)] w-full sm:w-auto">
                                    <Calendar className="mr-2 h-5 w-5" />
                                    Schedule a Principal's Consultation
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white w-full sm:w-auto bg-slate-900/50 backdrop-blur-md">
                                    <Download className="mr-2 h-5 w-5" />
                                    Download 2026 Curriculum Brochure
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Education Gap */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Badge variant="secondary" className="mb-6 bg-red-100 text-red-700">The Why Now?</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                                Is your IT syllabus stuck in the past?
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600">
                                <p>
                                    The technology landscape has evolved to <strong className="text-slate-900">Generative AI, Machine Vision, and Smart IoT</strong>, yet many traditional school curriculums remain focused on basic software from a decade ago.
                                </p>
                                <p>
                                    To meet the experiential learning mandates of <strong className="text-slate-900">NEP 2020</strong>, schools need more than just textbook updates. They need physical innovation spaces where students can bridge the gap between code and the real world. That’s where we step in.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="p-6 bg-slate-50 border-slate-100 shadow-sm flex flex-col items-center text-center">
                                    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                                        <HistoryIcon className="h-6 w-6 text-red-600" />
                                    </div>
                                    <h3 className="font-semibold text-slate-900">Outdated Theory</h3>
                                    <p className="text-sm text-slate-500 mt-2">Static textbooks & rote memorization</p>
                                </Card>
                                <Card className="p-6 bg-sky-50 border-sky-100 shadow-sm flex flex-col items-center text-center translate-y-8">
                                    <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                                        <Bot className="h-6 w-6 text-sky-600" />
                                    </div>
                                    <h3 className="font-semibold text-slate-900">Hands-on AI</h3>
                                    <p className="text-sm text-slate-500 mt-2">Building real neural networks & robots</p>
                                </Card>
                                <Card className="p-6 bg-slate-50 border-slate-100 shadow-sm flex flex-col items-center text-center -translate-y-8">
                                    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                                        <CodeIcon className="h-6 w-6 text-red-600" />
                                    </div>
                                    <h3 className="font-semibold text-slate-900">Basic Coding</h3>
                                    <p className="text-sm text-slate-500 mt-2">Hello World & Simple Logic</p>
                                </Card>
                                <Card className="p-6 bg-sky-50 border-sky-100 shadow-sm flex flex-col items-center text-center">
                                    <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                                        <Microscope className="h-6 w-6 text-sky-600" />
                                    </div>
                                    <h3 className="font-semibold text-slate-900">Smart IoT</h3>
                                    <p className="text-sm text-slate-500 mt-2">Connecting software to physical world</p>
                                </Card>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Unique Partnership Framework */}
            <section className="py-24 bg-slate-900 text-white relative">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Unique Partnership Framework</h2>
                        <p className="text-slate-400 text-lg">Our engagement with educational institutions operates on a strict 50/50 principle.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-all"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-14 w-14 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-700">
                                        <Server className="h-7 w-7 text-sky-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold">50% White-Labeled Infrastructure</h3>
                                </div>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    We build the physical lab and provide the complete curriculum under your school’s brand.
                                </p>
                                <div className="p-4 bg-slate-900/80 rounded-lg border border-slate-700/50">
                                    <p className="text-sm text-slate-400 italic">
                                        When parents walk in, they see the <span className="text-white font-semibold">"[Your School Name] Center for Innovation."</span> We remain your silent, powerful backend partner.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-14 w-14 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-700">
                                        <Bot className="h-7 w-7 text-indigo-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold">50% Real AI Adoption</h3>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    We focus entirely on bringing practical Artificial Intelligence and modern robotics adoption directly into your classrooms, ensuring your students and teachers are actually using the tech, not just reading about it.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Deliver */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4 border-slate-300 text-slate-600">The Turnkey Solution</Badge>
                        <h2 className="text-4xl font-bold text-slate-900">What We Deliver</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* 1 */}
                        <Card className="p-8 border-slate-200 hover:border-sky-200 transition-all hover:shadow-lg">
                            <div className="h-12 w-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6">
                                <Cpu className="h-6 w-6 text-sky-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. State-of-the-Art Hardware Labs</h3>
                            <p className="text-slate-600 mb-4">
                                We set up the entire physical ecosystem in your school. From microcontrollers (ESP32, Arduino) and AI vision cameras to 3D printers and sensor kits, we provide commercial-grade components that are safe for student use.
                            </p>
                        </Card>

                        {/* 2 */}
                        <Card className="p-8 border-slate-200 hover:border-indigo-200 transition-all hover:shadow-lg">
                            <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <GraduationCap className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Progressive, NEP-Aligned Curriculum</h3>
                            <div className="space-y-4">
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-slate-800 text-sm mb-1">Primary (Classes 3-6)</h4>
                                    <p className="text-sm text-slate-600">Visual coding, logic building, basic circuitry, and sensor integration.</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-slate-800 text-sm mb-1">Secondary (Classes 7-10)</h4>
                                    <p className="text-sm text-slate-600">Python, Artificial Intelligence (OpenCV), Internet of Things (IoT), and advanced hardware automation.</p>
                                </div>
                            </div>
                        </Card>

                        {/* 3 */}
                        <Card className="p-8 border-slate-200 hover:border-green-200 transition-all hover:shadow-lg">
                            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                                <School className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. "Train the Trainer" Programs</h3>
                            <p className="text-slate-600">
                                Your teachers are your greatest asset. We don't just drop off equipment; we upskill your existing computer and science faculty to confidently deliver modern tech classes.
                            </p>
                        </Card>

                        {/* 4 */}
                        <Card className="p-8 border-slate-200 hover:border-amber-200 transition-all hover:shadow-lg">
                            <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                                <RotateCw className="h-6 w-6 text-amber-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Ongoing Maintenance & Upgrades</h3>
                            <p className="text-slate-600">
                                Technology moves fast. We ensure your lab components are maintained, and your curriculum is updated annually to reflect the latest advancements in the tech industry.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* The Scaleopal Labs Advantage */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">The Scaleopal Labs Advantage</h2>
                        <div className="inline-block px-4 py-2 bg-slate-900 text-white font-bold rounded-lg text-lg transform -rotate-1 shadow-lg">
                            Built by Engineers, Not Just Educators.
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto leading-relaxed text-lg text-slate-600 text-center">
                        <p className="mb-6">
                            Unlike traditional textbook publishers or generic workshop vendors, our curriculum is engineered by <strong className="text-slate-900">active AI professionals</strong>.
                        </p>
                        <p>
                            We extract the exact skills required in today's top tech industries and reverse-engineer them into student-friendly, project-based learning modules. Your students learn the frameworks that actual startups and tech giants use today.
                        </p>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </section>

            {/* Cohort Section */}
            <section className="py-20 bg-gradient-to-br from-indigo-600 to-sky-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-5xl mx-auto border border-white/20 shadow-2xl">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1">
                                <Badge className="bg-amber-400 text-amber-900 hover:bg-amber-500 mb-4 border-none">Limited Availability</Badge>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Exclusive 2026 Academic Innovation Cohort</h2>
                                <p className="text-indigo-100 text-lg mb-6">
                                    We are currently selecting a limited number of forward-thinking schools in the Pune region to integrate our comprehensive AI & Robotics programs for the upcoming academic year.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-amber-400" />
                                        <span className="font-medium">Prioritized lab deployment</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-amber-400" />
                                        <span className="font-medium">Specialized faculty training sessions</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-amber-400" />
                                        <span className="font-medium">Preferred pricing structures</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/3 w-full">
                                <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl">
                                    <h3 className="font-bold text-xl mb-2 text-center">Join the Cohort</h3>
                                    <p className="text-slate-500 text-center text-sm mb-6">Spots filling up fast for 2026</p>
                                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-12 text-lg font-semibold">
                                        Apply Now
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Area */}
            <section className="py-24 bg-slate-50" id="contact">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Let’s Build the Future of Your School</h2>
                            <p className="text-slate-600">Ready to see how an AI and Robotics lab fits into your campus?</p>
                        </div>

                        <Card className="p-8 shadow-xl border-slate-200">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-slate-700">Principal / Trustee Name</label>
                                        <input type="text" id="name" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all" placeholder="Dr. Rajesh Kumar" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="school" className="text-sm font-semibold text-slate-700">School Name</label>
                                        <input type="text" id="school" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all" placeholder="St. Mary's High School" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Official Email Address</label>
                                    <input type="email" id="email" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all" placeholder="principal@school.edu" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all" placeholder="+91 98765 43210" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message (Optional)</label>
                                    <textarea id="message" rows={4} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all" placeholder="Tell us about your current lab setup..."></textarea>
                                </div>

                                <Button size="lg" className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 text-lg">
                                    Request Consultation
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Simple icons for "History" and "Code" if not in Lucide imports
function HistoryIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12" />
            <path d="M3 3v9h9" />
            <path d="M12 7v5l4 2" />
        </svg>
    )
}

function CodeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}
