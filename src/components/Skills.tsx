"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: "UI/UX DESIGN",
    category: "DESIGN",
    description:
      "Creating intuitive interfaces, user flows, prototypes and design systems.",
    logo: "https://cdn.simpleicons.org/figma/F24E1E",
    tool: "Figma",
    code: "UX",
  },
  {
    name: "CREATIVE DEVELOPMENT",
    category: "DEVELOPMENT",
    description:
      "Building interactive digital experiences with modern web technologies.",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
    tool: "React",
    code: "DEV",
  },
  {
    name: "VISUAL DESIGN",
    category: "CREATIVE",
    description:
      "Creating visual identities, digital campaigns and compelling visual content.",
    logo: "https://cdn.simpleicons.org/figma/F24E1E",
    tool: "Figma",
    code: "VIS",
  },
  {
    name: "FULL STACK DEVELOPMENT",
    category: "DEVELOPMENT",
    description:
      "Developing complete digital products across frontend, backend and APIs.",
    logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    tool: "Node.js",
    code: "FULL",
  },
  {
    name: "MOTION DESIGN",
    category: "MOTION",
    description:
      "Designing cinematic animations and interactive experiences that feel alive.",
    logo: "https://cdn.simpleicons.org/gsap/88CE02",
    tool: "GSAP",
    code: "MOTION",
  },
  {
    name: "3D EXPERIENCE",
    category: "3D / WEBGL",
    description:
      "Creating immersive 3D interfaces and interactive experiences for the web.",
    logo: "https://cdn.simpleicons.org/threedotjs/FFFFFF",
    tool: "Three.js",
    code: "3D",
  },
  {
    name: "BACKEND DEVELOPMENT",
    category: "BACKEND",
    description:
      "Building scalable APIs and reliable backend systems for digital products.",
    logo: "https://cdn.simpleicons.org/fastapi/009688",
    tool: "FastAPI",
    code: "API",
  },
  {
    name: "API DEVELOPMENT",
    category: "BACKEND",
    description:
      "Designing structured APIs and services that connect modern applications.",
    logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    tool: "Node.js",
    code: "REST",
  },
  {
    name: "DEVOPS & CLOUD",
    category: "INFRASTRUCTURE",
    description:
      "Containerizing, deploying and managing modern digital applications.",
    logo: "https://cdn.simpleicons.org/docker/2496ED",
    tool: "Docker",
    code: "OPS",
  },
  {
    name: "AI DEVELOPMENT",
    category: "ARTIFICIAL INTELLIGENCE",
    description:
      "Exploring AI-powered products, computer vision and intelligent experiences.",
    logo: "https://cdn.simpleicons.org/python/3776AB",
    tool: "Python",
    code: "AI",
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) return;

      const cards =
        gsap.utils.toArray<HTMLElement>(".skill-card");

      /* =====================================================
         INITIAL STATE
      ===================================================== */

      gsap.set(cards, {
        opacity: 0,
        y: 90,
        rotateY: 16,
        rotateX: 5,
        scale: 0.94,
      });

      /* =====================================================
         CARD ENTRANCE
      ===================================================== */

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        duration: 1.15,
        stagger: 0.075,
        ease: "power4.out",

        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      /* =====================================================
         HORIZONTAL SCROLL
      ===================================================== */

      const getScrollAmount = () => {
        return Math.max(
          0,
          track.scrollWidth - window.innerWidth
        );
      };

      const horizontalTween = gsap.to(track, {
        x: () => -getScrollAmount(),

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: () =>
            `+=${getScrollAmount() + 1400}`,

          pin: true,

          scrub: 1,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      /* =====================================================
         CARD MOUSE TILT
      ===================================================== */

      const cleanupHandlers: (() => void)[] = [];

      cards.forEach((card) => {
        const handleMove = (event: MouseEvent) => {
          if (window.innerWidth < 900) return;

          const rect = card.getBoundingClientRect();

          const x =
            (event.clientX - rect.left) /
              rect.width -
            0.5;

          const y =
            (event.clientY - rect.top) /
              rect.height -
            0.5;

          const rotateY = x * 10;
          const rotateX = -y * 10;

          gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.45,
            ease: "power3.out",
            overwrite: true,
          });

          const glow =
            card.querySelector<HTMLElement>(
              ".skill-card-cursor-glow"
            );

          if (glow) {
            gsap.to(glow, {
              x: x * 70,
              y: y * 70,
              duration: 0.5,
              ease: "power3.out",
              overwrite: true,
            });
          }
        };

        const handleEnter = () => {
          if (window.innerWidth < 900) return;

          gsap.to(card, {
            z: 25,
            scale: 1.015,
            duration: 0.5,
            ease: "power3.out",
            overwrite: true,
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            z: 0,
            scale: 1,
            duration: 0.75,
            ease: "power3.out",
            overwrite: true,
          });

          const glow =
            card.querySelector<HTMLElement>(
              ".skill-card-cursor-glow"
            );

          if (glow) {
            gsap.to(glow, {
              x: 0,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
            });
          }
        };

        card.addEventListener(
          "mousemove",
          handleMove
        );

        card.addEventListener(
          "mouseenter",
          handleEnter
        );

        card.addEventListener(
          "mouseleave",
          handleLeave
        );

        cleanupHandlers.push(() => {
          card.removeEventListener(
            "mousemove",
            handleMove
          );

          card.removeEventListener(
            "mouseenter",
            handleEnter
          );

          card.removeEventListener(
            "mouseleave",
            handleLeave
          );
        });
      });

      /* =====================================================
         ACTIVE CARD EFFECT
      ===================================================== */

      cards.forEach((card) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                card.classList.add("skill-card-visible");
              } else {
                card.classList.remove("skill-card-visible");
              }
            });
          },
          {
            threshold: 0.55,
          }
        );

        observer.observe(card);

        cleanupHandlers.push(() => {
          observer.disconnect();
        });
      });

      /* =====================================================
         SCROLL PROGRESS
      ===================================================== */

      const progressBar =
        section.querySelector<HTMLElement>(
          ".skills-progress-fill"
        );

      if (progressBar) {
        gsap.to(progressBar, {
          width: "100%",

          ease: "none",

          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () =>
              `+=${getScrollAmount() + 1400}`,
            scrub: true,
          },
        });
      }

      /* =====================================================
         BACKGROUND MOVEMENT
      ===================================================== */

      const backgroundOrb =
        section.querySelector<HTMLElement>(
          ".skills-background-orb"
        );

      if (backgroundOrb) {
        gsap.to(backgroundOrb, {
          x: 180,
          y: 80,
          scale: 1.15,

          ease: "none",

          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
          },
        });
      }

      /* =====================================================
         REFRESH
      ===================================================== */

      const refreshTimer =
        window.setTimeout(() => {
          ScrollTrigger.refresh();
        }, 200);

      /* =====================================================
         CLEANUP
      ===================================================== */

      return () => {
        window.clearTimeout(refreshTimer);

        cleanupHandlers.forEach(
          (cleanup) => cleanup()
        );

        horizontalTween.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="skills"
      id="skills"
    >
      {/* ===================================================
          ATMOSPHERE
      =================================================== */}

      <div className="skills-background-orb" />

      <div className="skills-glow skills-glow-one" />
      <div className="skills-glow skills-glow-two" />
      <div className="skills-glow skills-glow-three" />

      <div className="skills-grid" />

      {/* ===================================================
          TOP HEADER
      =================================================== */}

      <div className="skills-header">

        <div className="skills-header-left">

          <div className="skills-section-number">
            03 / 08
          </div>

          <div className="skills-heading">
            TECH STACK
          </div>

        </div>

        <div className="skills-header-right">
          TOOLS I USE
          <span>TO BUILD DIGITAL EXPERIENCES.</span>
        </div>

      </div>

      {/* ===================================================
          GIANT BACKGROUND TEXT
      =================================================== */}

      <div className="skills-background-title">
        STACK
      </div>

      {/* ===================================================
          CARD STAGE
      =================================================== */}

      <div className="skills-stage">

        <div
          ref={trackRef}
          className="skills-track"
        >

          {skills.map((skill, index) => (
            <article
              key={skill.name}
              className="skill-card"
            >

              {/* Cursor light */}

              <div className="skill-card-cursor-glow" />

              {/* Top line */}

              <div className="skill-card-top">

                <span className="skill-number">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span className="skill-category">
                  {skill.category}
                </span>

              </div>

              {/* Technology icon */}

              <div className="skill-logo-area">

                <div className="skill-orbit orbit-one" />
                <div className="skill-orbit orbit-two" />

                <div className="skill-logo-container">

                  <div className="skill-logo-ring" />

                  <img
                    src={skill.logo}
                    alt={`${skill.tool} logo`}
                    className="skill-logo"
                  />

                </div>

                <div className="skill-logo-code">
                  {skill.code}
                </div>

              </div>

              {/* Main content */}

              <div className="skill-content">

                <div className="skill-small-label">
                  CAPABILITY
                </div>

                <h2 className="skill-name">
                  {skill.name}
                </h2>

                <p className="skill-description">
                  {skill.description}
                </p>

              </div>

              {/* Bottom */}

              <div className="skill-card-bottom">

                <div>
                  <span className="skill-tool-label">
                    PRIMARY TOOL
                  </span>

                  <strong>
                    {skill.tool}
                  </strong>
                </div>

                <div className="skill-arrow">
                  ↗
                </div>

              </div>

              {/* Edge */}

              <div className="skill-card-edge" />

            </article>
          ))}

          {/* Ending space */}

          <div className="skills-end-space">
            <span>
              MORE
            </span>
          </div>

        </div>

      </div>

      {/* ===================================================
          BOTTOM INFORMATION
      =================================================== */}

      <div className="skills-bottom">

        <div className="skills-scroll">

          <span>
            SCROLL TO EXPLORE
          </span>

          <div className="skills-scroll-line">
            <div />
          </div>

        </div>

        <div className="skills-progress">

          <span>01</span>

          <div className="skills-progress-track">
            <div className="skills-progress-fill" />
          </div>

          <span>10</span>

        </div>

        <div className="skills-page-index">
          DIGITAL / TECHNOLOGY
        </div>

      </div>

    </section>
  );
}