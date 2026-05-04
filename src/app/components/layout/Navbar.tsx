"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
                        <div className="lg:w-[140px] lg:h-[80px] w-24 h-16 relative">
                            <Image src="/images/logo.png" alt="logo" layout="fill" objectFit="contain"/>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="relative text-white hover:text-red-500 transition-colors font-medium group py-2">
                                {link.label}
                                <span className="absolute bottom-29 left-0 w-full h-[1.5px] bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-lg shadow-red-500/50">
                            Get in Touch
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            {isOpen ? (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-6">
                        <div className="flex flex-col items-center gap-y-6">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="relative text-white hover:text-red-500 transition-colors text-lg font-medium group py-2">
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                                </Link>
                            ))}
                            <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-lg shadow-red-500/50">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}