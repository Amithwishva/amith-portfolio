"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./VisualCampaigns.css";

gsap.registerPlugin(ScrollTrigger);

type VisualProject = {
  id: string;
  client: string;
  category: string;
  title: string;
  image: string;
};

const visuals: VisualProject[] = [
  {
    id: "01",
    client: "THAMES COLLISION REPAIRS",
    category: "AUTOMOTIVE CAMPAIGN",
    title: "ACCIDENT REPAIR",
    image: "/thames-accident.png",
  },
  {
    id: "02",
    client: "THAMES COLLISION REPAIRS",
    category: "SOCIAL MEDIA CAMPAIGN",
    title: "NEW PAGE LAUNCH",
    image: "/thames-welcome.png",
  },
  {
    id: "03",
    client: "NGATEA PANELBEATERS",
    category: "CONTENT CAMPAIGN",
    title: "ASK THE MECHANIC",
    image: "/npb-mechanic.png",
  },
  {
    id: "04",
    client: "NGATEA PANELBEATERS",
    category: "SERVICE CAMPAIGN",
    title: "DENT REPAIR",
    image: "/npb-damage.png",
  },
  {
    id: "05",
    client: "NGATEA PANELBEATERS",
    category: "SERVICE CAMPAIGN",
    title: "WINDSCREEN REPAIR",
    image: "/npb-windscreen.png",
  },
];

export default function VisualCampaigns() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const [selected, setSelected] =
    useState<VisualProject | null>(null);

  /*
   * =========================================================
   * GSAP / SCROLL ANIMATIONS
   * =========================================================
   */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = headerRef.current;

      if (header) {
        gsap.fromTo(
          header,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      /*
       * HEADER WORD REVEAL
       */

      gsap.fromTo(
        ".visual-campaigns-title-small",
        {
          opacity: 0,
          x: -40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".visual-campaigns-title-wrap h2",
        {
          opacity: 0,
          x: 60,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1.2,
          delay: 0.18,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /*
       * CLIENT HEADINGS
       */

      const clientHeadings =
        gsap.utils.toArray<HTMLElement>(
          ".visual-client-heading"
        );

      clientHeadings.forEach((heading) => {
        gsap.fromTo(
          heading,
          {
            opacity: 0,
            y: 45,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 82%",
              toggleActions:
                "play none none reverse",
            },
          }
        );
      });

      /*
       * POSTER ENTRANCE
       */

      const cards =
        gsap.utils.toArray<HTMLElement>(
          ".visual-card"
        );

      cards.forEach((card, index) => {
        const direction =
          index % 2 === 0 ? -1 : 1;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 90,
            x: direction * 35,
            rotate: direction * 1.4,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            rotate: direction * 0.8,
            scale: 1,
            duration: 1.15,
            delay: index * 0.06,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions:
                "play none none reverse",
            },
          }
        );

        /*
         * SUBTLE SCROLL PARALLAX
         */

        gsap.to(card, {
          y: -12,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        });
      });

      /*
       * FOOTER PARALLAX
       */

      gsap.to(".visual-footer-number", {
        y: 90,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      /*
       * BACKGROUND ORB MOVEMENT
       */

      gsap.to(".visual-campaigns-glow-one", {
        x: 100,
        y: 80,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(".visual-campaigns-glow-two", {
        x: -100,
        y: -100,
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  /*
   * =========================================================
   * CURSOR GLOW
   * =========================================================
   */

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const moveCursor = (event: MouseEvent) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  /*
   * =========================================================
   * MODAL
   * =========================================================
   */

  useEffect(() => {
    document.body.style.overflow = selected
      ? "hidden"
      : "";

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selected]);

  /*
   * =========================================================
   * CARD MOUSE TILT
   * =========================================================
   */

  const handleCardMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const card =
      event.currentTarget;

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const rotateY =
      ((x / rect.width) - 0.5) * 5;

    const rotateX =
      ((y / rect.height) - 0.5) * -5;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleCardLeave = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    gsap.to(event.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  /*
   * =========================================================
   * RENDER CARD
   * =========================================================
   */

  const renderCard = (
    item: VisualProject,
    index: number
  ) => {
    return (
      <article
        key={item.id}
        className={`visual-card visual-card-${index + 1}`}
        onMouseMove={handleCardMove}
        onMouseLeave={handleCardLeave}
        onClick={() => setSelected(item)}
      >
        <div className="visual-card-shadow" />

        <div className="visual-card-frame">
          <div className="visual-card-top-line" />

          <div className="visual-card-number">
            {item.id}
          </div>

          <div className="visual-card-status">
            SELECTED WORK
          </div>

          <img
            src={item.image}
            alt={`${item.client} — ${item.title}`}
            className="visual-card-image"
          />

          <div className="visual-card-vignette" />

          <div className="visual-card-overlay">
            <span>
              {item.category}
            </span>

            <strong>
              {item.title}
            </strong>

            <small>
              VIEW PROJECT
              <i>↗</i>
            </small>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="visual-campaigns"
      id="visuals"
    >
      {/* =====================================================
          CURSOR
          ===================================================== */}

      <div
        ref={cursorRef}
        className="visual-cursor-glow"
        aria-hidden="true"
      />

      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div
        className="visual-campaigns-grid"
        aria-hidden="true"
      />

      <div
        className="visual-campaigns-glow visual-campaigns-glow-one"
        aria-hidden="true"
      />

      <div
        className="visual-campaigns-glow visual-campaigns-glow-two"
        aria-hidden="true"
      />

      <div
        className="visual-campaigns-noise"
        aria-hidden="true"
      />

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header
        ref={headerRef}
        className="visual-campaigns-header"
      >
        <div className="visual-campaigns-header-top">
          <div className="visual-header-index">
            <span>05</span>
            <i />
            <span>08</span>
          </div>

          <span>
            SELECTED VISUAL WORK
          </span>

          <span>
            2026
          </span>
        </div>

        <div className="visual-campaigns-title-wrap">
          <div className="visual-campaigns-title-small">
            VISUAL
          </div>

          <h2>
            CAMPAIGNS
          </h2>
        </div>

        <div className="visual-campaigns-description">
          <span>01</span>

          <p>
            Visual campaigns and social media
            content created for real-world brands,
            businesses and marketing campaigns.
          </p>
        </div>

        <div className="visual-header-line">
          <span>
            ART DIRECTION
          </span>

          <span>
            BRAND COMMUNICATION
          </span>

          <span>
            SOCIAL MEDIA
          </span>

          <span>
            DIGITAL DESIGN
          </span>
        </div>
      </header>

      {/* =====================================================
          CLIENT 01 — THAMES
          ===================================================== */}

      <div className="visual-client visual-client-thames">
        <div className="visual-client-heading">
          <div className="visual-client-title">
            <span>
              CLIENT 01
            </span>

            <h3>
              THAMES
            </h3>

            <p>
              COLLISION REPAIRS
            </p>
          </div>

          <div className="visual-client-meta">
            <span>
              SOCIAL MEDIA
            </span>

            <span>
              BRAND COMMUNICATION
            </span>

            <span>
              02 PIECES
            </span>
          </div>
        </div>

        <div className="visual-client-rule">
          <span />
          <small>
            AUTOMOTIVE / 01
          </small>
        </div>

        <div className="visual-gallery visual-gallery-thames">
          {visuals
            .slice(0, 2)
            .map((item, index) =>
              renderCard(item, index)
            )}
        </div>
      </div>

      {/* =====================================================
          CLIENT 02 — NGATEA
          ===================================================== */}

      <div className="visual-client visual-client-ngatea">
        <div className="visual-client-heading">
          <div className="visual-client-title">
            <span>
              CLIENT 02
            </span>

            <h3>
              NGATEA
            </h3>

            <p>
              PANELBEATERS LTD
            </p>
          </div>

          <div className="visual-client-meta">
            <span>
              CONTENT SERIES
            </span>

            <span>
              SERVICE PROMOTION
            </span>

            <span>
              03 PIECES
            </span>
          </div>
        </div>

        <div className="visual-client-rule">
          <span />
          <small>
            AUTOMOTIVE / 02
          </small>
        </div>

        <div className="visual-gallery visual-gallery-ngatea">
          {visuals
            .slice(2)
            .map((item, index) =>
              renderCard(item, index + 2)
            )}
        </div>
      </div>

      {/* =====================================================
          FINAL STATEMENT
          ===================================================== */}

      <div className="visual-campaigns-footer">
        <div className="visual-campaigns-footer-line">
          <span />
        </div>

        <div className="visual-campaigns-footer-content">
          <div className="visual-footer-label">
            <span />
            <p>
              VISUAL DESIGN / 05
            </p>
          </div>

          <h3>
            EVERY BRAND
            <br />
            HAS A STORY.
          </h3>

          <p>
            I turn ideas, services and brands
            into visual experiences people
            remember.
          </p>

          <div className="visual-footer-meta">
            <span>
              ART DIRECTION
            </span>

            <span>
              SOCIAL CONTENT
            </span>

            <span>
              DIGITAL DESIGN
            </span>
          </div>
        </div>

        <div className="visual-footer-number">
          05
        </div>
      </div>

      {/* =====================================================
          FULLSCREEN POSTER MODAL
          ===================================================== */}

      {selected && (
        <div
          className="visual-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.client} ${selected.title}`}
        >
          <div
            className="visual-modal-backdrop"
            onClick={() =>
              setSelected(null)
            }
          />

          <div className="visual-modal-content">
            <button
              className="visual-modal-close"
              type="button"
              onClick={() =>
                setSelected(null)
              }
              aria-label="Close project"
            >
              <span />
              <span />
            </button>

            <div className="visual-modal-top">
              <span>
                SELECTED CAMPAIGN
              </span>

              <span>
                {selected.id} / 05
              </span>
            </div>

            <div className="visual-modal-image">
              <img
                src={selected.image}
                alt={`${selected.client} — ${selected.title}`}
              />
            </div>

            <div className="visual-modal-info">
              <div className="visual-modal-project">
                <span>
                  {selected.client}
                </span>

                <h3>
                  {selected.title}
                </h3>
              </div>

              <div className="visual-modal-category">
                <span>
                  CATEGORY
                </span>

                <strong>
                  {selected.category}
                </strong>
              </div>
            </div>

            <div className="visual-modal-bottom">
              <span>
                PRESS ESC TO CLOSE
              </span>

              <span>
                VISUAL CAMPAIGNS / 2026
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}