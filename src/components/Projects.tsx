"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    year: "2026",
    type: "UI/UX DESIGN",
    category: "E-COMMERCE EXPERIENCE",

    title: "Maison Noir",

    description:
      "A minimal and elegant e-commerce experience designed for a premium men's fashion brand.",

    image: "/maison-noir.png",

    tags: [
      "UX/UI DESIGN",
      "MOBILE EXPERIENCE",
      "E-COMMERCE",
    ],

    tool: "FIGMA",

    caseStudyTitle:
      "A refined digital shopping experience.",

    caseStudyText:
      "Maison Noir explores how strong visual hierarchy, restrained typography and intentional interaction can create a premium fashion e-commerce experience.",

    caseStudyDetails: [
      "User Experience",
      "Interface Design",
      "Visual Direction",
      "E-commerce",
    ],
  },

  {
    number: "02",
    year: "2026",
    type: "UI/UX DESIGN",
    category: "ON-DEMAND HOME SERVICES",

    title: "HomeFix",

    description:
      "A mobile service marketplace designed to connect homeowners with trusted professionals for repairs, maintenance and everyday home services.",

    image: "/project-02.png",

    tags: [
      "MOBILE APP",
      "UX/UI DESIGN",
      "SERVICE MARKETPLACE",
    ],

    tool: "FIGMA",

    caseStudyTitle:
      "Connecting people with trusted services.",

    caseStudyText:
      "HomeFix focuses on simplifying the process of finding, comparing and requesting everyday home services through a clear and approachable mobile experience.",

    caseStudyDetails: [
      "Mobile UX",
      "Service Marketplace",
      "User Flows",
      "Interface Design",
    ],
  },

  {
    number: "03",
    year: "2026",
    type: "UI/UX DESIGN",
    category: "PREMIUM FURNITURE LANDING PAGE",

    title: "Furniture",

    description:
      "A modern furniture landing page designed to present premium products through strong visual hierarchy, refined typography and an effortless shopping experience.",

    image: "/furniture-landing.png",

    tags: [
      "LANDING PAGE",
      "E-COMMERCE",
      "VISUAL DESIGN",
    ],

    tool: "FIGMA",

    caseStudyTitle:
      "Product presentation through visual clarity.",

    caseStudyText:
      "The furniture experience combines large product imagery, refined typography and a structured layout to create a premium digital shopping environment.",

    caseStudyDetails: [
      "Visual Design",
      "Landing Page",
      "Product Presentation",
      "E-commerce",
    ],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const caseStudyRef = useRef<HTMLDivElement>(null);

  const [activeProject, setActiveProject] = useState(0);
  const [caseStudyOpen, setCaseStudyOpen] =
    useState(false);

  const project = projects[activeProject];

  /* =====================================================
     PROJECT CHANGE ANIMATION
  ===================================================== */

  const changeProject = (index: number) => {
    if (index === activeProject) return;

    const timeline = gsap.timeline();

    timeline.to(
      [
        imageRef.current,
        titleRef.current,
        categoryRef.current,
        descriptionRef.current,
        numberRef.current,
      ],
      {
        opacity: 0,
        y: 20,
        duration: 0.28,
        ease: "power2.in",
      }
    );

    timeline.add(() => {
      setActiveProject(index);
    });

    timeline.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 1.06,
        x: 40,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 0.8,
        ease: "power4.out",
      }
    );

    timeline.fromTo(
      [categoryRef.current, titleRef.current],
      {
        opacity: 0,
        y: 35,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.05,
        ease: "power4.out",
      },
      "-=0.55"
    );

    timeline.fromTo(
      descriptionRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
      },
      "-=0.4"
    );

    timeline.fromTo(
      numberRef.current,
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
      },
      "-=0.35"
    );
  };

  /* =====================================================
     SECTION ENTRANCE
  ===================================================== */

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          ".projects-header",
          ".projects-visual",
          ".projects-info",
          ".projects-navigation",
        ],
        {
          opacity: 0,
        }
      );

      gsap.set(".projects-visual", {
        x: -80,
        scale: 0.94,
      });

      gsap.set(".projects-info", {
        x: 80,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      timeline.to(".projects-header", {
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      });

      timeline.to(
        ".projects-visual",
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.1,
          ease: "power4.out",
        },
        "-=0.35"
      );

      timeline.to(
        ".projects-info",
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.8"
      );

      timeline.to(
        ".projects-navigation",
        {
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.45"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     IMAGE PARALLAX
  ===================================================== */

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        y: -25,
        scale: 1.035,

        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top bottom",
          end: "bottom top",

          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeProject]);

  /* =====================================================
     MOUSE PARALLAX
  ===================================================== */

  useEffect(() => {
    const visual = visualRef.current;

    if (!visual) return;

    const handleMove = (event: MouseEvent) => {
      if (window.innerWidth < 900) return;

      const rect = visual.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
          rect.width -
        0.5;

      const y =
        (event.clientY - rect.top) /
          rect.height -
        0.5;

      gsap.to(visual, {
        rotateY: x * 5,
        rotateX: -y * 4,
        duration: 0.7,
        ease: "power3.out",
        overwrite: true,
      });

      gsap.to(imageRef.current, {
        x: x * 18,
        y: y * 12,
        duration: 0.8,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const handleLeave = () => {
      gsap.to(visual, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(imageRef.current, {
        x: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    visual.addEventListener(
      "mousemove",
      handleMove
    );

    visual.addEventListener(
      "mouseleave",
      handleLeave
    );

    return () => {
      visual.removeEventListener(
        "mousemove",
        handleMove
      );

      visual.removeEventListener(
        "mouseleave",
        handleLeave
      );
    };
  }, [activeProject]);

  /* =====================================================
     CASE STUDY
  ===================================================== */

  const openCaseStudy = () => {
    setCaseStudyOpen(true);

    requestAnimationFrame(() => {
      if (!caseStudyRef.current) return;

      gsap.fromTo(
        caseStudyRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power4.out",
        }
      );
    });
  };

  const closeCaseStudy = () => {
    if (!caseStudyRef.current) {
      setCaseStudyOpen(false);
      return;
    }

    gsap.to(caseStudyRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.45,
      ease: "power3.in",
      onComplete: () => {
        setCaseStudyOpen(false);
      },
    });
  };

  /* =====================================================
     KEYBOARD NAVIGATION
  ===================================================== */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (caseStudyOpen) {
        if (event.key === "Escape") {
          closeCaseStudy();
        }

        return;
      }

      if (event.key === "ArrowRight") {
        setActiveProject(
          (prev) =>
            (prev + 1) % projects.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveProject(
          (prev) =>
            (prev - 1 + projects.length) %
            projects.length
        );
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [caseStudyOpen]);

  return (
    <section
      ref={sectionRef}
      className="projects"
      id="projects"
    >
      {/* =================================================
          ATMOSPHERE
      ================================================= */}

      <div className="projects-glow projects-glow-one" />
      <div className="projects-glow projects-glow-two" />

      <div className="projects-grid" />

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="projects-header">

        <div className="projects-header-left">

          <span className="projects-index">
            04 / 08
          </span>

          <span className="projects-label">
            DIGITAL EXPERIENCES
          </span>

        </div>

        <div className="projects-header-right">
          SELECTED WORK
        </div>

      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <div className="projects-main">

        {/* ===============================================
            VISUAL
        =============================================== */}

        <div
          ref={visualRef}
          className="projects-visual"
        >

          <div className="projects-visual-glow" />

          <div className="projects-image-frame">

            <img
              ref={imageRef}
              src={project.image}
              alt={project.title}
              className="projects-image"
            />

            <div className="projects-image-overlay" />

            <div className="projects-image-scan" />

            <div className="projects-corner projects-corner-tl" />
            <div className="projects-corner projects-corner-tr" />
            <div className="projects-corner projects-corner-bl" />
            <div className="projects-corner projects-corner-br" />

          </div>

          <div className="projects-image-meta">
            <span>
              {project.number}
            </span>

            <span>
              {project.year}
            </span>
          </div>

          <div className="projects-visual-label">
            DIGITAL / {project.number}
          </div>

        </div>

        {/* ===============================================
            INFORMATION CARD
        =============================================== */}

        <div
          ref={infoRef}
          className="projects-info"
        >

          <div className="projects-info-top">

            <div
              ref={numberRef}
              className="projects-big-number"
            >
              {project.number}
            </div>

            <div className="projects-year">
              {project.year}
            </div>

          </div>

          <div className="projects-info-content">

            <div
              ref={categoryRef}
              className="projects-category"
            >
              {project.type}
              <span />
              {project.category}
            </div>

            <h2
              ref={titleRef}
              className="projects-title"
            >
              {project.title}
            </h2>

            <p
              ref={descriptionRef}
              className="projects-description"
            >
              {project.description}
            </p>

            <div className="projects-tags">

              {project.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}

            </div>

          </div>

          <div className="projects-info-bottom">

            <div className="projects-tool">

              <span>
                PRIMARY TOOL
              </span>

              <strong>
                {project.tool}
              </strong>

            </div>

            <button
              type="button"
              className="projects-case-button"
              onClick={openCaseStudy}
            >
              <span>
                CASE STUDY
              </span>

              <span className="projects-case-arrow">
                ↗
              </span>
            </button>

          </div>

        </div>

      </div>

      {/* =================================================
          PROJECT NAVIGATION
      ================================================= */}

      <div className="projects-navigation">

        <div className="projects-nav-line" />

        <div className="projects-nav-items">

          {projects.map(
            (item, index) => (
              <button
                key={item.number}
                type="button"
                className={
                  index === activeProject
                    ? "projects-nav-item active"
                    : "projects-nav-item"
                }
                onClick={() =>
                  changeProject(index)
                }
              >

                <span className="projects-nav-number">
                  {item.number}
                </span>

                <span className="projects-nav-name">
                  {item.title}
                </span>

              </button>
            )
          )}

        </div>

        <div className="projects-nav-line" />

      </div>

      {/* =================================================
          FOOTER
      ================================================= */}

      <div className="projects-footer">

        <span>
          SCROLL / EXPLORE
        </span>

        <span>
          {project.number} — {projects.length
            .toString()
            .padStart(2, "0")}
        </span>

      </div>

      {/* =================================================
          CASE STUDY OVERLAY
      ================================================= */}

      {caseStudyOpen && (
        <div
          ref={caseStudyRef}
          className="case-study-overlay"
        >

          <div className="case-study-backdrop" />

          <div className="case-study-panel">

            {/* Header */}

            <div className="case-study-header">

              <div>

                <span className="case-study-index">
                  CASE STUDY /{" "}
                  {project.number}
                </span>

                <span className="case-study-year">
                  {project.year}
                </span>

              </div>

              <button
                type="button"
                className="case-study-close"
                onClick={closeCaseStudy}
                aria-label="Close case study"
              >
                ×
              </button>

            </div>

            {/* Content */}

            <div className="case-study-content">

              <div className="case-study-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

              <div className="case-study-copy">

                <div className="case-study-label">
                  {project.type}
                </div>

                <h2>
                  {project.caseStudyTitle}
                </h2>

                <p>
                  {project.caseStudyText}
                </p>

                <div className="case-study-details">

                  {project.caseStudyDetails.map(
                    (detail, index) => (
                      <div
                        key={detail}
                        className="case-study-detail"
                      >

                        <span>
                          0{index + 1}
                        </span>

                        <strong>
                          {detail}
                        </strong>

                      </div>
                    )
                  )}

                </div>

              </div>

            </div>

            {/* Bottom */}

            <div className="case-study-footer">

              <span>
                {project.title.toUpperCase()}
              </span>

              <button
                type="button"
                onClick={closeCaseStudy}
              >
                CLOSE PROJECT
              </button>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}