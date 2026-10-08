"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Process.css";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "UNDERSTAND THE PROBLEM",
    description:
      "I start by understanding the problem, the audience and the goals behind the experience. Every strong digital product begins with the right questions.",
    keywords: ["RESEARCH", "AUDIENCE", "GOALS"],
  },
  {
    number: "02",
    title: "DEFINE",
    subtitle: "CREATE THE DIRECTION",
    description:
      "I turn insights into a clear direction — defining the structure, requirements and experience before moving into visual design.",
    keywords: ["STRATEGY", "STRUCTURE", "DIRECTION"],
  },
  {
    number: "03",
    title: "DESIGN",
    subtitle: "SHAPE THE EXPERIENCE",
    description:
      "I create wireframes, interfaces and visual systems that balance usability with strong visual identity. Every detail has a purpose.",
    keywords: ["WIREFRAMES", "UI / UX", "VISUAL SYSTEM"],
  },
  {
    number: "04",
    title: "DEVELOP",
    subtitle: "TURN DESIGN INTO CODE",
    description:
      "I bring the experience to life with modern web technologies, responsive layouts, interactions, animation and functional systems.",
    keywords: ["REACT", "NEXT.JS", "INTERACTION"],
  },
  {
    number: "05",
    title: "REFINE",
    subtitle: "POLISH EVERY DETAIL",
    description:
      "I test, iterate and refine the final experience — improving performance, responsiveness and interaction until everything feels intentional.",
    keywords: ["TEST", "ITERATE", "POLISH"],
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const activeLineRef = useRef<HTMLDivElement | null>(null);
  const stepsRef = useRef<HTMLDivElement | null>(null);
  const statementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const progress = progressRef.current;
    const activeLine = activeLineRef.current;
    const steps = stepsRef.current;
    const statement = statementRef.current;

    if (!section || !progress || !activeLine || !steps || !statement) {
      return;
    }

    const ctx = gsap.context(() => {
      const stepElements = gsap.utils.toArray<HTMLElement>(".process-step");
      const nodes = gsap.utils.toArray<HTMLElement>(".process-node");
      const lines = gsap.utils.toArray<HTMLElement>(".process-step-line");

      gsap.set(stepElements, {
        opacity: 0.22,
        y: 35,
        scale: 0.96,
      });

      gsap.set(stepElements[0], {
        opacity: 1,
        y: 0,
        scale: 1,
      });

      gsap.set(activeLine, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(progress, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(nodes, {
        opacity: 0.28,
        scale: 0.75,
      });

      gsap.set(nodes[0], {
        opacity: 1,
        scale: 1,
      });

      gsap.fromTo(
        ".process-eyebrow",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".process-title-line",
        {
          opacity: 0,
          y: 80,
          rotateX: 20,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".process-intro",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            once: true,
          },
        }
      );

      gsap.to(activeLine, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: steps,
          start: "top 68%",
          end: "bottom 65%",
          scrub: 0.8,
        },
      });

      gsap.to(progress, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: steps,
          start: "top 68%",
          end: "bottom 65%",
          scrub: 0.8,
        },
      });

      stepElements.forEach((step, index) => {
        const start = index === 0 ? "top 72%" : "top 66%";
        const end = index === stepElements.length - 1 ? "bottom 52%" : "bottom 48%";

        gsap.to(step, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start,
            end,
            toggleActions: "play reverse play reverse",
          },
        });

        if (nodes[index]) {
          gsap.to(nodes[index], {
            opacity: 1,
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 64%",
              end: "bottom 55%",
              toggleActions: "play reverse play reverse",
            },
          });
        }

        if (lines[index]) {
          gsap.to(lines[index], {
            opacity: 1,
            scaleX: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 62%",
              end: "bottom 55%",
              toggleActions: "play reverse play reverse",
            },
          });
        }
      });

      gsap.fromTo(
        ".process-final",
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".process-final",
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.to(".process-orb", {
        y: -35,
        x: 25,
        rotation: 12,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".process-background-word", {
        xPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".process-grid", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    gsap.to(".process-orb", {
      x: x * 45,
      y: y * 35,
      duration: 0.8,
      ease: "power3.out",
      overwrite: true,
    });

    gsap.to(".process-glow", {
      x: x * 80,
      y: y * 55,
      duration: 1,
      ease: "power3.out",
      overwrite: true,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(".process-orb", {
      x: 0,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(".process-glow", {
      x: 0,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="process"
      id="process"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="process-background-word" aria-hidden="true">
        PROCESS
      </div>

      <div className="process-grid" aria-hidden="true" />

      <div className="process-glow process-glow-one" aria-hidden="true" />
      <div className="process-glow process-glow-two" aria-hidden="true" />

      <div className="process-orb" aria-hidden="true">
        <div className="process-orb-core" />
        <div className="process-orb-ring process-orb-ring-one" />
        <div className="process-orb-ring process-orb-ring-two" />
      </div>

      <div className="process-container">
        <header className="process-header">
          <div className="process-eyebrow">
            <span>07</span>
            <span className="process-eyebrow-line" />
            <span>08</span>
            <span className="process-eyebrow-label">
              MY PROCESS
            </span>
            <span className="process-year">2026</span>
          </div>

          <div className="process-heading">
            <div className="process-title-line">FROM</div>
            <div className="process-title-line process-title-outline">
              CONCEPT
            </div>
            <div className="process-title-line">TO</div>
            <div className="process-title-line process-title-accent">
              EXPERIENCE.
            </div>
          </div>

          <p className="process-intro">
            A structured approach where strategy, design and
            technology come together to create meaningful digital
            experiences.
          </p>
        </header>

        <div className="process-track" ref={stepsRef}>
          <div className="process-progress">
            <div
              ref={progressRef}
              className="process-progress-active"
            />
          </div>

          <div className="process-line">
            <div
              ref={activeLineRef}
              className="process-line-active"
            />
          </div>

          <div className="process-nodes">
            {processSteps.map((step, index) => (
              <div
                className={`process-node-wrapper ${
                  index === 0 ? "is-first" : ""
                }`}
                key={step.number}
              >
                <div
                  className="process-node"
                  data-index={index}
                >
                  <span>{step.number}</span>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="process-step-line" />
                )}
              </div>
            ))}
          </div>

          <div className="process-steps">
            {processSteps.map((step) => (
              <article
                className="process-step"
                key={step.number}
              >
                <div className="process-step-number">
                  {step.number}
                </div>

                <div className="process-step-content">
                  <div className="process-step-meta">
                    <span>{step.subtitle}</span>
                  </div>

                  <h2>{step.title}</h2>

                  <p>{step.description}</p>

                  <div className="process-keywords">
                    {step.keywords.map((keyword) => (
                      <span key={keyword}>{keyword}</span>
                    ))}
                  </div>
                </div>

                <div className="process-step-mark">
                  <span />
                  <span />
                  <span />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="process-final">
          <div className="process-final-label">
            DESIGN · DEVELOPMENT · EXPERIENCE
          </div>

          <h2>
            EVERY DETAIL
            <br />
            <span>HAS A PURPOSE.</span>
          </h2>

          <div className="process-final-bottom">
            <span>07 / 08</span>

            <span className="process-final-line" />

            <span>NEXT — CONTACT</span>
          </div>
        </div>
      </div>
    </section>
  );
}