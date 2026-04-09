"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, Mail, Linkedin, MapPin, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

/* ─── DATA ──────────────────────────────────────────────────────────────────── */

const PROFILE = {
  name: "Hayatudeen Muazu Bello",
  title: "Product Designer (UI UX)",
  location: "FCT Abuja, Nigeria",
  phone: "+2348106445799",
  email: "hayatudeen.m.bello@gmail.com",
  linkedin: "https://linkedin.com/in/man1ikehayat",
  linkedinLabel: "linkedin.com/in/man1ikehayat",
  summary:
    "Dynamic and analytically-driven product designer and AI prompt engineer with 5+ years of experience in user experience design, product development, and creating impactful digital solutions. Passionate about leveraging design, data, and artificial intelligence to enhance user experiences and drive innovation. Skilled in crafting precise AI prompts to streamline workflows, accelerate prototyping, and unlock intelligent design solutions. Proven ability to thrive in fast-paced startup environments, bringing a strong entrepreneurial mindset to every project.",
};

const EXPERTISE = [
  {
    title: "UI/UX Design",
    desc: "Crafting user-friendly interfaces for web and mobile apps.",
  },
  {
    title: "Design Tools",
    desc: "Skilled in Figma, Canva, Photoshop, Adobe XD.",
  },
  {
    title: "Prototyping",
    desc: "Creating wireframes and high-fidelity mockups.",
  },
  {
    title: "User Research",
    desc: "Conducting research to enhance design usability.",
  },
  {
    title: "Visual Design",
    desc: "Delivering engaging and functional visual experiences.",
  },
  {
    title: "Collaboration",
    desc: "Partnering with teams for seamless design integration.",
  },
  {
    title: "Problem Solving",
    desc: "Turning complex ideas into effective design solutions.",
  },
  {
    title: "Project Launch",
    desc: "Driving projects that boost user engagement and retention.",
  },
];

const EXPERIENCE = [
  {
    company: "Maniac Xperience",
    location: "FCT Abuja, Nigeria",
    role: "Product Designer",
    period: "May 15, 2022 – Present",
    bullets: [
      "Launched a user-centric design overhaul that increased user engagement by 65% within the first quarter.",
      "Collaborated with development teams to create scalable designs, reducing revision cycles by 30%.",
      "Redesigned the platform's onboarding experience, resulting in a 45% increase in user retention.",
      "Spearheaded user research and testing initiatives, improving design decision-making and product usability by 70%.",
    ],
  },
  {
    company: "DesignSwyft Agency",
    location: "Glasgow Central, G3 7RH, UK",
    role: "Product Designer",
    period: "July 21, 2024",
    bullets: [
      "Conducted user research and designed UI/UX solutions for two branding projects: RapidMove Logistics and NeoHome Realty.",
      "Created wireframes, prototypes, and mockups to visualize brand elements, ensuring an engaging and user-friendly experience.",
      "Collaborated on developing logos, color palettes, and typography to align with the brands' professional and customer-centric vision.",
      "Delivered design assets on time, contributing to successful branding presentations for logistics and real estate companies.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Electrical and Electronics Engineering",
    institution: "",
    period: "2019 – 2022",
    note: "Graduated with Second-Class Honors.",
  },
];

const CERTIFICATIONS = [
  {
    title: "Google Certification: Foundations of User Experience (UX) Design",
    issuer: "",
    period: "October 5, 2023",
    bullets: [
      "Gained hands-on experience in user research, wireframing, and prototyping.",
      "Developed skills in creating intuitive, user-centered interfaces.",
    ],
    link: "https://coursera.org/verify/VHT6PD6GS4QG",
    linkLabel: "coursera.org/verify/VHT6PD6GS4QG",
  },
  {
    title: "UX Design Certification",
    issuer: "Seed Builders Academy",
    period: "July – October 2023",
    bullets: [
      "Specialized in UI/UX design principles, wireframes, and usability testing.",
      "Completed intensive training on user-centered design principles and methodologies.",
      "Designed and prototyped functional interfaces using Figma and Adobe XD.",
      "Collaborated with fellow designers on real-world projects to enhance hands-on skills.",
      "Successfully passed usability testing challenges, improving design by incorporating user feedback.",
    ],
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────────────────────── */

export default function ResumePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".resume-hero > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });

      gsap.utils.toArray<HTMLElement>(".reveal-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
        });
      });

      gsap.utils.toArray<HTMLElement>(".stagger-group").forEach((group) => {
        const children = group.querySelectorAll(".stagger-child");
        gsap.from(children, {
          scrollTrigger: {
            trigger: group,
            start: "top 85%",
          },
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="resume-page-wrapper">
      {/* Ambient glows */}
      <div className="resume-glow resume-glow-1" />
      <div className="resume-glow resume-glow-2" />

      <div className="resume-container">
        {/* ── Back Link ─────────────────────────────────────────── */}
        <Link href="/" className="resume-back-link group">
          <ArrowLeft size={15} className="resume-back-arrow" />
          Back to Site
        </Link>

        {/* ── HERO ──────────────────────────────────────────────── */}
        <header className="resume-hero">
          <div className="resume-badge">Available for New Projects</div>
          <h1 className="resume-name">{PROFILE.name}</h1>
          <p className="resume-title">{PROFILE.title}</p>

          <div className="resume-contact-row">
            <span className="resume-contact-item">
              <MapPin size={13} />
              {PROFILE.location}
            </span>
            <span className="resume-divider" />
            <a href={`tel:${PROFILE.phone}`} className="resume-contact-item resume-contact-link">
              <Phone size={13} />
              {PROFILE.phone}
            </a>
            <span className="resume-divider" />
            <a href={`mailto:${PROFILE.email}`} className="resume-contact-item resume-contact-link">
              <Mail size={13} />
              {PROFILE.email}
            </a>
            <span className="resume-divider" />
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-contact-item resume-contact-link"
            >
              <Linkedin size={13} />
              {PROFILE.linkedinLabel}
            </a>
          </div>

          <p className="resume-summary">{PROFILE.summary}</p>
        </header>

        {/* ── EXPERTISE ─────────────────────────────────────────── */}
        <section className="resume-section reveal-item">
          <h2 className="resume-section-label">Areas of Expertise</h2>
          <div className="expertise-grid stagger-group">
            {EXPERTISE.map((ex, i) => (
              <div key={i} className="expertise-card stagger-child">
                <span className="expertise-dot" />
                <div>
                  <p className="expertise-title">{ex.title}</p>
                  <p className="expertise-desc">{ex.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ────────────────────────────────────────── */}
        <section className="resume-section reveal-item">
          <h2 className="resume-section-label">Professional Experience</h2>
          <div className="exp-list">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="exp-block stagger-group">
                <div className="exp-header">
                  <div className="exp-header-left">
                    <h3 className="exp-company">{exp.company}</h3>
                    <span className="exp-location">{exp.location}</span>
                  </div>
                  <div className="exp-header-right">
                    <span className="exp-role">{exp.role}</span>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                </div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="exp-bullet stagger-child">
                      <span className="bullet-marker" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ─────────────────────────────────────────── */}
        <section className="resume-section reveal-item">
          <h2 className="resume-section-label">Education</h2>
          {EDUCATION.map((edu, i) => (
            <div key={i} className="edu-block">
              <div className="edu-header">
                <p className="edu-degree">{edu.degree}</p>
                <span className="edu-period">{edu.period}</span>
              </div>
              {edu.note && <p className="edu-note">{edu.note}</p>}
            </div>
          ))}
        </section>

        {/* ── CERTIFICATIONS ────────────────────────────────────── */}
        <section className="resume-section reveal-item">
          <h2 className="resume-section-label">Additional Skills &amp; Certifications</h2>
          <div className="cert-list stagger-group">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="cert-block stagger-child">
                <div className="cert-header">
                  <div>
                    <p className="cert-title">{cert.title}</p>
                    {cert.issuer && <p className="cert-issuer">{cert.issuer}</p>}
                  </div>
                  <span className="cert-period">{cert.period}</span>
                </div>
                <ul className="cert-bullets">
                  {cert.bullets.map((b, bi) => (
                    <li key={bi} className="cert-bullet">
                      <span className="bullet-marker" />
                      {b}
                    </li>
                  ))}
                </ul>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    <ExternalLink size={12} />
                    {cert.linkLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── FOOTER CTA ────────────────────────────────────────── */}
        <footer className="resume-footer reveal-item">
          <p className="resume-footer-label">Let&apos;s create something extraordinary.</p>
          <a href={`mailto:${PROFILE.email}`} className="resume-footer-cta">
            <Mail size={16} />
            {PROFILE.email}
          </a>
        </footer>
      </div>
    </div>
  );
}
