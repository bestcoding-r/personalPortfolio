"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonUi from "./ui/Button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="lg:py-1 px-4 sm:px-6 lg:px-8 sticky top-0 z-50">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="flex-shrink-0">
                        <div className="lg:w-[140px] lg:h-[75px] w-24 h-16 relative">
                            <Image src="/images/logo.png" alt="logo" layout="fill" objectFit="contain" />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="relative text-white hover:text-red-500 transition-colors font-medium group py-2">
                                {link.label}
                                <span className="absolute -bottom-0 left-0 w-full h-[2px] bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Reusable Button - Desktop */}
                    <div className="hidden md:block">
                        <ButtonUi text="Get in Touch" href="/contact" />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            {isOpen ? (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-6">
                        <div className="flex flex-col items-center gap-y-6 bg-[#120404]/95 py-6 rounded-xl">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-white hover:text-red-500 transition-colors text-lg font-medium">
                                    {link.label}
                                </Link>
                            ))}
                            {/* Reusable Button - Mobile */}
                            <ButtonUi 
                                text="Get in Touch" 
                                href="/contact" 
                                className="py-2 px-4" // You can pass extra classes via props
                            />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}