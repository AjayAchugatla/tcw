"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/films", label: "Films" },
        { href: "/cricket", label: "Cricket" },
    ];

    return (
        <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/80">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 transition hover:opacity-80">
                        <div className="grid size-9 place-items-center rounded-xl border border-black/10 bg-white text-black shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
                            <span className="text-sm font-semibold tracking-tight">TCW</span>
                        </div>
                        <div className="leading-tight">
                            <p className="text-sm font-semibold text-black dark:text-white">
                                Tollywood • Cricket
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`rounded-full px-4 py-2 text-sm font-medium transition ${pathname === link.href
                                    ? "bg-black/5 text-black dark:bg-white/10 dark:text-white"
                                    : "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="grid size-10 place-items-center rounded-xl border border-black/10 bg-white text-black transition hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 md:hidden"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <HiX className="text-xl" />
                        ) : (
                            <HiMenuAlt3 className="text-xl" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="border-t border-black/5 py-4 dark:border-white/10 md:hidden">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`rounded-xl px-4 py-3 text-sm font-medium transition ${pathname === link.href
                                        ? "bg-black/5 text-black dark:bg-white/10 dark:text-white"
                                        : "text-black/70 hover:bg-black/5 hover:text-black dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
