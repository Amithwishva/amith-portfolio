"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Contact.css";

const socialLinks = [
  {
    name: "Instagram",
    username: "@_wishva_09",
    href: "https://www.instagram.com/_wishva_09/",
    icon: "instagram" as const,
  },
  {
    name: "Facebook",
    username: "Amith Wishva Dinu",
    href: "https://www.facebook.com/amithwisvadinu.thenuwara/",
    icon: "facebook" as const,
  },
  {
    name: "LinkedIn",
    username: "Your LinkedIn",
    href: "https://www.linkedin.com/",
    icon: "linkedin" as const,
  },
  {
    name: "Behance",
    username: "Your Behance",
    href: "https://www.behance.net/",
    icon: "behance" as const,
  },
  {
    name: "GitHub",
    username: "Your GitHub",
    href: "https://github.com/",
    icon: "github" as const,
  },
];

function SocialIcon({
  type,
}: {
  type: (typeof socialLinks)[number]["icon"];
}) {
  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="brand-icon"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <circle
          cx="12"
          cy="12"
          r="4.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <circle
          cx="17.4"
          cy="6.7"
          r="1.15"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="brand-icon"
      >
        <path
          fill="currentColor"
          d="M13.6 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.5-1.5h1.7V3.7c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.5Z"
        />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="brand-icon"
      >
        <path
          fill="currentColor"
          d="M5.2 3.2a2.1 2.1 0 1 1-4.2 0 2.1 2.1 0 0 1 4.2 0ZM1.3 8.1h3.8V21H1.3V8.1Zm6.2 0H11v1.8h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.7 2.6 4.7 6V21h-3.8v-6.4c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H7.5V8.1Z"
        />
      </svg>
    );
  }

  if (type === "behance") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="brand-icon"
      >
        <path
          fill="currentColor"
          d="M3 5h6.2c3.2 0 5 1.5 5 4 0 1.4-.7 2.6-2 3.2 1.7.6 2.6 1.8 2.6 3.6 0 2.8-2.1 4.3-5.4 4.3H3V5Zm3.2 2.5v3.4h2.5c1.5 0 2.3-.6 2.3-1.7s-.8-1.7-2.3-1.7H6.2Zm0 5.8v4.1h2.9c1.6 0 2.5-.7 2.5-2.1 0-1.4-.9-2-2.5-2H6.2Z"
        />

        <path
          fill="currentColor"
          d="M16.1 7.1h4.6v1.5h-4.6V7.1Zm2.3 2.4c3 0 4.7 2 4.7 5.1v.8h-7.2c.1 1.5.9 2.3 2.3 2.3 1.1 0 1.9-.5 2.3-1.4h2.4c-.6 2-2.2 3.2-4.8 3.2-3.2 0-5-1.9-5-5s1.9-5 5.3-5Zm-2.5 3.8h4.3c-.2-1.3-.9-2-2.1-2-1.2 0-2 .7-2.2 2Z"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="brand-icon"
    >
      <path
        fill="currentColor"
        d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 .9-2.7-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.5.1 2.7.6.7.9 1.6.9 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10Z"
      />
    </svg>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const orbRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const orb = orbRef.current;
    const glow = glowRef.current;

    if (!section || !orb || !glow) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-eyebrow",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".contact-title-line",
        {
          opacity: 0,
          y: 80,
          rotateX: 35,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.1,
        }
      );

      gsap.fromTo(
        ".contact-main-copy",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.45,
        }
      );

      gsap.fromTo(
        ".contact-social-card",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.65,
        }
      );

      gsap.fromTo(
        ".contact-cv",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.9,
        }
      );

      gsap.to(orb, {
        y: -18,
        x: 12,
        rotation: 360,
        duration: 12,
        repeat: -1,
        ease: "none",
      });

      gsap.to(glow, {
        scale: 1.18,
        opacity: 0.8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contact-orbit-ring-one", {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".contact-orbit-ring-two", {
        rotation: -360,
        duration: 24,
        repeat: -1,
        ease: "none",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="contact"
      id="contact"
      aria-label="Contact"
    >
      <div className="contact-grid" aria-hidden="true" />
      <div className="contact-vignette" aria-hidden="true" />

      <div
        ref={glowRef}
        className="contact-glow"
        aria-hidden="true"
      />

      <div className="contact-orb-wrap" aria-hidden="true">
        <div className="contact-orb-glow" />

        <div
          ref={orbRef}
          className="contact-orb"
        >
          <div className="contact-orb-core" />
          <div className="contact-orbit-ring contact-orbit-ring-one" />
          <div className="contact-orbit-ring contact-orbit-ring-two" />
          <div className="contact-orbit-dot contact-orbit-dot-one" />
          <div className="contact-orbit-dot contact-orbit-dot-two" />
        </div>
      </div>

      <div
        className="contact-background-word"
        aria-hidden="true"
      >
        CONNECT
      </div>

      <div className="contact-inner">
        {/* =========================================
            HEADER
        ========================================= */}

        <header className="contact-header">
          <div className="contact-eyebrow">
            <span>08</span>
            <i />
            <span>08</span>
          </div>

          <div className="contact-header-meta">
            <span>CONTACT</span>
            <span>2026</span>
          </div>

          <h2 className="contact-title">
            <span className="contact-title-line">
              LET&apos;S
            </span>

            <span className="contact-title-line contact-title-outline">
              CREATE
            </span>

            <span className="contact-title-line">
              SOMETHING.
            </span>
          </h2>
        </header>

        {/* =========================================
            MAIN CONTENT
        ========================================= */}

        <div className="contact-main">
          <div className="contact-main-copy">
            <span className="contact-kicker">
              HAVE A PROJECT IN MIND?
            </span>

            <p>
              I&apos;m always open to creating meaningful
              digital experiences, creative interfaces and
              ambitious digital products.
            </p>

            <a
              href="mailto:wishva.amith@gmail.com"
              className="contact-email-link"
            >
              <span className="contact-email-label">
                GET IN TOUCH
              </span>

              <span className="contact-email">
                wishva.amith@gmail.com
              </span>

              <span className="contact-arrow">
                ↗
              </span>
            </a>
          </div>

          {/* =========================================
              SOCIAL LINKS
          ========================================= */}

          <div className="contact-socials">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-card"
              >
                <div className="contact-social-icon">
                  <SocialIcon type={social.icon} />
                </div>

                <div className="contact-social-info">
                  <span className="contact-social-name">
                    {social.name}
                  </span>

                  <span className="contact-social-username">
                    {social.username}
                  </span>
                </div>

                <span className="contact-social-arrow">
                  ↗
                </span>
              </a>
            ))}
          </div>

          {/* =========================================
              CV DOWNLOAD
          ========================================= */}

          <a
            href="/Amith-Wishva-CV.pdf"
            download="Amith-Wishva-CV.pdf"
            className="contact-cv"
          >
            <div className="contact-cv-left">
              <span className="contact-cv-number">
                01
              </span>

              <div>
                <span className="contact-cv-label">
                  CAREER / PROFILE
                </span>

                <strong>
                  DOWNLOAD MY CV
                </strong>
              </div>
            </div>

            <div className="contact-cv-right">
              <span>PDF</span>

              <span className="contact-cv-arrow">
                ↓
              </span>
            </div>
          </a>
        </div>

        {/* =========================================
            FOOTER
        ========================================= */}

        <footer className="contact-footer">
          <div className="contact-footer-line" />

          <div className="contact-footer-content">
            <span>AMITH WISHVA</span>

            <span>
              DESIGN · DEVELOPMENT · EXPERIENCE
            </span>

            <span>© 2026</span>
          </div>

          <div className="contact-footer-bottom">
            <span>
              CREATIVE DIGITAL DESIGNER
            </span>

            <span className="contact-page-number">
              08 / 08
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}