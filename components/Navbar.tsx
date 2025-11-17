'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const sections = ['home', 'services', 'about', 'skills' , 'portfolio', 'contact'];

function useActiveSection() {
    const [active, setActive] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollY + 100) {
                    setActive(id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return active;
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const activeSection = useActiveSection();

    const handleLinkClick = () => setIsOpen(false);

    const navLinkClass = (item: string) =>
        `relative px-4 py-2 transition duration-300 ${
            activeSection === item
                ? 'text-purple-500'
                : 'text-blue-500 hover:text-purple-500'
        } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-500 ${
            activeSection === item ? 'after:w-full' : 'hover:after:w-full'
        }`;

    return (
        <nav className="fixed w-full z-50 animate-fade-in-down font-poppins">
            <div className="backdrop-blur-sm  px-6 py-6 shadow-md transition-all duration-300">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    {/* Logo */}
                        <Image src="/logo.png" alt="Logo" width={55} height={55} />
                    {/* Menu desktop */}
                    <div className="hidden md:flex space-x-12 text-lg font-semibold tracking-wide">
                        {sections.map((item) => (
                            <a key={item} href={`#${item}`} className={navLinkClass(item)}>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        ))}
                    </div>

                    {/* Bouton menu mobile */}
                    <button
                        className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        <svg
                            className="h-7 w-7 text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Menu mobile */}
                {isOpen && (
                    <div className="md:hidden mt-4 backdrop-blur-md space-y-2 text-lg font-semibold animate-fade-in">
                        {sections.map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="block px-4 py-2 text-blue-500 hover:text-purple-500 hover:bg-white/10 rounded-lg transition-colors duration-300"
                                onClick={handleLinkClick}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
