"use client";

import { useEffect, useRef, memo } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Raw SVGs for brand icons
const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
  {
    name: "Hayatudeen Bello",
    role: "Creative Director & UI/UX Strategist",
    bio: "Serving as Creative Director, Lead Developer, and UI/UX Strategist for the entire Unscripted Designs platform.",
    image: "/creator.jpg",
  },
];

const TeamCard = memo(function TeamCard({
  member,
}: {
  member: (typeof TEAM)[0];
}) {
  const router = useRouter();
  return (
    <div 
      onClick={() => router.push("/about")}
      className="team-card cursor-pointer group relative ring-1 ring-white/10 rounded-2xl overflow-hidden hover:ring-accent transition-all duration-500"
    >
      <div className="team-card-image relative aspect-[4/5] w-full transition-transform duration-700 group-hover:scale-105">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top"
          unoptimized
        />
      </div>
      <div className="team-card-overlay p-6 bg-black/80 backdrop-blur-md absolute bottom-0 left-0 right-0 border-t border-white/10 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
        <h3
          className="text-xl font-bold text-text mb-1"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {member.name}
        </h3>
        <p className="mb-3 text-xs uppercase tracking-widest font-mono text-accent">{member.role}</p>
        <p className="text-sm leading-relaxed text-text/60 mb-5">{member.bio}</p>
        <div className="team-card-socials flex gap-4">
          <a 
            href="https://www.instagram.com/man_like_hayat?igsh=bzM2NmEydWsxcGZm" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()}
            className="team-social-icon text-text/50 hover:text-accent transition-colors" 
            aria-label="Instagram"
          >
            <InstagramIcon size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/man1ikehayat?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()}
            className="team-social-icon text-text/50 hover:text-accent transition-colors" 
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a 
            href="mailto:Hayatudeen.m.bello@gmail.com" 
            onClick={(e) => e.stopPropagation()}
            className="team-social-icon text-text/50 hover:text-accent transition-colors" 
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
});

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!leftColRef.current || !rightColRef.current || !sectionRef.current) return;

    const leftBlocks = leftColRef.current.querySelectorAll(".about-block");
    const rightContent = rightColRef.current.querySelectorAll(".right-content");

    const ctx = gsap.context(() => {
      // Animate the left text blocks
      gsap.from(leftBlocks, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Animate the right creator card
      gsap.from(rightContent, {
        opacity: 0,
        x: 40,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="skew-section py-24 md:py-32 lg:py-40 bg-[#050505] relative overflow-hidden"
    >
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute top-0 -right-1/4 h-[800px] w-[800px] rounded-full bg-accent/5 blur-[200px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: THE WRITE UP */}
          <div ref={leftColRef} className="flex flex-col gap-12 lg:pt-10">
            
            <div className="about-block">
              <h2 className="text-2xl font-bold uppercase tracking-wide md:text-3xl text-text mb-4 flex items-center gap-4" style={{ fontFamily: "var(--font-heading)" }}>
                <span className="w-8 h-[2px] bg-accent inline-block"></span>
                About Unscripted Designs
              </h2>
              <p className="text-text/70 leading-relaxed md:text-lg pl-12 border-l border-white/5">
                Unscripted Designs is a digital-first creative practice at the intersection of design excellence and emerging technology. Founded on the principle that truly exceptional work happens when strategy, aesthetic precision, and innovation converge, we deliver bespoke digital solutions for brands and organizations that refuse compromise.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: MEET THE CREATOR */}
          <div ref={rightColRef} className="lg:pl-10">
            <div className="sticky top-32 flex flex-col items-start right-content">
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent font-mono right-content"
              >
                The Visionary
              </p>
              <h2
                className="text-4xl font-bold md:text-5xl mb-10 right-content"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Meet the Creator
              </h2>

              <div className="w-full max-w-sm right-content group">
                {TEAM.map((member) => (
                  <TeamCard key={member.name} member={member} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
