import Link from "next/link";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { siteConfig, footer } from "@/lib/data";
import { Logo, Wordmark } from "@/components/ui/logo";

const socialIcons: Record<string, React.ReactNode> = {
    LinkedIn: <Linkedin className="h-5 w-5" />,
    Instagram: <Instagram className="h-5 w-5" />,
    YouTube: <Youtube className="h-5 w-5" />,
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white py-16 text-slate-600 border-t border-slate-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3">
                            <Logo size={48} className="drop-shadow-sm" />
                            <div>
                                <span className="block text-xl font-bold tracking-tight text-slate-900 leading-none">
                                    Scaleopal <span className="text-sky-600">Labs</span>
                                </span>
                                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600">
                                    A Scaleopal Initiative
                                </span>
                            </div>
                        </div>
                        <p className="mt-6 max-w-md text-sm leading-relaxed font-medium text-slate-500">
                            {footer.tagline}
                        </p>
                        <p className="mt-4 text-sm font-medium">{siteConfig.address}</p>
                        <p className="mt-2 text-sm font-semibold">
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="text-sky-600 hover:text-sky-700"
                            >
                                {siteConfig.email}
                            </a>
                            {" · "}
                            <a href={`tel:${siteConfig.phone}`} className="text-sky-600 hover:text-sky-700">
                                {siteConfig.phone}
                            </a>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">
                            Programs
                        </h4>
                        <ul className="space-y-3 text-sm font-medium">
                            <li>
                                <Link href="/summer-camp" className="hover:text-sky-600 transition-colors">
                                    Summer Camp 2026
                                </Link>
                            </li>
                            <li>
                                <Link href="#schools" className="hover:text-sky-600 transition-colors">
                                    School Partnerships
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="hover:text-sky-600 transition-colors">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">
                            Legal
                        </h4>
                        <ul className="space-y-3 text-sm font-medium">
                            {footer.links.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-sky-600 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator className="my-10 bg-slate-100" />

                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    {/* Copyright & Entity Info */}
                    <div className="flex flex-col items-center sm:items-start gap-1">
                        <p className="text-sm font-bold text-slate-900">
                            &copy; {currentYear} Scaleopal Labs. All rights reserved.
                        </p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            Scaleopal Labs is an educational initiative of <a href="https://scaleopal.com" target="_blank" className="text-sky-600 hover:underline">Scaleopal</a>.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {footer.social.map((social) => (
                            <a
                                key={social.platform}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all hover:bg-sky-100 hover:text-sky-600 shadow-sm"
                                aria-label={social.platform}
                            >
                                {socialIcons[social.platform]}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
