"use client";

import { motion } from "framer-motion";
import {
    Users,
    Lightbulb,
    Zap,
    Target,
    ArrowRight,
    Rocket,
    Code,
    Cpu,
    Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500 via-sky-900 to-slate-900"></div>
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Badge variant="outline" className="mb-6 border-indigo-500/50 text-indigo-400 px-4 py-1.5 text-sm uppercase tracking-wider backdrop-blur-sm bg-indigo-950/30">
                                Our Mission
                            </Badge>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
                                Bridging the Gap Between the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Tech Industry</span> and the <span className="text-white">Classroom.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                                We are a team of active AI Engineers and Robotics Specialists on a mission to transform students from technology consumers into technology creators.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 mb-6">
                                <Lightbulb className="h-6 w-6 text-orange-600" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Our Story: Born from Real-World AI
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Scaleopal Labs wasn’t started by traditional textbook publishers. We are the dedicated EdTech and training division of <strong className="text-slate-900">Scaleopal</strong>, a professional AI solutions agency.
                                </p>
                                <p>
                                    While building advanced AI automation, machine learning pipelines, and tech solutions for global B2B clients, we noticed a massive disconnect: the technology industry is evolving at lightning speed, but school curriculums are struggling to keep up.
                                </p>
                                <p>
                                    Students are growing up in a world powered by Generative AI, Smart IoT, and advanced robotics, yet they are often still taught the basic IT syllabus of the previous decade. We realized that to prepare the next generation, we needed to bring the tech industry directly into the classroom.
                                </p>
                                <p className="font-medium text-slate-800 italic border-l-4 border-indigo-500 pl-4 py-2 bg-slate-50 rounded-r-lg">
                                    That is how Scaleopal Labs was born—with a vision to democratize industry-grade technology education for students across India.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-sky-500/10 rounded-3xl transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                                alt="Students learning technology"
                                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-slate-100 hidden md:block">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Live Status</span>
                                </div>
                                <p className="font-bold text-slate-900">Building Real Solutions</p>
                                <p className="text-sm text-slate-600 mt-1">From theory to deploying actual AI models.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Core Philosophy */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge variant="secondary" className="mb-4 bg-sky-100 text-sky-700">Philosophy</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">We Operate on a Simple but Powerful Premise</h2>
                        <p className="text-xl font-medium text-indigo-600">Building over Reading.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <Card className="p-8 border-slate-200 hover:shadow-lg transition-shadow bg-white">
                            <div className="h-14 w-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                                <WrenchIcon className="h-7 w-7 text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Real-World Application</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We don't believe in rote memorization of code. Our students learn by physically wiring sensors, programming microcontrollers, and training AI models.
                            </p>
                        </Card>

                        <Card className="p-8 border-slate-200 hover:shadow-lg transition-shadow bg-white">
                            <div className="h-14 w-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
                                <ScaleIcon className="h-7 w-7 text-sky-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">The 50/50 Approach</h3>
                            <p className="text-slate-600 leading-relaxed">
                                In everything we do, we aim for a perfect balance—partnering seamlessly with institutions to build their physical infrastructure, while dedicating equal focus to driving real, hands-on AI adoption among students and teachers.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why We Are Different */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why We Are Different</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors group">
                            <div className="mb-6 p-4 bg-slate-900 rounded-xl w-fit group-hover:scale-110 transition-transform">
                                <Briefcase className="h-8 w-8 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Practicing Engineers, Not Just Tutors</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Our curriculum isn’t theoretical. It is reverse-engineered from the actual frameworks and tools we use to build tech solutions for businesses today.
                            </p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors group">
                            <div className="mb-6 p-4 bg-slate-900 rounded-xl w-fit group-hover:scale-110 transition-transform">
                                <Rocket className="h-8 w-8 text-sky-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Future-Proof Curriculum</h3>
                            <p className="text-slate-400 leading-relaxed">
                                We move beyond basic line-following robots. We introduce students to Python, Artificial Intelligence (like OpenCV for machine vision), and IoT automation.
                            </p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors group">
                            <div className="mb-6 p-4 bg-slate-900 rounded-xl w-fit group-hover:scale-110 transition-transform">
                                <Cpu className="h-8 w-8 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Hardware That Belongs to the Student</h3>
                            <p className="text-slate-400 leading-relaxed">
                                In our direct-to-student programs, we ensure the hardware goes home with them. Innovation shouldn't stop when the class ends.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <Badge variant="outline" className="mb-4 border-slate-300 text-slate-600">Our People</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Meet the Team</h2>

                    <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                        We are a collective of developers, AI architects, and robotics trainers passionate about education.
                    </p>

                    <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="flex-1 text-left">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Engineering + Pedagogy</h3>
                                <p className="text-slate-600 mb-4 text-lg">
                                    The Scaleopal Labs ecosystem is supported by a dynamic core team of AI engineering specialists, alongside experienced robotics trainers with years of expertise leading hands-on workshops in major educational institutions.
                                </p>
                                <p className="text-slate-600 text-lg">
                                    Together, we combine the agility of a modern tech startup with the pedagogical expertise needed to make complex concepts accessible to a 3rd grader and challenging enough for a 10th grader.
                                </p>
                            </div>
                            <div className="shrink-0 relative">
                                <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 rounded-full"></div>
                                <Users className="h-32 w-32 text-slate-300 relative z-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision for the Future */}
            <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 mb-8">
                        <Target className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Our Vision for the Future</h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-12">
                        We envision a future where every school has a dedicated <strong className="text-slate-900">Innovation Hub</strong>—a space where students are as comfortable programming a neural network or building a smart helmet as they are solving a math equation. We are partnering with forward-thinking schools and running intensive bootcamps to make this vision a reality, one student and one robot at a time.
                    </p>
                </div>
            </section>

            {/* Call to Action Block */}
            <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* CTA 1 */}
                        <Link href="/summer-camp" className="block group">
                            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 rounded-2xl h-full shadow-lg shadow-indigo-900/20 transform transition-transform group-hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-4">
                                    <Badge className="bg-indigo-400/20 text-indigo-100 hover:bg-indigo-400/30 border-none">For Students</Badge>
                                    <ArrowRight className="h-6 w-6 text-indigo-200 group-hover:translate-x-1 transition-transform" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Ready to start building?</h3>
                                <p className="text-indigo-100 mb-6 font-medium">Join our Summer Camp 2026 and get hands-on.</p>
                                <span className="inline-flex items-center text-sm font-bold text-white bg-white/10 px-4 py-2 rounded-lg group-hover:bg-white/20 transition-colors">
                                    View Summer Camp Details
                                </span>
                            </div>
                        </Link>

                        {/* CTA 2 */}
                        <Link href="/schools" className="block group">
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-2xl h-full shadow-lg transform transition-transform group-hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-4">
                                    <Badge variant="outline" className="border-slate-500 text-slate-300">For Institutions</Badge>
                                    <ArrowRight className="h-6 w-6 text-slate-400 group-hover:translate-x-1 transition-transform" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Want to upgrade your school's curriculum?</h3>
                                <p className="text-slate-400 mb-6 font-medium">Partner with us to build a future-ready lab.</p>
                                <span className="inline-flex items-center text-sm font-bold text-white bg-slate-700 px-4 py-2 rounded-lg group-hover:bg-slate-600 transition-colors">
                                    Visit Schools Partner Page
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Simple icons helpers if Lucide imports miss something specific or to allow custom styling
function WrenchIcon(props: any) {
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
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    )
}

function ScaleIcon(props: any) {
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
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
        </svg>
    )
}
