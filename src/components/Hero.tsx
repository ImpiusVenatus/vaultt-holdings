"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
    // Hero section refs
    const heroSubtitleRef = useRef<HTMLHeadingElement>(null);
    const heroTitleRef = useRef<HTMLHeadingElement>(null);
    const heroGradientRef = useRef<HTMLDivElement>(null);
    const heroContentRef = useRef<HTMLDivElement>(null);
    const heroPointsRef = useRef<HTMLDivElement[]>([]);

    // Independence section refs
    const independenceHeadingRef = useRef<HTMLHeadingElement>(null);
    const independenceIconRef = useRef<HTMLDivElement>(null);
    const independenceCardTitleRef = useRef<HTMLHeadingElement>(null);
    const independenceCardTextRef = useRef<HTMLParagraphElement>(null);

    // Unconventional section refs
    const unconventionalHeadingRef = useRef<HTMLHeadingElement>(null);
    const unconventionalIconRef = useRef<HTMLDivElement>(null);
    const unconventionalCardTitleRef = useRef<HTMLHeadingElement>(null);
    const unconventionalCardTextRef = useRef<HTMLParagraphElement>(null);

    // Expertise section refs
    const expertiseHeadingRef = useRef<HTMLHeadingElement>(null);
    const expertiseIconRef = useRef<HTMLDivElement>(null);
    const expertiseCardTitleRef = useRef<HTMLHeadingElement>(null);
    const expertiseCardTextRef = useRef<HTMLParagraphElement>(null);

    // Engagement section refs
    const engagementHeadingRef = useRef<HTMLHeadingElement>(null);
    const engagementIconRef = useRef<HTMLDivElement>(null);
    const engagementCardTitleRef = useRef<HTMLHeadingElement>(null);
    const engagementCardTextRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        // Hero section animations
        if (heroSubtitleRef.current) {
            gsap.from(heroSubtitleRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out",
            });
        }

        if (heroTitleRef.current) {
            gsap.from(heroTitleRef.current, {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power3.out",
                delay: 0.2,
            });
        }

        // Animate content points with smooth entry effects
        if (heroPointsRef.current.length > 0) {
            heroPointsRef.current.forEach((card, index) => {
                if (card) {
                    // Set initial hidden state
                    gsap.set(card, {
                        opacity: 0,
                        y: 60,
                        scale: 0.85
                    });

                    // Entry animation with stagger
                    gsap.to(card, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.9,
                        ease: "power3.out",
                        delay: 0.4 + (index * 0.12),
                    });
                }
            });
        }

        // Independence section
        if (independenceHeadingRef.current) {
            gsap.from(independenceHeadingRef.current, {
                opacity: 0,
                x: -50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: independenceHeadingRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        if (independenceIconRef.current) {
            gsap.from(independenceIconRef.current, {
                opacity: 0,
                scale: 0.8,
                rotation: -180,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: independenceIconRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        if (independenceCardTitleRef.current) {
            gsap.from(independenceCardTitleRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: independenceCardTitleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        if (independenceCardTextRef.current) {
            gsap.from(independenceCardTextRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: independenceCardTextRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        // Unconventional section
        if (unconventionalHeadingRef.current) {
            gsap.from(unconventionalHeadingRef.current, {
                opacity: 0,
                x: -50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: unconventionalHeadingRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        if (unconventionalIconRef.current) {
            gsap.from(unconventionalIconRef.current, {
                opacity: 0,
                scale: 0.8,
                rotation: -180,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: unconventionalIconRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        if (unconventionalCardTitleRef.current) {
            gsap.from(unconventionalCardTitleRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: unconventionalCardTitleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        if (unconventionalCardTextRef.current) {
            gsap.from(unconventionalCardTextRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: unconventionalCardTextRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        // Expertise section
        if (expertiseHeadingRef.current) {
            gsap.from(expertiseHeadingRef.current, {
                opacity: 0,
                x: -50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: expertiseHeadingRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        if (expertiseIconRef.current) {
            gsap.from(expertiseIconRef.current, {
                opacity: 0,
                scale: 0.8,
                rotation: -180,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: expertiseIconRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        if (expertiseCardTitleRef.current) {
            gsap.from(expertiseCardTitleRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: expertiseCardTitleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        if (expertiseCardTextRef.current) {
            gsap.from(expertiseCardTextRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: expertiseCardTextRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        // Engagement section
        if (engagementHeadingRef.current) {
            gsap.from(engagementHeadingRef.current, {
                opacity: 0,
                x: -50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: engagementHeadingRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        if (engagementIconRef.current) {
            gsap.from(engagementIconRef.current, {
                opacity: 0,
                scale: 0.8,
                rotation: -180,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: engagementIconRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        if (engagementCardTitleRef.current) {
            gsap.from(engagementCardTitleRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: engagementCardTitleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        if (engagementCardTextRef.current) {
            gsap.from(engagementCardTextRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: engagementCardTextRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col md:flex-row">
                {/* Left Side */}
                <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-6 md:px-8 lg:px-16 py-12 md:py-0">
                    <div className="space-y-4 max-w-2xl md:max-w-none">
                        <h2 ref={heroSubtitleRef} className="text-xl md:text-2xl lg:text-3xl font-medium text-[#8B6FA8]">
                            Gresham Partners
                        </h2>
                        <h1 ref={heroTitleRef} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2D2D2D] leading-tight">
                            A different approach to managing wealth.
                        </h1>
                    </div>
                </div>

                {/* Right Side */}
                <div ref={heroGradientRef} className="w-full md:w-1/2 bg-white flex items-center justify-center px-6 md:px-8 lg:px-16 py-8 md:py-0">
                    {/* Content - 4 Styled Points */}
                    <div className="relative w-full max-w-2xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {/* Point 1 - Wealth Preservation */}
                            <div
                                ref={(el) => { if (el) heroPointsRef.current[0] = el; }}
                                className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-gray-200 overflow-hidden"
                                style={{ zIndex: 50, opacity: 1 }}
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#B8A5D1]/20 to-transparent rounded-bl-full"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#B8A5D1] to-[#8B6FA8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold text-[#2D2D2D] mb-2 group-hover:text-[#5C40D4] transition-colors">
                                        Wealth Preservation
                                    </h4>
                                    <p className="text-sm md:text-base text-[#666] leading-relaxed">
                                        Protecting your capital while growing your legacy
                                    </p>
                                </div>
                            </div>

                            {/* Point 2 - Strategic Growth */}
                            <div
                                ref={(el) => { if (el) heroPointsRef.current[1] = el; }}
                                className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-gray-200 overflow-hidden"
                                style={{ zIndex: 50, opacity: 1 }}
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#9DD4E8]/20 to-transparent rounded-bl-full"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#9DD4E8] to-[#4A9A9F] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold text-[#2D2D2D] mb-2 group-hover:text-[#5C40D4] transition-colors">
                                        Strategic Growth
                                    </h4>
                                    <p className="text-sm md:text-base text-[#666] leading-relaxed">
                                        Long-term strategies that compound over generations
                                    </p>
                                </div>
                            </div>

                            {/* Point 3 - Family Legacy */}
                            <div
                                ref={(el) => { if (el) heroPointsRef.current[2] = el; }}
                                className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-gray-200 overflow-hidden"
                                style={{ zIndex: 50, opacity: 1 }}
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#4A9A9F]/20 to-transparent rounded-bl-full"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#4A9A9F] to-[#2D7A7F] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold text-[#2D2D2D] mb-2 group-hover:text-[#5C40D4] transition-colors">
                                        Family Legacy
                                    </h4>
                                    <p className="text-sm md:text-base text-[#666] leading-relaxed">
                                        Multi-generational planning for lasting impact
                                    </p>
                                </div>
                            </div>

                            {/* Point 4 - Peace of Mind */}
                            <div
                                ref={(el) => { if (el) heroPointsRef.current[3] = el; }}
                                className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-gray-200 overflow-hidden"
                                style={{ zIndex: 50, opacity: 1 }}
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D4B896]/20 to-transparent rounded-bl-full"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#D4B896] to-[#B8967A] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold text-[#2D2D2D] mb-2 group-hover:text-[#5C40D4] transition-colors">
                                        Peace of Mind
                                    </h4>
                                    <p className="text-sm md:text-base text-[#666] leading-relaxed">
                                        Simplify complexity so you can focus on what matters
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Independence Section */}
            <section className="min-h-screen flex flex-col md:flex-row">
                {/* Left Side */}
                <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-6 md:px-8 lg:px-16 py-12 md:py-0">
                    <div>
                        <h1 ref={independenceHeadingRef} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#2D2D2D] leading-tight">
                            Where<br />independence<br />leads.
                        </h1>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-1/2 bg-gradient-to-br from-[#E8E0F5] to-[#D4C5E8] flex items-center justify-center px-6 md:px-8 lg:px-16 py-12 md:py-0 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
                        <div className="transform -rotate-90">
                            <span className="text-[80px] md:text-[120px] lg:text-[150px] font-bold text-[#8B6FA8] whitespace-nowrap">INDEPENDENCE</span>
                        </div>
                    </div>
                    <div className="relative z-10 bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-lg">
                        <div ref={independenceIconRef} className="mb-6">
                            <svg width="48" height="48" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12">
                                <path d="M40 10 L50 30 L70 35 L55 50 L58 70 L40 60 L22 70 L25 50 L10 35 L30 30 Z" stroke="#5C40D4" strokeWidth="2" fill="none" />
                                <path d="M40 20 L47 35 L60 38 L50 48 L52 62 L40 55 L28 62 L30 48 L20 38 L33 35 Z" stroke="#5C40D4" strokeWidth="2" fill="none" opacity="0.8" />
                            </svg>
                        </div>
                        <h2 ref={independenceCardTitleRef} className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6">Independence</h2>
                        <p ref={independenceCardTextRef} className="text-base md:text-lg text-[#2D2D2D] leading-relaxed">
                            Our commitment to independence shapes everything we do. Free from external pressures and conflicts of interest, we make decisions solely in the best interests of our clients. This independence allows us to take a truly long-term perspective, invest with conviction, and deliver results that matter.
                        </p>
                    </div>
                </div>
            </section>

            {/* Unconventional Section */}
            <section className="min-h-screen flex flex-col md:flex-row">
                {/* Left Side */}
                <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-6 md:px-8 lg:px-16 py-12 md:py-0">
                    <div>
                        <h1 ref={unconventionalHeadingRef} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#2D2D2D] leading-tight">
                            Where<br />unconventional<br />wisdom wins.
                        </h1>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-1/2 bg-gradient-to-br from-[#E0E8F5] to-[#D4D8E8] flex items-center justify-center px-6 md:px-8 lg:px-16 py-12 md:py-0 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
                        <div className="transform -rotate-90">
                            <span className="text-[80px] md:text-[120px] lg:text-[150px] font-bold text-[#8B9FA8] whitespace-nowrap">UNCONVENTIONAL</span>
                        </div>
                    </div>
                    <div className="relative z-10 bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-lg">
                        <div ref={unconventionalIconRef} className="mb-6">
                            <svg width="48" height="48" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12">
                                <circle cx="40" cy="40" r="38" stroke="#5C40D4" strokeWidth="2" fill="#9DD4E8" fillOpacity="0.3" />
                                <path d="M40 10 L50 30 L70 35 L55 50 L58 70 L40 60 L22 70 L25 50 L10 35 L30 30 Z" stroke="#5C40D4" strokeWidth="2" fill="none" />
                                <path d="M40 20 L47 35 L60 38 L50 48 L52 62 L40 55 L28 62 L30 48 L20 38 L33 35 Z" stroke="#5C40D4" strokeWidth="2" fill="none" opacity="0.8" />
                            </svg>
                        </div>
                        <h2 ref={unconventionalCardTitleRef} className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6">Unconventional</h2>
                        <p ref={unconventionalCardTextRef} className="text-base md:text-lg text-[#2D2D2D] leading-relaxed">
                            We believe the investment industry's conventional approach to investment management is an outdated one. Instead of managing to benchmarks, we center our process on what's important to families: growing their wealth while protecting their capital. We work to identify uncommon investment themes that reject conventional wisdom.
                        </p>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="min-h-screen flex flex-col md:flex-row">
                {/* Left Side */}
                <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-6 md:px-8 lg:px-16 py-12 md:py-0">
                    <div>
                        <h1 ref={expertiseHeadingRef} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#2D2D2D] leading-tight">
                            Where<br />complexity<br />meets strategy.
                        </h1>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-1/2 bg-gradient-to-br from-[#E8E0F5] to-[#D4C5E8] flex items-center justify-center px-6 md:px-8 lg:px-16 py-12 md:py-0 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
                        <div className="transform -rotate-90">
                            <span className="text-[80px] md:text-[120px] lg:text-[150px] font-bold text-[#8B6FA8] whitespace-nowrap">EXPERTISE</span>
                        </div>
                    </div>
                    <div className="relative z-10 bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-lg">
                        <div ref={expertiseIconRef} className="mb-6">
                            <svg width="48" height="48" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12">
                                <path d="M40 10 L50 30 L70 35 L55 50 L58 70 L40 60 L22 70 L25 50 L10 35 L30 30 Z" stroke="#5C40D4" strokeWidth="2" fill="none" />
                                <path d="M40 20 L47 35 L60 38 L50 48 L52 62 L40 55 L28 62 L30 48 L20 38 L33 35 Z" stroke="#5C40D4" strokeWidth="2" fill="none" opacity="0.8" />
                            </svg>
                        </div>
                        <h2 ref={expertiseCardTitleRef} className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6">Expertise</h2>
                        <p ref={expertiseCardTextRef} className="text-base md:text-lg text-[#2D2D2D] leading-relaxed">
                            Our team brings decades of experience in investment management, wealth planning, and strategic advisory. We combine deep market knowledge with innovative thinking to navigate complex financial landscapes and deliver sophisticated solutions tailored to each client's unique needs and goals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Engagement Section */}
            <section className="min-h-screen flex flex-col md:flex-row">
                {/* Left Side */}
                <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-6 md:px-8 lg:px-16 py-12 md:py-0">
                    <div>
                        <h1 ref={engagementHeadingRef} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#2D2D2D] leading-tight">
                            Where burdens<br />are eased.
                        </h1>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-1/2 bg-gradient-to-br from-[#F5E8D4] to-[#E8D4C5] flex items-center justify-center px-6 md:px-8 lg:px-16 py-12 md:py-0 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
                        <div className="transform -rotate-90">
                            <span className="text-[80px] md:text-[120px] lg:text-[150px] font-bold text-[#A8968B] whitespace-nowrap">ENGAGEMENT</span>
                        </div>
                    </div>
                    <div className="relative z-10 bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-lg">
                        <div ref={engagementIconRef} className="mb-6">
                            <svg width="48" height="48" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12">
                                <path d="M40 10 L50 30 L70 35 L55 50 L58 70 L40 60 L22 70 L25 50 L10 35 L30 30 Z" stroke="#5C40D4" strokeWidth="2" fill="none" />
                                <path d="M40 20 L47 35 L60 38 L50 48 L52 62 L40 55 L28 62 L30 48 L20 38 L33 35 Z" stroke="#5C40D4" strokeWidth="2" fill="none" opacity="0.8" />
                            </svg>
                        </div>
                        <h2 ref={engagementCardTitleRef} className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6">Engagement</h2>
                        <p ref={engagementCardTextRef} className="text-base md:text-lg text-[#2D2D2D] leading-relaxed">
                            We understand that managing wealth involves more than just investment management. Our comprehensive approach includes wealth planning, reporting, and close collaboration with your advisors. We work to ease your burdens and simplify the complexities of wealth, allowing you to focus on what matters most to your family.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
