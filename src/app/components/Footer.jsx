import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
    const footerLinks = [
        { href: "/films", label: "Films" },
        { href: "/cricket", label: "Cricket" },
    ];

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/avadootharajesh/tcw",
            icon: <FaGithub className="text-lg" />
        },
    ];

    return (
        <footer className="border-t border-black/5 bg-white/50 backdrop-blur-sm dark:border-white/10 dark:bg-black/50">
            <div className="mx-auto max-w-6xl px-6 py-10">
                {/* Main Footer Content */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3">
                            <div className="grid size-10 place-items-center rounded-xl border border-black/10 bg-white text-black shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
                                <span className="text-sm font-semibold tracking-tight">TCW</span>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-black dark:text-white">
                                    Tollywood • Cricket
                                </p>
                                <p className="text-xs text-black/60 dark:text-white/60">
                                    Games for fans who know the details
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 max-w-sm text-sm text-black/70 dark:text-white/70">
                            Speed rounds. Know the deep cuts. Test your knowledge with fun quizzes and challenges.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-black dark:text-white">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-black/70 transition hover:text-black dark:text-white/70 dark:hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-black dark:text-white">
                            Contribute
                        </h3>
                        <div className="mt-4 flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    className="grid size-9 place-items-center rounded-xl border border-black/10 bg-white text-black/70 transition hover:bg-black/5 hover:text-black dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 border-t border-black/5 pt-8 dark:border-white/10">
                    <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-black/60 dark:text-white/60">
                            © {new Date().getFullYear()} TCW. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
