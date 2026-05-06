'use client'
import Link from "next/link";

// 1. Define an interface for your props
interface ButtonProps {
    text: string;
    href: string;
    className?: string; // The '?' makes it optional
}

// 2. Apply the interface to the component
export default function ButtonUi({ text, href, className = "" }: ButtonProps) {
    return (
        <Link 
            href={href}
            className={`bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-full transition-colors shadow-lg shadow-red-500/50 inline-block ${className}`}
        >
            {text}
        </Link>
    );
}