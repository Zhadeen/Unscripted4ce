"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);

    if (pathname !== "/") {
      router.push("/" + href);
      return;
    }

    setActiveLink(href);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "nav-scrolled" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                handleLinkClick("#hero");
              }
            }}
            className="font-heading text-xl font-bold tracking-wider"
          >
            <div className="flex flex-col leading-tight">
              <span>UNSCRiPTED</span>
              <span className="text-xs tracking-[0.4em] text-accent/80 md:text-sm">DESiGNS.</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={cn(
                  "nav-link",
                  pathname === "/" && activeLink === link.href && "active"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA & Resume */}
          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="/resume"
              className={cn(
                "text-sm font-medium uppercase tracking-widest transition-colors hover:text-accent font-mono",
                pathname === "/resume" ? "text-accent" : "text-text/60"
              )}
            >
              Resume
            </Link>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="hero-cta"
            >
              <span>Start a Project</span>
              <ArrowRight size={16} className="hero-cta-arrow" />
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className={cn(
              "flex flex-col gap-[6px] lg:hidden z-[100] relative",
              menuOpen && "hamburger-open"
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn("mobile-menu", menuOpen && "open")}>
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(link.href);
            }}
            className="mobile-menu-link"
            style={{ transitionDelay: menuOpen ? `${i * 0.1}s` : "0s" }}
          >
            {link.label}
          </a>
        ))}
        <Link
          href="/resume"
          onClick={() => setMenuOpen(false)}
          className={cn(
            "mobile-menu-link mt-4",
            pathname === "/resume" ? "text-accent" : "text-text"
          )}
          style={{ transitionDelay: menuOpen ? `${NAV_LINKS.length * 0.1}s` : "0s" }}
        >
          Resume
        </Link>
      </div>
    </>
  );
}
