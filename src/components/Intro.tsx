"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Intro.css";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);

  const titleRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageElementRef = useRef<HTMLImageElement>(null);
  const sideNumberRef = useRef<HTMLDivElement>(null);

  const portraitCardRef = useRef<HTMLDivElement>(null);
  const portraitGlowRef = useRef<HTMLDivElement>(null);
  const portraitReflectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* --------------------------------
         INITIAL STATES
      -------------------------------- */

      gsap.set(titleRef.current, {
        opacity: 0,
        y: -20,
      });

      gsap.set(labelRef.current, {
        opacity: 0,
        y: 25,
      });

      gsap.set(headingRef.current, {
        opacity: 0,
        y: 70,
      });

      gsap.set(descriptionRef.current, {
        opacity: 0,
        y: 35,
      });

      gsap.set(imageRef.current, {
        opacity: 0,
        x: 120,
        scale: 0.92,
        rotateY: -8,
      });

      gsap.set(sideNumberRef.current, {
        opacity: 0,
        x: 35,
      });

      /* --------------------------------
         INTRO ANIMATION
      -------------------------------- */

      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 35%",
          toggleActions: "play none none reverse",
        },
      });

      introTimeline.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      introTimeline.to(
        labelRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.35"
      );

      introTimeline.to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.3"
      );

      introTimeline.to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.55"
      );

      introTimeline.to(
        imageRef.current,
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotateY: 0,
          duration: 1.25,
          ease: "power4.out",
        },
        "-=0.9"
      );

      introTimeline.to(
        sideNumberRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.65"
      );

      /* --------------------------------
         IMAGE SCROLL PARALLAX
      -------------------------------- */

      gsap.to(imageElementRef.current, {
        y: -35,
        scale: 1.035,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(imageRef.current, {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(sideNumberRef.current, {
        y: 55,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* --------------------------------
         MOUSE 3D EFFECT
      -------------------------------- */

      const card = portraitCardRef.current;
      const image = imageRef.current;
      const glow = portraitGlowRef.current;
      const reflection = portraitReflectionRef.current;

      if (!card || !image) return;

      const rotateX = gsap.quickTo(image, "rotationX", {
        duration: 0.6,
        ease: "power3.out",
      });

      const rotateY = gsap.quickTo(image, "rotationY", {
        duration: 0.6,
        ease: "power3.out",
      });

      const moveX = gsap.quickTo(image, "x", {
        duration: 0.7,
        ease: "power3.out",
      });

      const moveY = gsap.quickTo(image, "y", {
        duration: 0.7,
        ease: "power3.out",
      });

      const glowX = glow
        ? gsap.quickTo(glow, "x", {
            duration: 1,
            ease: "power3.out",
          })
        : null;

      const glowY = glow
        ? gsap.quickTo(glow, "y", {
            duration: 1,
            ease: "power3.out",
          })
        : null;

      const reflectionX = reflection
        ? gsap.quickTo(reflection, "x", {
            duration: 0.8,
            ease: "power3.out",
          })
        : null;

      const reflectionY = reflection
        ? gsap.quickTo(reflection, "y", {
            duration: 0.8,
            ease: "power3.out",
          })
        : null;

      const handleMouseMove = (event: MouseEvent) => {
        if (window.innerWidth < 900) return;

        const rect = card.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) / rect.width - 0.5;

        const y =
          (event.clientY - rect.top) / rect.height - 0.5;

        const rotateYValue = x * 12;
        const rotateXValue = -y * 10;

        rotateX(rotateXValue);
        rotateY(rotateYValue);

        moveX(x * 12);
        moveY(y * 8);

        if (glowX && glowY) {
          glowX(x * 30);
          glowY(y * 20);
        }

        if (reflectionX && reflectionY) {
          reflectionX(-x * 20);
          reflectionY(-y * 15);
        }
      };

      const handleMouseEnter = () => {
        if (window.innerWidth < 900) return;

        gsap.to(image, {
          scale: 1.025,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(card, {
          z: 20,
          duration: 0.6,
          ease: "power3.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(image, {
          rotationX: 0,
          rotationY: 0,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.to(card, {
          z: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        if (glowX && glowY) {
          glowX(0);
          glowY(0);
        }

        if (reflectionX && reflectionY) {
          reflectionX(0);
          reflectionY(0);
        }
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      /* --------------------------------
         CLEANUP
      -------------------------------- */

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="intro"
      id="about"
    >
      {/* --------------------------------
          HEADER
      -------------------------------- */}

      <header className="intro-header">
        <div
          ref={titleRef}
          className="intro-header-title"
        >
          Introduction
        </div>

        <div className="intro-header-meta">
          ABOUT / 03
        </div>
      </header>

      {/* --------------------------------
          MAIN CONTENT
      -------------------------------- */}

      <div className="intro-main">

        {/* TEXT */}

        <div className="intro-copy">

          <div
            ref={labelRef}
            className="intro-label"
          >
            ABOUT ME
          </div>

          <h2
            ref={headingRef}
            className="intro-heading"
          >
            I DESIGN
            <br />
            DIGITAL
            <br />
            EXPERIENCES.
          </h2>

          <p
            ref={descriptionRef}
            className="intro-description"
          >
            Combining creativity, design and
            technology to build meaningful
            digital products and brands.
          </p>

          <div className="intro-role">
            UI/UX DESIGNER
            <span>·</span>
            CREATIVE DEVELOPER
          </div>

        </div>

        {/* --------------------------------
            3D PORTRAIT
        -------------------------------- */}

        <div
          ref={portraitCardRef}
          className="intro-portrait-stage"
        >

          <div
            ref={portraitGlowRef}
            className="portrait-glow"
          />

          <div className="portrait-grid" />

          <div className="portrait-frame-back" />

          <div
            ref={imageRef}
            className="intro-visual"
          >

            <div className="portrait-top-label">
              PORTRAIT
              <span>03</span>
            </div>

            <div className="portrait-image-shell">

              <img
                ref={imageElementRef}
                src="/profile.jpeg"
                alt="Portrait of Amith Wishva"
                className="intro-image"
              />

              <div
                ref={portraitReflectionRef}
                className="portrait-reflection"
              />

              <div className="portrait-light-sweep" />

            </div>

            <div className="portrait-corner portrait-corner-tl" />
            <div className="portrait-corner portrait-corner-tr" />
            <div className="portrait-corner portrait-corner-bl" />
            <div className="portrait-corner portrait-corner-br" />

          </div>

          <div className="portrait-depth-shadow" />

          <div className="portrait-side-label">
            AMITH
            <br />
            WISHVA
          </div>

        </div>

        {/* NUMBER */}

        <div
          ref={sideNumberRef}
          className="intro-side-number"
        >
          01
        </div>

      </div>

      <div className="intro-corner intro-corner-top" />
      <div className="intro-corner intro-corner-bottom" />

    </section>
  );
}