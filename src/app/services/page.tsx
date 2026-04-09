"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PenTool, Fingerprint, Code2, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    title: "Product Design & UI/UX",
    description: "Premium digital product design combining user research, interaction design, and visual excellence. We craft intuitive, beautiful interfaces that drive engagement and achieve business objectives.",
    icon: PenTool,
  },
  {
    title: "Brand Identity & Strategy",
    description: "Comprehensive brand development including strategy, logo design, visual systems, typography, color palettes, brand voice, and extensive brand guidelines. We create distinctive identities that resonate and differentiate.",
    icon: Fingerprint,
  },
  {
    title: "Web Design & Development",
    description: "Custom web experiences built with modern technology (Next.js, React, Tailwind CSS). From responsive design to advanced animations and performance optimization, we create websites that convert.",
    icon: Code2,
  },
  {
    title: "AI Automation & Prompt Engineering",
    description: "Specialized AI solutions including prompt engineering, workflow automation, custom AI tools, knowledge base integration, and intelligent systems that streamline operations and unlock new capabilities.",
    icon: Sparkles,
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Text Reveal
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
      });

      // Cards Staggered Fade Up
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".service-card");
        gsap.from(cards, {
          opacity: 0,
          y: 60,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.4,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="skew-section min-h-screen pt-40 pb-32 relative overflow-hidden" 
      style={{ background: "#050505" }}
    >
      
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute top-0 -left-1/4 h-[800px] w-[800px] rounded-full bg-accent/5 blur-[200px]" />
      <div className="pointer-events-none absolute bottom-0 -right-1/4 h-[600px] w-[600px] rounded-full bg-secondary/5 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex flex-col gap-16 md:gap-24">
        
        {/* Header Section */}
        <div className="mt-12 md:mt-24 max-w-4xl">
          <p className="reveal-text mb-6 text-sm font-medium uppercase tracking-[0.3em] text-accent font-mono">
            Our Offerings
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight uppercase md:text-7xl lg:text-[8rem] mb-10" style={{ fontFamily: "var(--font-display)" }}>
            <div className="overflow-hidden h-[1.1em]"><span className="reveal-text inline-block">Premium</span></div>
            <div className="overflow-hidden h-[1.1em]"><span className="reveal-text inline-block text-accent">Services.</span></div>
          </h1>
          <div className="overflow-hidden max-w-2xl">
            <p className="reveal-text text-white/80 leading-relaxed md:text-xl">
              We deliver bespoke digital solutions for brands and organizations that refuse compromise. Every service is tailored to elevate your business and separate you from the noise.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="service-card group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 p-8 md:p-12 transition-all duration-500 hover:bg-white/[0.05] hover:border-accent/40"
              >
                {/* Subtle Hover Gradient Inside Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-black border border-white/10 text-accent shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon strokeWidth={1.5} size={32} />
                  </div>
                  
                  <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed text-sm md:text-base flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Decorative line matching branding */}
                  <div className="mt-10 h-[2px] w-12 bg-white/10 transition-all duration-500 group-hover:w-full group-hover:bg-accent/50" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 overflow-hidden flex flex-col items-center justify-center text-center p-12 lg:p-24 rounded-3xl border border-white/10 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5" />
          <h2 className="reveal-text text-3xl md:text-5xl font-bold mb-6 relative z-10 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Ready to elevate your brand?
          </h2>
          <p className="reveal-text text-white/50 max-w-xl mx-auto mb-10 relative z-10">
            Let&apos;s collaborate to build something extraordinary. We only take on projects where we can deliver uncompromising excellence.
          </p>
          <div className="reveal-text relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:scale-105 hover:bg-secondary"
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
