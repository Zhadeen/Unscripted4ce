"use client";

import { useEffect, useRef, memo } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail } from "lucide-react";

// Raw SVGs for brand icons removed from the lucide-react library
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
    name: "The Founder",
    role: "Creative Director & UI/UX Strategist",
    bio: "Serving as Creative Director, Lead Developer, and UI/UX Strategist for the entire YMY platform.",
    image: "/creator.jpg",
  },
];

const TeamCard = memo(function TeamCard({
  member,
}: {
  member: (typeof TEAM)[0];
}) {
  return (
    <div className="team-card">
      <div className="team-card-image">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top"
          unoptimized
        />
      </div>
      <div className="team-card-overlay">
        <h3
          className="text-xl font-bold text-text"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {member.name}
        </h3>
        <p className="mb-2 text-sm font-medium text-accent">{member.role}</p>
        <p className="text-sm leading-relaxed text-text/60">{member.bio}</p>
        <div className="team-card-socials">
          <a 
            href="https://www.instagram.com/man_like_hayat?igsh=bzM2NmEydWsxcGZm" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="team-social-icon" 
            aria-label="Instagram"
          >
            <InstagramIcon size={16} />
          </a>
          <a 
            href="https://www.linkedin.com/in/man1ikehayat?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="team-social-icon" 
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <a href="mailto:Hayatudeen.m.bello@gmail.com" className="team-social-icon" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </div>
  );
});

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current || !sectionRef.current) return;

    const cards = gridRef.current.querySelectorAll(".team-card");

    const ctx = gsap.context(() => {
      gsap.from(cards, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
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
      className="skew-section py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p
            className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-accent"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            The Team
          </p>
          <h2
            className="text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
            data-cursor="text"
          >
            Meet the Creator
          </h2>
        </div>

        <div
          ref={gridRef}
          className="mx-auto flex max-w-sm justify-center"
        >
          {TEAM.map((member) => (
            <div key={member.name} className="w-full">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
