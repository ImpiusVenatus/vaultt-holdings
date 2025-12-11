"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="w-full py-4 px-4 md:px-8 z-50 fixed top-0 left-0">
                {/* Gradient background with subtle patterns */}
                <div className="absolute inset-0 -z-10">
                    {/* Subtle geometric patterns in purple area */}
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 400 100"
                            preserveAspectRatio="none"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Abstract geometric patterns */}
                            <path
                                d="M50 20 L80 40 L60 60 L30 50 Z"
                                fill="#5C40D4"
                                opacity="0.3"
                            />
                            <path
                                d="M150 30 L180 50 L160 70 L130 60 Z"
                                fill="#5C40D4"
                                opacity="0.2"
                            />
                            <path
                                d="M250 10 L280 30 L260 50 L230 40 Z"
                                fill="#5C40D4"
                                opacity="0.25"
                            />
                            <path
                                d="M350 25 L380 45 L360 65 L330 55 Z"
                                fill="#5C40D4"
                                opacity="0.2"
                            />
                        </svg>
                    </div>
                </div>

                <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0">
                    {/* Left Navigation Container - Purple */}
                    <div className="flex items-center bg-[#5C40D4] rounded-2xl px-3 md:px-4 lg:px-6 py-2.5 md:py-3 lg:py-4 overflow-x-auto">
                        {/* Logo */}
                        <div className="mr-3 md:mr-4 lg:mr-6 flex-shrink-0">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 80 80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                            >
                                <path
                                    d="M40 10 L50 30 L70 35 L55 50 L58 70 L40 60 L22 70 L25 50 L10 35 L30 30 Z"
                                    fill="white"
                                />
                                <path
                                    d="M40 20 L47 35 L60 38 L50 48 L52 62 L40 55 L28 62 L30 48 L20 38 L33 35 Z"
                                    fill="white"
                                    opacity="0.8"
                                />
                            </svg>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 overflow-x-auto scrollbar-hide">
                            <a
                                href="#"
                                className="text-white text-xs sm:text-sm md:text-base font-medium whitespace-nowrap hover:opacity-80 transition-opacity"
                            >
                                How We Help
                            </a>
                            <a
                                href="#"
                                className="text-white text-xs sm:text-sm md:text-base font-medium whitespace-nowrap hover:opacity-80 transition-opacity"
                            >
                                Talent
                            </a>
                            <a
                                href="#"
                                className="text-white text-xs sm:text-sm md:text-base font-medium whitespace-nowrap hover:opacity-80 transition-opacity"
                            >
                                Insights
                            </a>
                            <a
                                href="/contact"
                                className="text-white text-xs sm:text-sm md:text-base font-medium whitespace-nowrap hover:opacity-80 transition-opacity"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                    {/* Right Navigation Container - White */}
                    <div className="flex items-center bg-white rounded-2xl px-3 md:px-4 lg:px-6 py-2.5 md:py-3 lg:py-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                        {/* Utility Links */}
                        <div className="hidden lg:flex items-center gap-4 md:gap-6">
                            <a
                                href="#"
                                className="text-[#2D2D2D] text-xs md:text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
                            >
                                CAREERS
                            </a>
                            <a
                                href="#"
                                className="text-[#2D2D2D] text-xs md:text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
                            >
                                NEWS & MEDIA
                            </a>
                            <a
                                href="#"
                                className="text-[#2D2D2D] text-xs md:text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity flex items-center gap-1"
                            >
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-3 h-3"
                                >
                                    <path
                                        d="M1 11L11 1M11 1H1M11 1V11"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                CLIENT PORTAL
                            </a>
                        </div>

                        {/* Hamburger Menu Icon */}
                        <motion.button
                            onClick={toggleMenu}
                            className="flex flex-col gap-1.5 p-1 cursor-pointer relative"
                            aria-label="Menu"
                            whileHover="hover"
                            initial="initial"
                        >
                            <motion.span
                                className="w-5 h-0.5 bg-[#2D2D2D] block"
                                variants={{
                                    initial: { y: 0 },
                                    hover: { y: -2 }
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            />
                            <motion.span
                                className="w-5 h-0.5 bg-[#2D2D2D] block"
                                variants={{
                                    initial: { y: 0 },
                                    hover: { y: 2 }
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            />
                        </motion.button>
                    </div>
                </div>
            </nav>

            {/* Full Screen Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-[#5C40D4] overflow-y-auto z-[9999]"
                    >
                        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-20">
                            {/* Close button */}
                            <button
                                onClick={toggleMenu}
                                className="absolute top-8 right-8 text-white text-4xl font-light hover:opacity-70 transition-opacity"
                                aria-label="Close menu"
                            >
                                ×
                            </button>

                            {/* Menu Content */}
                            <div className="flex flex-col items-center gap-8 md:gap-12">
                                <motion.a
                                    href="#"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-white text-3xl md:text-5xl font-medium hover:opacity-80 transition-opacity"
                                    onClick={toggleMenu}
                                >
                                    How We Help
                                </motion.a>
                                <motion.a
                                    href="#"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-white text-3xl md:text-5xl font-medium hover:opacity-80 transition-opacity"
                                    onClick={toggleMenu}
                                >
                                    Talent
                                </motion.a>
                                <motion.a
                                    href="#"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-white text-3xl md:text-5xl font-medium hover:opacity-80 transition-opacity"
                                    onClick={toggleMenu}
                                >
                                    Insights
                                </motion.a>
                                <motion.a
                                    href="/contact"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-white text-3xl md:text-5xl font-medium hover:opacity-80 transition-opacity"
                                    onClick={toggleMenu}
                                >
                                    Contact Us
                                </motion.a>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-8"
                                >
                                    <a
                                        href="#"
                                        className="text-white text-lg md:text-xl font-medium uppercase tracking-wide hover:opacity-80 transition-opacity"
                                        onClick={toggleMenu}
                                    >
                                        CAREERS
                                    </a>
                                    <a
                                        href="#"
                                        className="text-white text-lg md:text-xl font-medium uppercase tracking-wide hover:opacity-80 transition-opacity"
                                        onClick={toggleMenu}
                                    >
                                        NEWS & MEDIA
                                    </a>
                                    <a
                                        href="#"
                                        className="text-white text-lg md:text-xl font-medium uppercase tracking-wide hover:opacity-80 transition-opacity flex items-center gap-2"
                                        onClick={toggleMenu}
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 11L11 1M11 1H1M11 1V11"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        CLIENT PORTAL
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

