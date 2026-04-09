"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
      });

      gsap.from(".about-block", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-32 relative overflow-hidden" style={{ background: "#050505" }}>
      
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute top-0 -right-1/4 h-[800px] w-[800px] rounded-full bg-accent/5 blur-[200px]" />
      <div className="pointer-events-none absolute bottom-0 -left-1/4 h-[600px] w-[600px] rounded-full bg-secondary/5 blur-[150px]" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10 flex flex-col gap-16 md:gap-24">
        
        {/* Header Section */}
        <div className="mb-8 mt-12 md:mt-24">
          <p className="reveal-text mb-6 text-sm font-medium uppercase tracking-[0.3em] text-accent font-mono">
            Our Story
          </p>
          <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.05em] uppercase md:text-7xl lg:text-[10rem]" style={{ fontFamily: "var(--font-display)" }}>
            <div className="overflow-hidden h-auto py-2"><span className="reveal-text inline-block">Unscripted</span></div>
            <div className="overflow-hidden h-auto py-2"><span className="reveal-text inline-block text-accent">Designs.</span></div>
          </h1>
        </div>

        {/* Content Blocks */}
        <div className="flex flex-col gap-16 md:gap-20">
          <div className="about-block">
            <h2 className="text-3xl font-black uppercase tracking-[-0.05em] leading-[0.9] md:text-5xl text-text mb-8 flex items-center gap-4" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="w-8 h-[2px] bg-accent inline-block"></span>
              About Unscripted Designs
            </h2>
            <p className="text-text/70 leading-relaxed md:text-lg pl-12 border-l border-white/5">
              Unscripted Designs is a digital-first creative practice at the intersection of design excellence and emerging technology. Founded on the principle that truly exceptional work happens when strategy, aesthetic precision, and innovation converge, we deliver bespoke digital solutions for brands and organizations that refuse compromise.
            </p>
          </div>

          <div className="about-block">
            <h2 className="text-3xl font-black uppercase tracking-[-0.05em] leading-[0.9] md:text-5xl text-text mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              What We Do
            </h2>
            <p className="text-text/70 leading-relaxed md:text-lg">
              We specialize in Product Design & Brand Strategy, UI/UX Design, Web Design, and AI-driven Automation & Prompt Engineering. Our work spans digital products, brand identities, and custom web experiences, each crafted with meticulous attention to detail and a deep understanding of how design influences user behavior and business outcomes.
            </p>
          </div>

          <div className="about-block">
            <h2 className="text-3xl font-black uppercase tracking-[-0.05em] leading-[0.9] md:text-5xl text-text mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              Our Approach
            </h2>
            <p className="text-text/70 leading-relaxed md:text-lg">
              Our methodology is unscripted. Rather than applying templates or formulaic processes, we approach each project with fresh eyes and rigorous thinking. We believe that premium design is born from understanding—understanding your audience, your competitive landscape, your brand&apos;s unique voice, and the role design plays in your broader business strategy. Every project is bespoke. Every decision is intentional.
            </p>
          </div>

          <div className="about-block">
            <h2 className="text-3xl font-black uppercase tracking-[-0.05em] leading-[0.9] md:text-5xl text-text mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              Who We Work With
            </h2>
            <p className="text-text/70 leading-relaxed md:text-lg">
              We partner with forward-thinking founders, innovative consultancies, and organizations that recognize design as a competitive advantage, not an afterthought. Our ideal clients are those who understand that excellence has a cost, and that cost is worth paying.
            </p>
          </div>

          <div className="about-block">
            <h2 className="text-3xl font-black uppercase tracking-[-0.05em] leading-[0.9] md:text-5xl text-text mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              The Platform
            </h2>
             <p className="text-text/70 leading-relaxed md:text-lg">
              This very platform is a reflection of our work. Built with cutting-edge technologies and animated with precision, it serves as both our creative showcase and our living resume—a demonstration that we practice what we preach. It&apos;s our digital business card, and it speaks volumes before a single conversation begins.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
