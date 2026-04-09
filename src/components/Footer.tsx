"use client";

import { useRef, useCallback } from "react";
import { Mail, ArrowRight } from "lucide-react";

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
import gsap from "gsap";

const FOOTER_COLUMNS = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/#hero" },
      { label: "Work", href: "/#work" },
      { label: "Services", href: "/#services" },
      { label: "Resume", href: "/resume" },
    ],
  },
  {
    title: "Expertise",
    links: [
      { label: "UI/UX Design", href: "#" },
      { label: "AI Automation", href: "#" },
      { label: "Prompt Engineering", href: "#" },
      { label: "Web Design", href: "#" },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/man1ikehayat" },
      { label: "Instagram", href: "https://www.instagram.com/man_like_hayat?igsh=bzM2NmEydWsxcGZm" },
      { label: "Email", href: "mailto:Hayatudeen.m.bello@gmail.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const SOCIAL_ICONS = [
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/man_like_hayat?igsh=bzM2NmEydWsxcGZm" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/man1ikehayat?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { icon: Mail, label: "Email", href: "mailto:Hayatudeen.m.bello@gmail.com" },
];

function MagneticIcon({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(ref.current, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="magnetic-icon"
      aria-label={label}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Icon size={20} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Top: columns + newsletter */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4
                className="mb-4 text-sm font-bold uppercase tracking-widest text-text"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4
              className="mb-4 text-sm font-bold uppercase tracking-widest text-text"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-text/50">
              Stay updated with our latest projects and insights.
            </p>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="newsletter-input"
                aria-label="Email address"
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/5" />

        {/* Bottom: social + copyright */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex gap-4">
            {SOCIAL_ICONS.map((s) => (
              <MagneticIcon key={s.label} icon={s.icon} label={s.label} href={s.href} />
            ))}
          </div>

          <div
            className="text-sm text-text/30"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <div className="flex flex-col items-center md:items-start leading-tight">
              <span className="font-heading font-bold text-text uppercase">UNSCRiPTED</span>
              <span className="text-[10px] tracking-[0.3em] text-accent uppercase font-bold">DESiGNS.</span>
              <span className="mt-2 text-[10px] text-text/30 font-mono tracking-normal">
                &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
