/*
 * SiteForge Studio — Portfolio Page
 * Design: Quiet Luxury Editorial
 * Concept redesign projects with before/after showcase
 */

import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const BEFORE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439451125/LzaPoWkcNdDGqAHqEaCNq8/before-after-old-E4LUpkkAu9yYfVTL9zgPAr.webp";
const AFTER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439451125/LzaPoWkcNdDGqAHqEaCNq8/before-after-new-SeWohT3ywF749ioHEQgz7b.webp";
const RESTAURANT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439451125/LzaPoWkcNdDGqAHqEaCNq8/portfolio-restaurant-TLppdqrMn3CXxHtqfoSpLa.webp";
const FITNESS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439451125/LzaPoWkcNdDGqAHqEaCNq8/portfolio-fitness-84uvyZtAq64cGy44PHXjn9.png";

const projects = [
  {
    id: 1,
    category: "Wellness Spa",
    title: "Tranquil Waters Spa",
    description:
      "A complete redesign of an outdated spa website. The new design uses a clean sage green and white palette, elegant typography, and a streamlined booking flow that increased online inquiries by over 40%.",
    type: "Full Redesign",
    beforeImg: BEFORE_IMG,
    afterImg: AFTER_IMG,
    tags: ["Redesign", "Wellness", "Booking Flow"],
  },
  {
    id: 2,
    category: "Fine Dining",
    title: "Luminary Restaurant",
    description:
      "A concept redesign for a fine dining restaurant that needed a website matching the quality of their food. Dark, moody aesthetic with warm amber accents and large food photography to evoke the dining experience.",
    type: "Concept Design",
    afterImg: RESTAURANT_IMG,
    tags: ["Restaurant", "Concept", "Luxury"],
  },
  {
    id: 3,
    category: "Fitness Studio",
    title: "Apex Fitness Studio",
    description:
      "A bold, high-energy redesign for a fitness studio. Black and white with a yellow accent creates a strong, dynamic brand presence. Clean class schedule layout and prominent membership CTA.",
    type: "Concept Design",
    afterImg: FITNESS_IMG,
    tags: ["Fitness", "Concept", "Bold Design"],
  },
];

const categories = ["All", "Wellness", "Restaurant", "Fitness", "Salon", "Service"];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="pt-36 pb-20" style={{ backgroundColor: "var(--color-warm-gray)" }}>
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-5">
              <span className="accent-line" />
              <span className="section-label">Our Work</span>
            </div>
            <h1
              className="font-display max-w-2xl mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--color-charcoal)",
                letterSpacing: "-0.02em",
              }}
            >
              Concept redesigns that show what's possible.
            </h1>
            <p
              className="font-body max-w-xl"
              style={{ fontSize: "1.1rem", color: "var(--color-mid-gray)", lineHeight: 1.7 }}
            >
              We create concept redesigns to demonstrate exactly how your website could look with a modern upgrade — before you commit to anything.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Concept Explanation */}
      <section className="py-16 bg-white">
        <div className="container">
          <AnimatedSection>
            <div
              className="p-8 md:p-10"
              style={{
                backgroundColor: "var(--color-forest-muted)",
                borderLeft: "3px solid var(--color-forest)",
                borderRadius: "0 2px 2px 0",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <p className="section-label mb-3">How Our Portfolio Works</p>
                  <h3
                    className="font-display mb-3"
                    style={{ fontSize: "1.6rem", fontWeight: 400, color: "var(--color-charcoal)" }}
                  >
                    Concept redesigns — real results, zero risk.
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--color-charcoal)" }}>
                    The projects below are concept redesigns created by SiteForge Studio to demonstrate the transformation possible for small businesses. We build these concepts to show business owners exactly what their new website could look like — so there are no surprises. Request your own free concept today.
                  </p>
                </div>
                <div className="flex justify-start md:justify-end">
                  <Link href="/contact" className="btn-forest">
                    Get Your Free Concept
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project: Before/After */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="accent-line" />
              <span className="section-label">Featured Project</span>
            </div>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <span
                  className="font-heading text-xs font-semibold uppercase tracking-widest px-2 py-1 mb-3 inline-block"
                  style={{ backgroundColor: "var(--color-forest-muted)", color: "var(--color-forest)" }}
                >
                  {projects[0].category}
                </span>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    fontWeight: 400,
                    color: "var(--color-charcoal)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {projects[0].title}
                </h2>
              </div>
              <span
                className="font-heading text-xs font-semibold uppercase tracking-widest px-3 py-1 self-start"
                style={{
                  border: "1px solid var(--color-border-subtle)",
                  color: "var(--color-mid-gray)",
                  letterSpacing: "0.12em",
                }}
              >
                {projects[0].type}
              </span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <AnimatedSection delay={0.1}>
              <div>
                <span
                  className="font-heading text-xs font-semibold uppercase tracking-widest px-3 py-1 mb-4 inline-block"
                  style={{ backgroundColor: "#FEE2E2", color: "#DC2626", letterSpacing: "0.12em" }}
                >
                  Before
                </span>
                <div
                  className="overflow-hidden"
                  style={{ border: "1px solid var(--color-border-subtle)", borderRadius: "2px" }}
                >
                  <img src={projects[0].beforeImg} alt="Before redesign" className="w-full h-auto" loading="lazy" />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div>
                <span
                  className="font-heading text-xs font-semibold uppercase tracking-widest px-3 py-1 mb-4 inline-block"
                  style={{ backgroundColor: "var(--color-forest-muted)", color: "var(--color-forest)", letterSpacing: "0.12em" }}
                >
                  After
                </span>
                <div
                  className="overflow-hidden"
                  style={{ border: "1px solid var(--color-border-subtle)", borderRadius: "2px" }}
                >
                  <img src={projects[0].afterImg} alt="After redesign" className="w-full h-auto" loading="lazy" />
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.1}>
            <p className="font-body text-sm leading-relaxed max-w-2xl" style={{ color: "var(--color-mid-gray)" }}>
              {projects[0].description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {projects[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="font-heading text-xs font-medium uppercase tracking-wider px-3 py-1"
                  style={{
                    backgroundColor: "var(--color-warm-gray)",
                    color: "var(--color-mid-gray)",
                    borderRadius: "2px",
                    letterSpacing: "0.1em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* More Projects */}
      <section className="py-20" style={{ backgroundColor: "var(--color-warm-gray)" }}>
        <div className="container">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="accent-line" />
              <span className="section-label">More Concepts</span>
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "var(--color-charcoal)",
                letterSpacing: "-0.01em",
              }}
            >
              Concepts across industries.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(1).map((project) => (
              <StaggerItem key={project.id}>
                <div
                  className="group overflow-hidden bg-white"
                  style={{ border: "1px solid var(--color-border-subtle)", borderRadius: "2px" }}
                >
                  <div className="overflow-hidden" style={{ maxHeight: "280px" }}>
                    <img
                      src={project.afterImg}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className="font-heading text-xs font-semibold uppercase tracking-widest px-2 py-1"
                        style={{ backgroundColor: "var(--color-forest-muted)", color: "var(--color-forest)" }}
                      >
                        {project.category}
                      </span>
                      <span
                        className="font-heading text-xs font-medium uppercase tracking-wider px-2 py-1"
                        style={{ border: "1px solid var(--color-border-subtle)", color: "var(--color-mid-gray)" }}
                      >
                        {project.type}
                      </span>
                    </div>
                    <h3
                      className="font-display mb-2"
                      style={{ fontSize: "1.5rem", fontWeight: 400, color: "var(--color-charcoal)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "var(--color-mid-gray)" }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-heading text-xs font-medium uppercase tracking-wider px-2 py-1"
                          style={{
                            backgroundColor: "var(--color-warm-gray)",
                            color: "var(--color-mid-gray)",
                            borderRadius: "2px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: "var(--color-charcoal)" }}>
        <div className="container">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2
              className="font-display mb-6 text-white"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Want to see a concept for your business?
            </h2>
            <p className="font-body mb-8" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem" }}>
              Submit your website and we'll create a free concept redesign — no cost, no commitment.
            </p>
            <Link href="/contact" className="btn-forest">
              Request Your Free Concept
              <ArrowRight size={15} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
