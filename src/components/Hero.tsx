"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import "./Hero.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const artifactRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const visual = visualRef.current;
    const artifact = artifactRef.current;

    if (!hero || !visual || !artifact) return;

    const ctx = gsap.context(() => {
      /*
       * ------------------------------------------------
       * INITIAL STATES
       * ------------------------------------------------
       */

      gsap.set(navRef.current, {
        opacity: 0,
        y: -20,
      });

      gsap.set(contentRef.current, {
        opacity: 0,
        x: -45,
      });

      gsap.set(visual, {
        opacity: 0,
        x: 55,
        scale: 0.92,
      });

      gsap.set(artifact, {
        opacity: 0,
        scale: 0.82,
        rotation: -8,
      });

      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 25,
        scale: 0.92,
      });

      gsap.set(scrollRef.current, {
        opacity: 0,
      });

      /*
       * ------------------------------------------------
       * HERO INTRO
       * ------------------------------------------------
       */

      const intro = gsap.timeline({
        delay: 0.15,
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .to(navRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
        })
        .to(
          contentRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 1.15,
          },
          "-=0.45"
        )
        .to(
          visual,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.25,
            ease: "power4.out",
          },
          "-=0.8"
        )
        .to(
          artifact,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.35,
            ease: "power4.out",
          },
          "-=0.95"
        )
        .to(
          cardsRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .to(
          scrollRef.current,
          {
            opacity: 1,
            duration: 0.7,
          },
          "-=0.35"
        );

      /*
       * ------------------------------------------------
       * FLOATING ARTIFACT
       * ------------------------------------------------
       */

      gsap.to(artifact, {
        y: -10,
        rotation: 1.5,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
       * ------------------------------------------------
       * FLOATING CARDS
       * ------------------------------------------------
       */

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.to(card, {
          y: index % 2 === 0 ? -8 : 8,
          rotation: index % 2 === 0 ? 1 : -1,
          duration: 3.2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.25,
        });
      });

      /*
       * ------------------------------------------------
       * MOUSE PARALLAX
       * ------------------------------------------------
       */

      const handlePointerMove = (event: PointerEvent) => {
        const rect = hero.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
            rect.width -
          0.5;

        const y =
          (event.clientY - rect.top) /
            rect.height -
          0.5;

        gsap.to(artifact, {
          x: x * 18,
          rotationY: x * 7,
          rotationX: -y * 6,
          duration: 1.1,
          ease: "power3.out",
          overwrite: "auto",
        });

        cardsRef.current.forEach((card, index) => {
          if (!card) return;

          const strength =
            10 + index * 2;

          gsap.to(card, {
            x: x * strength,
            y: y * strength,
            duration: 1.2,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      };

      const handlePointerLeave = () => {
        gsap.to(artifact, {
          x: 0,
          rotationY: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        cardsRef.current.forEach((card) => {
          if (!card) return;

          gsap.to(card, {
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          });
        });
      };

      hero.addEventListener(
        "pointermove",
        handlePointerMove
      );

      hero.addEventListener(
        "pointerleave",
        handlePointerLeave
      );

      /*
       * ------------------------------------------------
       * CLEANUP
       * ------------------------------------------------
       */

      return () => {
        hero.removeEventListener(
          "pointermove",
          handlePointerMove
        );

        hero.removeEventListener(
          "pointerleave",
          handlePointerLeave
        );
      };
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const addCardRef = (
    element: HTMLDivElement | null
  ) => {
    if (
      element &&
      !cardsRef.current.includes(element)
    ) {
      cardsRef.current.push(element);
    }
  };

  return (
    <section
      ref={heroRef}
      className="hero"
      id="home"
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        className="hero-grid"
        aria-hidden="true"
      />

      <div
        className="hero-glow hero-glow-main"
        aria-hidden="true"
      />

      <div
        className="hero-glow hero-glow-purple"
        aria-hidden="true"
      />

      <div
        className="hero-noise"
        aria-hidden="true"
      />

      {/* =================================================
          NAVIGATION
      ================================================= */}

      <nav
        ref={navRef}
        className="hero-nav"
      >
        <a
          href="#home"
          className="hero-logo"
          aria-label="Home"
        >
          AW
        </a>

        <div className="hero-nav-links">
          <a href="#work">
            WORK
          </a>

          <a href="#about">
            ABOUT
          </a>

          <a href="#contact">
            CONTACT
          </a>
        </div>

        <button
          className="hero-menu"
          type="button"
          aria-label="Menu"
        >
          <span />
          <span />
        </button>
      </nav>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div
        ref={contentRef}
        className="hero-content"
      >
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          <span>
            CREATIVE DIGITAL DESIGNER
          </span>
        </div>

        <h1 className="hero-title">
          <span className="hero-title-solid">
            AMITH
          </span>

          <span className="hero-title-outline">
            WISHVA
          </span>
        </h1>

        <div className="hero-subtitle">
          <span>
            UI/UX DESIGNER
          </span>

          <span className="hero-subtitle-dot">
            ·
          </span>

          <span>
            CREATIVE DEVELOPER
          </span>
        </div>

        {/* =================================================
            HERO CATEGORY NAV
        ================================================= */}

        <div className="hero-categories">
          <a
            href="#work"
            className="hero-category active"
          >
            <span className="category-number">
              01
            </span>

            <span className="category-name">
              DESIGN
            </span>

            <span className="category-line" />
          </a>

          <a
            href="#work"
            className="hero-category"
          >
            <span className="category-number">
              02
            </span>

            <span className="category-name">
              DEVELOPMENT
            </span>

            <span className="category-line" />
          </a>

          <a
            href="#work"
            className="hero-category"
          >
            <span className="category-number">
              03
            </span>

            <span className="category-name">
              DIGITAL
            </span>

            <span className="category-line" />
          </a>

          <a
            href="#work"
            className="hero-category"
          >
            <span className="category-number">
              04
            </span>

            <span className="category-name">
              EXPERIENCE
            </span>

            <span className="category-line" />
          </a>
        </div>
      </div>

      {/* =================================================
          DIGITAL ARTIFACT
      ================================================= */}

      <div
        ref={visualRef}
        className="hero-visual"
        aria-hidden="true"
      >
        <div className="hero-visual-label">
          <span className="label-dot" />
          DIGITAL EXPERIENCE
        </div>

        <div
          ref={artifactRef}
          className="digital-artifact"
        >
          {/* Outer glow */}

          <div className="artifact-glow" />

          {/* Orbit rings */}

          <div className="artifact-orbit artifact-orbit-one" />

          <div className="artifact-orbit artifact-orbit-two" />

          <div className="artifact-orbit artifact-orbit-three" />

          {/* Main glass shape */}

          <div className="artifact-core">
            <div className="artifact-core-inner">
              <div className="artifact-core-shine" />

              <div className="artifact-core-grid" />

              <div className="artifact-core-symbol">
                <span />
                <span />
                <span />
              </div>

              <div className="artifact-core-label">
                <span>
                  DIGITAL
                </span>

                <strong>
                  01
                </strong>
              </div>
            </div>
          </div>

          {/* Floating glass cards */}

          <div
            ref={addCardRef}
            className="artifact-card artifact-card-ui"
          >
            <div className="artifact-card-top">
              <span>
                01 / UI
              </span>

              <span>
                ↗
              </span>
            </div>

            <div className="artifact-mini-image">
              <div className="mini-image-line line-one" />
              <div className="mini-image-line line-two" />
              <div className="mini-image-line line-three" />
            </div>

            <strong>
              UI / UX
            </strong>
          </div>

          <div
            ref={addCardRef}
            className="artifact-card artifact-card-code"
          >
            <div className="artifact-card-top">
              <span>
                02 / DEV
              </span>

              <span>
                ↗
              </span>
            </div>

            <div className="code-lines">
              <span />
              <span />
              <span />
              <span />
            </div>

            <strong>
              DEVELOPMENT
            </strong>
          </div>

          <div
            ref={addCardRef}
            className="artifact-card artifact-card-experience"
          >
            <div className="experience-icon">
              ◇
            </div>

            <div>
              <span>
                DIGITAL
              </span>

              <strong>
                EXPERIENCE
              </strong>
            </div>
          </div>

          {/* Small orbiting nodes */}

          <span className="artifact-node node-one" />
          <span className="artifact-node node-two" />
          <span className="artifact-node node-three" />
          <span className="artifact-node node-four" />
        </div>

        <div className="hero-visual-footer">
          <span>
            DESIGN
          </span>

          <span className="footer-divider" />

          <span>
            DEVELOP
          </span>

          <span className="footer-divider" />

          <span>
            EXPERIENCE
          </span>
        </div>
      </div>

      {/* =================================================
          SCROLL
      ================================================= */}

      <div
        ref={scrollRef}
        className="hero-scroll"
      >
        <span>
          SCROLL TO EXPLORE
        </span>

        <div className="scroll-line">
          <div />
        </div>
      </div>

      {/* =================================================
          PAGE NUMBER
      ================================================= */}

      <div className="hero-index">
        <span>
          02
        </span>

        <i />

        <span>
          08
        </span>
      </div>

      {/* =================================================
          CORNER MARK
      ================================================= */}

      <div
        className="hero-corner-mark"
        aria-hidden="true"
      >
        <span />
        <span />
      </div>
    </section>
  );
}