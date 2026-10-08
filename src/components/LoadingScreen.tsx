"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import "./LoadingScreen.css";

type LoadingScreenProps = {
  onComplete: () => void;
};

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps) {
  const screenRef = useRef<HTMLDivElement>(null);
  const awRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const descriptorRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================================
         INITIAL STATES
      ===================================================== */

      gsap.set(awRef.current, {
        opacity: 0,
        y: -12,
        filter: "blur(6px)",
      });

      gsap.set(welcomeRef.current, {
        opacity: 0,
        y: 25,
        filter: "blur(10px)",
      });

      gsap.set(portfolioRef.current, {
        opacity: 0,
        y: 45,
        scale: 0.96,
        filter: "blur(12px)",
      });

      gsap.set(descriptorRef.current, {
        opacity: 0,
        y: 18,
        letterSpacing: "12px",
      });

      gsap.set(yearRef.current, {
        opacity: 0,
        y: 15,
      });

      gsap.set(footerRef.current, {
        opacity: 0,
        y: 15,
      });

      gsap.set(beamRef.current, {
        opacity: 0,
        scaleY: 0.2,
      });

      gsap.set(glowRef.current, {
        opacity: 0,
        scale: 0.65,
      });

      /* =====================================================
         CINEMATIC INTRO
      ===================================================== */

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      /* ---------------------------------
         0.0 — subtle atmosphere
      --------------------------------- */

      timeline.to(
        glowRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 2.2,
          ease: "power2.out",
        },
        0
      );

      /* ---------------------------------
         0.8 — AW
      --------------------------------- */

      timeline.to(
        awRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
        },
        0.7
      );

      /* ---------------------------------
         1.5 — WELCOME
      --------------------------------- */

      timeline.to(
        welcomeRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power4.out",
        },
        1.5
      );

      /* ---------------------------------
         2.2 — PORTFOLIO
      --------------------------------- */

      timeline.to(
        portfolioRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.8,
          ease: "power4.out",
        },
        2.2
      );

      /* ---------------------------------
         3.3 — LIGHT BEAM
      --------------------------------- */

      timeline.to(
        beamRef.current,
        {
          opacity: 1,
          scaleY: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        3.25
      );

      timeline.to(
        beamRef.current,
        {
          x: "38vw",
          duration: 2.2,
          ease: "power2.inOut",
        },
        3.45
      );

      /* ---------------------------------
         4.4 — DESCRIPTOR
      --------------------------------- */

      timeline.to(
        descriptorRef.current,
        {
          opacity: 1,
          y: 0,
          letterSpacing: "6px",
          duration: 1.3,
          ease: "power3.out",
        },
        4.4
      );

      /* ---------------------------------
         5.4 — YEAR
      --------------------------------- */

      timeline.to(
        yearRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
        },
        5.4
      );

      /* ---------------------------------
         5.7 — FOOTER
      --------------------------------- */

      timeline.to(
        footerRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        5.7
      );

      /* ---------------------------------
         CINEMATIC HOLD
      --------------------------------- */

      timeline.to({}, {
        duration: 1.8,
      });

      /* ---------------------------------
         EXIT LIGHT
      --------------------------------- */

      timeline.to(
        glowRef.current,
        {
          opacity: 1,
          scale: 2.8,
          duration: 1.6,
          ease: "power2.inOut",
        },
        "+=0.1"
      );

      timeline.to(
        [
          awRef.current,
          welcomeRef.current,
          portfolioRef.current,
          descriptorRef.current,
          yearRef.current,
          footerRef.current,
        ],
        {
          opacity: 0,
          y: -15,
          filter: "blur(8px)",
          duration: 1.1,
          stagger: 0.025,
          ease: "power2.inOut",
        },
        "-=1.2"
      );

      /* ---------------------------------
         SCREEN EXIT
      --------------------------------- */

      timeline.to(
        screenRef.current,
        {
          opacity: 0,
          scale: 1.035,
          duration: 1.15,
          ease: "power3.inOut",
          onComplete,
        },
        "-=0.55"
      );
    }, screenRef);

    return () => {
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <div
      ref={screenRef}
      className="loading-screen"
    >
      {/* =====================================================
          ATMOSPHERIC LIGHT
      ===================================================== */}

      <div
        ref={glowRef}
        className="loading-center-glow"
        aria-hidden="true"
      />

      <div
        className="loading-atmosphere loading-atmosphere-one"
        aria-hidden="true"
      />

      <div
        className="loading-atmosphere loading-atmosphere-two"
        aria-hidden="true"
      />

      <div
        className="loading-grain"
        aria-hidden="true"
      />

      {/* =====================================================
          TOP INFORMATION
      ===================================================== */}

      <div
        ref={awRef}
        className="loading-aw"
      >
        AW
      </div>

      <div className="loading-index">
        01 — 08
      </div>

      {/* =====================================================
          MAIN TITLE
      ===================================================== */}

      <main className="loading-main">
        <div
          ref={welcomeRef}
          className="loading-welcome"
        >
          WELCOME TO MY
        </div>

        <div
          ref={portfolioRef}
          className="loading-portfolio"
        >
          PORTFOLIO
        </div>

        {/* Cinematic light */}
        <div
          ref={beamRef}
          className="loading-beam"
          aria-hidden="true"
        >
          <div className="loading-beam-core" />
          <div className="loading-beam-glow" />
        </div>

        <div
          ref={descriptorRef}
          className="loading-descriptor"
        >
          DIGITAL DESIGN × DEVELOPMENT
        </div>

        <div
          ref={yearRef}
          className="loading-year"
        >
          2026
        </div>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div
        ref={footerRef}
        className="loading-footer"
      >
        <span>UI/UX DESIGNER</span>

        <span className="loading-footer-dot">
          ·
        </span>

        <span>CREATIVE DEVELOPER</span>

        <span className="loading-location">
          AUCKLAND / NEW ZEALAND
        </span>
      </div>
    </div>
  );
}