/*
 * SiteForge Studio — About Page
 * Design: Quiet Luxury Editorial
 * Mission, values, and studio story
 */

import { Link } from "wouter";
import { ArrowRight, Heart, Target, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const values = [
  {
    icon: <Target size={22} />,
    title: "Results-Focused",
    description:
      "We don't design for design's sake. Every decision — from layout to typography — is made with one goal: helping your business attract and convert more customers.",
  },
  {
    icon: <Heart size={22} />,
    title: "Small Business First",
    description:
      "We built SiteForge specifically for small businesses. We understand the budget constraints, the time pressures, and the importance of every single customer.",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Transparent Process",
    description:
      "No surprises. We show you a concept before any commitment, keep you informed at every stage, and deliver exactly what we promise.",
  },
];

const stats = [
  { number: "50+", label: "Websites Redesigned" },
  { number: "12+", label: "Industries Served" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "3x", label: "Avg. Inquiry Increase" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="pt-36 pb-20" style={{ backgroundColor: "var(--color-warm-gray)" }}>
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-5">
              <span className="accent-line" />
              <span className="section-label">About Us</span>
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
              A studio built for small businesses.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-5">
                <span className="accent-line" />
                <span className="section-label">Our Mission</span>
              </div>
              <h2
                className="font-display mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: "var(--color-charcoal)",
                  letterSpacing: "-0.01em",
                }}
              >
                Elevating local businesses through modern web design.
              </h2>
              <div className="flex flex-col gap-5">
                <p className="font-body leading-relaxed" style={{ color: "var(--color-mid-gray)", fontSize: "1.05rem" }}>
                  SiteForge Studio is a small web design studio focused on helping local businesses elevate their online presence. Many small businesses have outdated websites that no longer reflect the quality of their services.
                </p>
                <p className="font-body leading-relaxed" style={{ color: "var(--color-mid-gray)", fontSize: "1.05rem" }}>
                  Our goal is to transform those websites into modern, clean, and high-performing digital experiences that help businesses grow — without the complexity or cost of large agencies.
                </p>
                <p className="font-body leading-relaxed" style={{ color: "var(--color-mid-gray)", fontSize: "1.05rem" }}>
                  We work with wellness studios, spas, fitness studios, salons, restaurants, and local service businesses — the kinds of businesses that are the backbone of every community.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6"
                    style={{
                      backgroundColor: "var(--color-warm-gray)",
                      border: "1px solid var(--color-border-subtle)",
                      borderRadius: "2px",
                    }}
                  >
                    <span
                      className="font-display block mb-1"
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: 400,
                        color: "var(--color-forest)",
                        lineHeight: 1,
                      }}
                    >
                      {stat.number}
                    </span>
                    <span
                      className="font-heading text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "var(--color-mid-gray)", letterSpacing: "0.1em" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ backgroundColor: "var(--color-warm-gray)" }}>
        <div className="container">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="accent-line" />
              <span className="section-label">Our Values</span>
            </div>
            <h2
              className="font-display max-w-xl"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "var(--color-charcoal)",
                letterSpacing: "-0.01em",
              }}
            >
              How we approach every project.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div
                  className="p-8 bg-white h-full"
                  style={{ border: "1px solid var(--color-border-subtle)", borderRadius: "2px" }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-5"
                    style={{ backgroundColor: "var(--color-forest-muted)", color: "var(--color-forest)" }}
                  >
                    {value.icon}
                  </div>
                  <h3
                    className="font-heading font-semibold mb-3"
                    style={{ fontSize: "0.95rem", letterSpacing: "0.04em", color: "var(--color-charcoal)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--color-mid-gray)" }}>
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-5">
                <span className="accent-line" />
                <span className="section-label">Who We Serve</span>
              </div>
              <h2
                className="font-display mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: "var(--color-charcoal)",
                  letterSpacing: "-0.01em",
                }}
              >
                The businesses that make communities thrive.
              </h2>
              <p className="font-body leading-relaxed" style={{ color: "var(--color-mid-gray)", fontSize: "1.05rem" }}>
                We specialize in working with local and small businesses that have a great product or service but a website that doesn't do them justice. Our clients are business owners who care deeply about their craft and want their online presence to reflect that.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-2 gap-3">
              {[
                "Wellness Studios",
                "Day Spas",
                "Fitness Studios",
                "Hair Salons",
                "Restaurants & Cafés",
                "Nail Studios",
                "Yoga Studios",
                "Local Service Businesses",
              ].map((industry) => (
                <StaggerItem key={industry}>
                  <div
                    className="p-4 flex items-center gap-3"
                    style={{
                      backgroundColor: "var(--color-warm-gray)",
                      border: "1px solid var(--color-border-subtle)",
                      borderRadius: "2px",
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--color-forest)" }}
                    />
                    <span className="font-body text-sm" style={{ color: "var(--color-charcoal)" }}>
                      {industry}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
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
              Ready to work together?
            </h2>
            <p className="font-body mb-8" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem" }}>
              Start with a free concept redesign — we'll show you what your website could look like with no commitment required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-forest">
                Request a Free Concept
                <ArrowRight size={15} />
              </Link>
              <Link href="/portfolio" className="btn-outline-forest" style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)" }}>
                View Our Work
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
