"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, Phone, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
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
      
      gsap.from(".reveal-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const CONTACT_INFO = [
    {
      label: "Email",
      value: "Hayatudeen.m.bello@gmail.com",
      href: "mailto:Hayatudeen.m.bello@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "+234 810 644 5799",
      href: "tel:+2348106445799",
      icon: Phone,
    },
    {
      label: "Instagram",
      value: "@man_like_hayat",
      href: "https://www.instagram.com/man_like_hayat?igsh=bzM2NmEydWsxcGZm",
      icon: Instagram,
    },
    {
      label: "LinkedIn",
      value: "Hayatudeen Bello",
      href: "https://www.linkedin.com/in/man1ikehayat?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: Linkedin,
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-24 overflow-hidden relative" style={{ background: "#0a0a0a" }}>
      
      {/* Decorative Blur */}
      <div className="pointer-events-none absolute top-1/4 right-0 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/4 rounded-full bg-accent/5 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/4 rounded-full bg-secondary/5 blur-[120px]" />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 mt-12 md:mt-24">
          <p className="reveal-text mb-6 text-sm font-medium uppercase tracking-[0.3em] text-accent font-mono">
            Start a Project
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight uppercase md:text-7xl lg:text-[7.5rem]" style={{ fontFamily: "var(--font-display)" }}>
            <div className="overflow-hidden"><span className="reveal-text inline-block">Let us bring</span></div>
            <div className="overflow-hidden"><span className="reveal-text inline-block">your idea</span></div>
            <div className="overflow-hidden"><span className="reveal-text inline-block text-accent">to live.</span></div>
          </h1>
        </div>

        {/* Contact Grid Section */}
        <div className="grid gap-16 lg:grid-cols-[1fr_400px] lg:gap-24">
          <div className="flex flex-col gap-6">
            {CONTACT_INFO.map((info, idx) => (
              <a 
                key={idx}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="reveal-item group flex items-center justify-between border-b border-white/10 pb-6 transition-colors hover:border-accent"
              >
                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-[#0a0a0a]">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text/50 font-mono mb-1">{info.label}</p>
                    <p className="text-lg md:text-xl font-medium tracking-wide transition-colors group-hover:text-accent">{info.value}</p>
                  </div>
                </div>
                <ArrowUpRight size={32} className="text-text/30 transition-all duration-300 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            ))}
          </div>

          <div className="reveal-item flex flex-col justify-end h-full">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:p-10 relative overflow-hidden">
               {/* Micro aesthetic element */}
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary" />
               
               <h3 className="mb-6 text-2xl font-bold uppercase tracking-wide mt-2" style={{ fontFamily: "var(--font-heading)" }}>Ready to collaborate?</h3>
               <p className="mb-10 text-text/70 leading-relaxed max-w-sm">
                 Whether you have a fully fledged concept or just a spark of an idea, we&apos;re here to help you scale it beautifully. 
                 Reach out through any of the channels and let&apos;s craft something uncompromising.
               </p>
               <a 
                href="mailto:Hayatudeen.m.bello@gmail.com" 
                className="hero-cta w-full justify-center"
              >
                <span>Send an Email</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
