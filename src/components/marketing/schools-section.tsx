"use client";

import { motion } from "framer-motion";
import {
    Building,
    IndianRupee,
    BookOpen,
    GraduationCap,
    ArrowRight,
    type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { schoolsSection } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
    Building,
    IndianRupee,
    BookOpen,
    GraduationCap,
};

export function SchoolsSection() {
    return (
        <section id="schools" className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge
                            variant="secondary"
                            className="mb-4 bg-sky-100 text-sky-700"
                        >
                            For Schools & Institutions
                        </Badge>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            {schoolsSection.title}
                        </h2>
                        <p className="mt-2 text-xl font-medium text-slate-700">
                            {schoolsSection.subtitle}
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-slate-600">
                            {schoolsSection.description}
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Button
                                size="lg"
                                className="group gap-2 bg-sky-500 text-white hover:bg-sky-600"
                            >
                                {schoolsSection.cta.primary}
                                <ArrowRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Button>
                            <Button size="lg" variant="outline">
                                {schoolsSection.cta.secondary}
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="grid gap-4 sm:grid-cols-2"
                    >
                        {schoolsSection.features.map((feature, idx) => {
                            const Icon = iconMap[feature.icon] || Building;
                            return (
                                <Card
                                    key={idx}
                                    className="border-slate-200 bg-white p-6 transition-all hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5"
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                                        <Icon className="h-6 w-6 text-sky-600" />
                                    </div>
                                    <h4 className="mb-2 font-semibold text-slate-900">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm leading-relaxed text-slate-600">
                                        {feature.description}
                                    </p>
                                </Card>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Trust Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-20 rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 to-cyan-50 p-8 text-center lg:p-12"
                >
                    <h3 className="text-2xl font-bold text-slate-900">
                        Backed by Real Engineering Experience
                    </h3>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                        Our parent company, Scaleopal, works with Fortune 500 clients on AI
                        automation. That experience flows directly into our curriculum.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
                        <span>Learn more at</span>
                        <a
                            href="https://scaleopal.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-sky-600 hover:underline"
                        >
                            scaleopal.com →
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
