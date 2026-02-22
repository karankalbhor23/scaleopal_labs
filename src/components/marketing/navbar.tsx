"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/data";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mt-4 flex h-16 items-center justify-between rounded-2xl border border-slate-100 bg-white/80 px-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl">
                    <Link href="/" className="flex items-center group">
                        <Logo height={36} className="transition-transform group-hover:scale-110" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTAs */}
                    <div className="hidden items-center gap-3 md:flex">
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/schools">Partner with Us</Link>
                        </Button>
                        <Button
                            size="sm"
                            className="bg-sky-500 text-white hover:bg-sky-600"
                            asChild
                        >
                            <Link href="/summer-camp">Enroll Now</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-lg backdrop-blur-xl md:hidden"
                        >
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="my-2 h-px bg-slate-200" />
                                <Button
                                    variant="ghost"
                                    className="justify-start"
                                    asChild
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Link href="/schools">Partner with Us</Link>
                                </Button>
                                <Button
                                    className="bg-sky-500 text-white hover:bg-sky-600"
                                    asChild
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Link href="#summer-camp">Enroll Now</Link>
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
