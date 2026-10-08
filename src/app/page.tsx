"use client";

import { useState } from "react";

import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import VisualCampaigns from "@/components/VisualCampaigns";
import CreativeDevelopment from "@/components/CreativeDevelopment";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <main className="portfolio">

      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      {loadingComplete && (
        <div
          className="global-background"
          aria-hidden="true"
        >
          <div className="global-glow global-glow-one" />
          <div className="global-glow global-glow-two" />
          <div className="global-glow global-glow-three" />
          <div className="global-light-beam" />
        </div>
      )}


      {/* =====================================================
          LOADING SCREEN
      ===================================================== */}

      {!loadingComplete && (
        <LoadingScreen
          onComplete={() => setLoadingComplete(true)}
        />
      )}


      {/* =====================================================
          MAIN PORTFOLIO
      ===================================================== */}

      {loadingComplete && (
        <div className="portfolio-content">

          {/* =================================================
              SCREEN 02 — HERO
          ================================================= */}

          <Hero />


          {/* =================================================
              ABOUT
          ================================================= */}

          <section
            id="about"
            className="anchor-section"
          >
            <Intro />
          </section>


          {/* =================================================
              SCREEN 03 — SKILLS
          ================================================= */}

          <Skills />


          {/* =================================================
              SCREEN 04 — PROJECTS
              
              IMPORTANT:
              The WORK navigation points here.
          ================================================= */}

          <section
            id="work"
            className="anchor-section"
          >
            <Projects />
          </section>


          {/* =================================================
              SCREEN 05 — VISUAL CAMPAIGNS
          ================================================= */}

          <VisualCampaigns />


          {/* =================================================
              SCREEN 06 — CREATIVE DEVELOPMENT
          ================================================= */}

          <CreativeDevelopment />


          {/* =================================================
              SCREEN 07 — PROCESS
          ================================================= */}

          <Process />


          {/* =================================================
              SCREEN 08 — CONTACT
              
              The CONTACT navigation points here.
          ================================================= */}

          <section
            id="contact"
            className="anchor-section"
          >
            <Contact />
          </section>

        </div>
      )}

    </main>
  );
}