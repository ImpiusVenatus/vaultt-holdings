"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (footerRef.current) {
            const footer = footerRef.current;
            
            if (logoRef.current) {
                gsap.from(logoRef.current, {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footer,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                });
            }

            if (linksRef.current) {
                gsap.from(linksRef.current.children, {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: footer,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                });
            }

            if (contactRef.current) {
                gsap.from(contactRef.current, {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footer,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                });
            }

            if (bottomRef.current) {
                gsap.from(bottomRef.current, {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footer,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                });
            }
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <footer ref={footerRef} className="w-full bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1">
                        <div ref={logoRef} className="mb-6">
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 80 80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 mb-4"
                            >
                                <path
                                    d="M40 10 L50 30 L70 35 L55 50 L58 70 L40 60 L22 70 L25 50 L10 35 L30 30 Z"
                                    fill="#5C40D4"
                                />
                                <path
                                    d="M40 20 L47 35 L60 38 L50 48 L52 62 L40 55 L28 62 L30 48 L20 38 L33 35 Z"
                                    fill="#5C40D4"
                                    opacity="0.8"
                                />
                            </svg>
                            <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">Gresham Partners</h3>
                            <p className="text-sm text-[#666] leading-relaxed">
                                A different approach to managing wealth.
                            </p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div ref={linksRef} className="lg:col-span-1">
                        <h4 className="text-sm font-semibold text-[#2D2D2D] uppercase tracking-wide mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-[#666] hover:text-[#5C40D4] transition-colors duration-200 text-sm"
                                >
                                    How We Help
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#666] hover:text-[#5C40D4] transition-colors duration-200 text-sm"
                                >
                                    Talent
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#666] hover:text-[#5C40D4] transition-colors duration-200 text-sm"
                                >
                                    Insights
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#666] hover:text-[#5C40D4] transition-colors duration-200 text-sm"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-semibold text-[#2D2D2D] uppercase tracking-wide mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-[#666] hover:text-[#5C40D4] transition-colors duration-200 text-sm"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#666] hover:text-[#5C40D4] transition-colors duration-200 text-sm"
                                >
                                    News & Media
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#666] hover:text-[#5C40D4] transition-colors duration-200 text-sm"
                                >
                                    Client Portal
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#666] hover:text-[#5C40D4] transition-colors duration-200 text-sm"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div ref={contactRef} className="lg:col-span-1">
                        <h4 className="text-sm font-semibold text-[#2D2D2D] uppercase tracking-wide mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:info@greshampartners.com"
                                    className="text-[#666] hover:text-[#5C40D4] transition-colors duration-200 text-sm"
                                >
                                    info@greshampartners.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+1234567890"
                                    className="text-[#666] hover:text-[#5C40D4] transition-colors duration-200 text-sm"
                                >
                                    +1 (234) 567-8900
                                </a>
                            </li>
                            <li className="text-[#666] text-sm">
                                123 Financial District<br />
                                New York, NY 10004
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div ref={bottomRef} className="border-t border-gray-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-[#666]">
                            © {new Date().getFullYear()} Gresham Partners. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a
                                href="#"
                                className="text-[#666] hover:text-[#5C40D4] transition-colors duration-200"
                                aria-label="LinkedIn"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-[#666] hover:text-[#5C40D4] transition-colors duration-200"
                                aria-label="Twitter"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

