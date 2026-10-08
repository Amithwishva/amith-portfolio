"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./CreativeDevelopment.css";

gsap.registerPlugin(ScrollTrigger);

type DevelopmentProject = {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  accent: "AI" | "WEB" | "SYS";
};

const developmentProjects: DevelopmentProject[] = [
  {
    number: "01",
    category: "AI / COMPUTER VISION",
    title: "SMART VEHICLE\nDAMAGE ASSESSMENT",
    description:
      "An AI-powered mobile application that detects, classifies and analyses vehicle damage using a smartphone camera, with automated repair-cost estimation.",
    technologies: [
      "REACT NATIVE",
      "FASTAPI",
      "PYTHON",
      "YOLOv8",
    ],
    accent: "AI",
  },
  {
    number: "02",
    category: "CREATIVE WEB",
    title: "INTERACTIVE\nDIGITAL EXPERIENCES",
    description:
      "Interactive digital experiences combining visual design, 3D environments, motion and responsive user interactions.",
    technologies: [
      "NEXT.JS",
      "REACT",
      "GSAP",
      "THREE.JS",
    ],
    accent: "WEB",
  },
  {
    number: "03",
    category: "FULL STACK / SYSTEMS",
    title: "DISTRIBUTED\nDIGITAL SYSTEMS",
    description:
      "Containerized backend systems built around APIs, microservices, messaging, gateways and persistent data.",
    technologies: [
      "NODE.JS",
      "DOCKER",
      "RABBITMQ",
      "MYSQL",
    ],
    accent: "SYS",
  },
];

const technologyStack = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "PYTHON",
  "FASTAPI",
  "NODE.JS",
  "GSAP",
  "THREE.JS",
  "REACT NATIVE",
  "DOCKER",
  "MYSQL",
  "RABBITMQ",
  "YOLOv8",
];

export default function CreativeDevelopment() {
  const sectionRef = useRef<HTMLElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================================
         HERO
         ===================================================== */

      gsap.fromTo(
        ".dev-eyebrow",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".dev-title-line",
        {
          opacity: 0,
          y: 100,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.15,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".dev-intro",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* =====================================================
         HERO BACKGROUND MOVEMENT
         ===================================================== */

      gsap.to(".dev-glow-one", {
        x: 100,
        y: 80,
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(".dev-glow-two", {
        x: -110,
        y: -100,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5,
        },
      });

      /* =====================================================
         STATEMENT PARALLAX
         ===================================================== */

      if (statementRef.current) {
        gsap.to(".dev-design-word", {
          xPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: statementRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        });

        gsap.to(
          ".dev-statement-row:nth-child(2)",
          {
            xPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: statementRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
            },
          }
        );

        gsap.to(".dev-build-word", {
          xPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: statementRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      }

      /* =====================================================
         STATEMENT FLOAT
         ===================================================== */

      gsap.to(".dev-design-word span", {
        y: -9,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(
        ".dev-statement-row:nth-child(2) span",
        {
          y: 8,
          duration: 4.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );

      gsap.to(".dev-build-word span", {
        y: -7,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        ".dev-statement-small",
        {
          opacity: 0,
          y: 25,
          letterSpacing: "12px",
        },
        {
          opacity: 0.85,
          y: 0,
          letterSpacing: "6px",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statementRef.current,
            start: "top 55%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* =====================================================
         PROJECT HEADER
         ===================================================== */

      gsap.fromTo(
        ".dev-projects-header",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".dev-projects",
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* =====================================================
         PROJECT REVEALS
         ===================================================== */

      gsap.utils
        .toArray<HTMLElement>(".dev-project")
        .forEach((project, index) => {
          gsap.fromTo(
            project,
            {
              opacity: 0,
              y: 100,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.1,
              delay: index * 0.08,
              ease: "power4.out",
              scrollTrigger: {
                trigger: project,
                start: "top 86%",
                toggleActions:
                  "play none none reverse",
              },
            }
          );
        });

      /* =====================================================
         PROJECT VISUAL PARALLAX
         ===================================================== */

      gsap.utils
        .toArray<HTMLElement>(".dev-project-visual")
        .forEach((visual) => {
          gsap.to(visual, {
            y: -18,
            ease: "none",
            scrollTrigger: {
              trigger: visual,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        });

      /* =====================================================
         TECHNOLOGY STACK
         ===================================================== */

      if (stackRef.current) {
        gsap.fromTo(
          ".dev-stack-item",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.045,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stackRef.current,
              start: "top 82%",
              toggleActions:
                "play none none reverse",
            },
          }
        );
      }

      /* =====================================================
         FINAL
         ===================================================== */

      gsap.fromTo(
        ".dev-final-title",
        {
          opacity: 0,
          y: 80,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".dev-final",
            start: "top 80%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      gsap.to(".dev-final-number", {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: ".dev-final",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  /* =========================================================
     3D PROJECT TILT
     ========================================================= */

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const card = event.currentTarget;

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const rotateX =
      ((y - rect.height / 2) /
        rect.height) *
      -3.5;

    const rotateY =
      ((x - rect.width / 2) /
        rect.width) *
      3.5;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1200,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    gsap.to(event.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="creative-development"
      id="development"
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div
        className="dev-glow dev-glow-one"
        aria-hidden="true"
      />

      <div
        className="dev-glow dev-glow-two"
        aria-hidden="true"
      />

      <div
        className="dev-grid"
        aria-hidden="true"
      />

      <div
        className="dev-noise"
        aria-hidden="true"
      />

      {/* =====================================================
          HERO
          ===================================================== */}

      <div className="dev-hero">
        <div className="dev-eyebrow">
          <div className="dev-index">
            <span>06</span>
            <i />
            <span>08</span>
          </div>

          <span>
            CREATIVE DEVELOPMENT
          </span>

          <span>
            2026
          </span>
        </div>

        <div className="dev-title">
          <div className="dev-title-line">
            DESIGN
          </div>

          <div className="dev-title-line dev-title-muted">
            MEETS
          </div>

          <div className="dev-title-line">
            CODE.
          </div>
        </div>

        <div className="dev-hero-bottom">
          <p className="dev-intro">
            I design digital experiences and
            build the technology behind them —
            combining visual thinking,
            interaction and development.
          </p>

          <div className="dev-hero-side">
            <span>
              DIGITAL DESIGN
            </span>
            <span>
              CREATIVE TECHNOLOGY
            </span>
            <span>
              FULL STACK
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          CINEMATIC STATEMENT
          ===================================================== */}

      <div
        ref={statementRef}
        className="dev-statement"
      >
        <div className="dev-statement-orbit orbit-one" />
        <div className="dev-statement-orbit orbit-two" />

        <div
          className="
            dev-statement-row
            dev-design-word
          "
        >
          <span>
            DON&apos;T JUST
          </span>
        </div>

        <div className="dev-statement-row">
          <span>
            DESIGN
          </span>
        </div>

        <div
          className="
            dev-statement-row
            dev-build-word
          "
        >
          <span>
            IT.
          </span>
        </div>

        <div className="dev-statement-small">
          BUILD IT.
        </div>
      </div>

      {/* =====================================================
          PROJECTS
          ===================================================== */}

      <div className="dev-projects">
        <div className="dev-projects-header">
          <div>
            <span>
              SELECTED DEVELOPMENT
            </span>

            <h2>
              THINGS I&apos;VE
              <br />
              BUILT.
            </h2>
          </div>

          <p>
            Applications, interactive
            websites and technical
            systems built through design
            and development.
          </p>
        </div>

        <div className="dev-project-list">
          {developmentProjects.map(
            (project) => (
              <article
                key={project.number}
                className={`dev-project dev-project-${project.accent.toLowerCase()}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* =================================================
                    PROJECT VISUAL
                    ================================================= */}

                <div className="dev-project-visual">
                  {/* =================================================
                      PROJECT 01 — FYP
                      ================================================= */}

                  {project.number === "01" && (
                    <div className="dev-fyp-showcase">
                      <div className="dev-visual-label">
                        <span>
                          01 / AI SYSTEM
                        </span>

                        <span>
                          COMPUTER VISION
                        </span>
                      </div>

                      <div className="dev-fyp-main">
                        <div className="dev-device-glow" />

                        <img
                          src="/fyp-result.png"
                          alt="Smart Vehicle Damage Assessment result screen"
                        />
                      </div>

                      <div className="dev-fyp-side">
                        <div>
                          <img
                            src="/fyp-home.png"
                            alt="Smart Vehicle Damage Assessment home screen"
                          />
                        </div>

                        <div>
                          <img
                            src="/fyp-camera.png"
                            alt="Smart Vehicle Damage Assessment camera screen"
                          />
                        </div>

                        <div>
                          <img
                            src="/fyp-cost.png"
                            alt="Smart Vehicle Damage Assessment cost screen"
                          />
                        </div>
                      </div>

                      <div className="dev-fyp-label">
                        <span>
                          REAL PROJECT
                        </span>

                        <strong>
                          AI DAMAGE
                          <br />
                          ASSESSMENT
                        </strong>
                      </div>
                    </div>
                  )}

                  {/* =================================================
                      PROJECT 02 — CREATIVE WEB
                      ================================================= */}

                  {project.number === "02" && (
                    <div className="dev-web-image">
                      <div className="dev-visual-label">
                        <span>
                          02 / CREATIVE WEB
                        </span>

                        <span>
                          3D / MOTION
                        </span>
                      </div>

                      <img
                        src="/creative-web.png"
                        alt="Creative 3D digital experience"
                      />

                      <div className="dev-web-image-overlay">
                        <span>
                          CREATIVE WEB
                        </span>

                        <strong>
                          INTERACTIVE
                          EXPERIENCE
                        </strong>
                      </div>

                      <div className="dev-web-corner">
                        <span>02</span>
                        <span>
                          INTERACTIVE
                        </span>
                      </div>
                    </div>
                  )}

                  {/* =================================================
                      PROJECT 03 — DISTRIBUTED SYSTEM
                      ================================================= */}

                  {project.number === "03" && (
                    <div className="dev-generated-visual dev-sys">
                      <div className="dev-visual-label">
                        <span>
                          03 / SYSTEM
                        </span>

                        <span>
                          MICROSERVICES
                        </span>
                      </div>

                      <div className="system-lines">
                        <span />
                        <span />
                        <span />
                        <span />

                        <span className="packet-line-one" />
                        <span className="packet-line-two" />
                        <span className="packet-line-three" />
                      </div>

                      <div className="system-node node-one">
                        API
                      </div>

                      <div className="system-node node-two">
                        QUEUE
                      </div>

                      <div className="system-node node-three">
                        DB
                      </div>

                      <div className="system-node node-four">
                        SERVICE
                      </div>

                      <div className="system-center">
                        <span>
                          DISTRIBUTED
                        </span>

                        <strong>
                          SYSTEM
                        </strong>
                      </div>

                      <div className="system-status">
                        <span className="status-dot" />
                        SYSTEM ONLINE
                      </div>
                    </div>
                  )}
                </div>

                {/* =================================================
                    PROJECT INFORMATION
                    ================================================= */}

                <div className="dev-project-info">
                  <div className="dev-project-top">
                    <span>
                      {project.number}
                    </span>

                    <span>
                      {project.category}
                    </span>
                  </div>

                  <h3>
                    {project.title
                      .split("\n")
                      .map(
                        (
                          line,
                          index
                        ) => (
                          <span key={index}>
                            {line}
                          </span>
                        )
                      )}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="dev-tech-list">
                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                  <div className="dev-project-arrow">
                    <span>
                      DEVELOPMENT
                    </span>

                    <strong>
                      ↗
                    </strong>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>

      {/* =====================================================
          TECHNOLOGY STACK
          ===================================================== */}

      <div
        ref={stackRef}
        className="dev-stack"
      >
        <div className="dev-stack-header">
          <div>
            <span>
              TECHNOLOGY
            </span>

            <h2>
              TOOLS
              <br />
              I BUILD WITH.
            </h2>
          </div>

          <p>
            A blend of design, frontend,
            backend, AI and infrastructure
            technologies.
          </p>
        </div>

        <div className="dev-stack-grid">
          {technologyStack.map(
            (
              technology,
              index
            ) => (
              <div
                key={technology}
                className="dev-stack-item"
              >
                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <strong>
                  {technology}
                </strong>

                <i>
                  ↗
                </i>
              </div>
            )
          )}
        </div>
      </div>

      {/* =====================================================
          FINAL
          ===================================================== */}

      <div className="dev-final">
        <span>
          DESIGN · DEVELOPMENT · EXPERIENCE
        </span>

        <h2 className="dev-final-title">
          FROM IDEA
          <br />
          TO
          <br />
          INTERACTION.
        </h2>

        <div className="dev-final-bottom">
          <span>
            06 / 08
          </span>

          <span>
            NEXT — PROCESS
          </span>
        </div>

        <div
          className="dev-final-number"
          aria-hidden="true"
        >
          06
        </div>
      </div>
    </section>
  );
}