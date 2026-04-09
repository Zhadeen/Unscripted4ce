"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCE = [
  {
    company: "Unscripted Designs",
    role: "Founder & Creative Director",
    period: "2023 - Present",
    description: "Leading the creative vision and strategic direction for a high-end digital design agency. Specializing in immersive web experiences and brand storytelling.",
  },
  {
    company: "YMY Consultancy",
    role: "Lead UI/UX Strategist",
    period: "2022 - 2023",
    description: "Architected the user experience for a global tour guide booking platform. Focused on conversion optimization and premium aesthetic alignment.",
  },
  {
    company: "Freelance Designer",
    role: "UI/UX & Motion Designer",
    period: "2020 - 2022",
    description: "Collaborated with international clients to build bespoke digital products and motion graphics that drive engagement.",
  },
];

const SKILLS = [
  { category: "Design", items: ["Art Direction", "UI/UX Design", "Brand Identity", "Motion Design", "Visual Storytelling"] },
  { category: "Tech", items: ["React / Next.js", "GSAP / Framer Motion", "Tailwind CSS", "TypeScript", "Node.js"] },
  { category: "Tools", items: ["Figma", "Adobe CC", "After Effects", "Cinema 4D", "VS Code"] },
];

export default function ResumePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".resume-hero > *", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });

      // Experience Animation
      gsap.utils.toArray<HTMLElement>(".exp-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      });

      // Skills Animation
      gsap.from(".skill-group", {
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pb-32">
      {/* Background Decor */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]" />
      <div className="pointer-events-none fixed left-0 top-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-12 md:pt-24 lg:px-8">
        
        {/* Back Button */}
        <Link 
          href="/"
          className="group mb-12 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-text/40 transition-colors hover:text-accent"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Hero */}
        <header className="resume-hero mb-24">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent" style={{ fontFamily: "var(--font-heading)" }}>
            Creative Director & UI/UX Strategist
          </p>
          <h1 
            className="mb-8 text-6xl font-extrabold tracking-tight md:text-8xl lg:text-9xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            RESUME<span className="text-accent">.</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-text/60 md:text-xl">
            A multidisciplinary designer and strategist specializing in crafting high-end digital experiences 
            that bridge the gap between human intuition and technical excellence.
          </p>
        </header>

        {/* Experience Section */}
        <section className="mb-32">
          <h2 
            className="mb-12 text-sm font-bold uppercase tracking-[0.4em] text-text/30"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Experience
          </h2>
          <div className="space-y-16">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="exp-item relative pl-8 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-accent/40">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                  <h3 className="text-2xl font-bold text-text" style={{ fontFamily: "var(--font-heading)" }}>{exp.role}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent" style={{ fontFamily: "var(--font-mono)" }}>{exp.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium uppercase tracking-wider text-text/40" style={{ fontFamily: "var(--font-body)" }}>{exp.company}</p>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-text/60">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section mb-32">
          <h2 
            className="mb-12 text-sm font-bold uppercase tracking-[0.4em] text-text/30"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Expertise
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {SKILLS.map((group, i) => (
              <div key={i} className="skill-group p-8 border border-white/5 rounded-2xl bg-white/[0.02]">
                <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-accent" style={{ fontFamily: "var(--font-mono)" }}>{group.category}</h3>
                <ul className="space-y-3">
                  {group.items.map((skill, si) => (
                    <li key={si} className="text-base text-text/60">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Actions */}
        <footer className="flex flex-wrap items-center gap-8 border-t border-white/5 pt-12">
          <a
            href="/resume.pdf"
            target="_blank"
            className="group flex items-center gap-3 text-lg font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="border-b-[2px] border-accent transition-all group-hover:pr-4">Download PDF</span>
            <Download size={20} className="text-accent transition-transform group-hover:translate-y-1" />
          </a>
          
          <a
            href="mailto:Hayatudeen.m.bello@gmail.com"
            className="group flex items-center gap-3 text-lg font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="border-b-[2px] border-transparent transition-all group-hover:border-accent">Get in Touch</span>
            <ExternalLink size={20} className="text-text/30 transition-all group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </footer>
      </div>
    </div>
  );
}
