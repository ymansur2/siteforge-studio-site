/*
 * SiteForge Studio — Services Page
 * Design: Quiet Luxury Editorial
 * Three core services with detailed descriptions and process section
 */

import { Link } from "wouter";
import { ArrowRight, Layout, Code2, Gauge, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const services = [
  {
    number: "01",
    icon: <Layout size={28} />,
    title: "Website Redesign",
    tagline: "Transform your existing website into a modern digital experience.",
    description:
      "Many small businesses are losing customers daily because their website looks outdated or unprofessional. We take your existing website and completely reimagine it — improving the visual design, user experience, mobile responsiveness, and overall performance.",
    features: [
      "Full visual redesign aligned with your brand",
      "Mobile-first responsive layout",
      "Improved navigation and user flow",
      "Faster loading times and performance",
      "Clear calls-to-action that convert visitors",
      "Modern typography and visual hierarchy",
    ],
    ideal: "Wellness studios, spas, salons, fitness studios, and local service businesses with an existing but outdated website.",
  },
  {
    number: "02",
    icon: <Code2 size={28} />,
    title: "New Website Development",
    tagline: "A powerful online presence built from the ground up.",
    description:
      "If your business doesn't have a website yet — or if your current site is beyond saving — we build you a fully custom website from scratch. Every element is designed and developed to represent your business at its best.",
    features: [
      "Custom design tailored to your brand identity",
      "Fully responsive across all devices",
      "Contact forms and booking integrations",
      "SEO-friendly structure and markup",
      "Fast hosting-ready codebase",
      "Easy to update and maintain",
    ],
    ideal: "New businesses, businesses without a website, or those needing a complete rebuild rather than a redesign.",
  },
  {
    number: "03",
    icon: <Gauge size={28} />,
    title: "Website Optimization",
    tagline: "Make your existing website work harder for your business.",
    description:
      "Sometimes a full redesign isn't necessary — but your website still needs work. We audit and improve your site's speed, navigation, structure, and performance so it delivers better results without a complete overhaul.",
    features: [
      "Page speed and performance improvements",
      "Navigation and information architecture review",
      "Mobile experience fixes and improvements",
      "Conversion rate optimization",
      "SEO technical improvements",
      "Accessibility enhancements",
    ],
    ideal: "Businesses with a relatively modern website that needs targeted improvements rather than a full redesign.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We review your current website, understand your business goals, and identify the key areas for improvement.",
  },
  {
    step: "02",
    title: "Concept Design",
    description: "We create a free concept redesign so you can see exactly what your new website will look like before committing.",
  },
  {
    step: "03",
    title: "Development",
    description: "Once approved, we build your website with clean code, fast performance, and full mobile responsiveness.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We launch your new website and ensure everything is working perfectly — from forms to mobile experience.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section
        className="pt-36 pb-20"
        style={{ backgroundColor: "var(--color-warm-gray)" }}
      >
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-5">
              <span className="accent-line" />
              <span className="section-label">Our Services</span>
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
              Everything you need for a better online presence.
            </h1>
            <p
              className="font-body max-w-xl"
              style={{ fontSize: "1.1rem", color: "var(--color-mid-gray)", lineHeight: 1.7 }}
            >
              We offer focused, high-quality web design services for small businesses — from full redesigns to targeted optimizations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex flex-col gap-20">
            {services.map((service, i) => (
              <AnimatedSection key={service.number} delay={0.1}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-20"
                  style={{
                    borderBottom: i < services.length - 1 ? "1px solid var(--color-border-subtle)" : "none",
                  }}
                >
                  {/* Left: Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className="section-number"
                        style={{ fontSize: "4rem", color: "var(--color-forest-muted)" }}
                      >
                        {service.number}
                      </span>
                      <span style={{ color: "var(--color-forest)" }}>{service.icon}</span>
                    </div>
                    <h2
                      className="font-display mb-2"
                      style={{
                        fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                        fontWeight: 400,
                        lineHeight: 1.15,
                        color: "var(--color-charcoal)",
                      }}
                    >
                      {service.title}
                    </h2>
                    <p
                      className="font-heading font-medium mb-5"
                      style={{ fontSize: "0.9rem", color: "var(--color-forest)", letterSpacing: "0.02em" }}
                    >
                      {service.tagline}
                    </p>
                    <p
                      className="font-body leading-relaxed mb-6"
                      style={{ color: "var(--color-mid-gray)", fontSize: "1rem" }}
                    >
                      {service.description}
                    </p>
                    <div
                      className="p-4 text-sm"
                      style={{
                        backgroundColor: "var(--color-forest-muted)",
                        borderLeft: "3px solid var(--color-forest)",
                        borderRadius: "0 2px 2px 0",
                      }}
                    >
                      <span className="font-heading font-semibold text-xs uppercase tracking-wider" style={{ color: "var(--color-forest)" }}>
                        Ideal for:{" "}
                      </span>
                      <span className="font-body" style={{ color: "var(--color-charcoal)" }}>
                        {service.ideal}
                      </span>
                    </div>
                  </div>

                  {/* Right: Features */}
                  <div
                    className="p-8"
                    style={{
                      backgroundColor: "var(--color-warm-gray)",
                      borderRadius: "2px",
                    }}
                  >
                    <p className="section-label mb-6">What's Included</p>
                    <div className="flex flex-col gap-3">
                      {service.features.map((feature, fi) => (
                        <div key={fi} className="flex items-start gap-3">
                          <CheckCircle
                            size={16}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: "var(--color-forest)" }}
                          />
                          <span className="font-body text-sm" style={{ color: "var(--color-charcoal)" }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ backgroundColor: "var(--color-warm-gray)" }}>
        <div className="container">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="accent-line" />
              <span className="section-label">Our Process</span>
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
              Simple, transparent, and collaborative.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step) => (
              <StaggerItem key={step.step}>
                <div
                  className="p-6 bg-white h-full"
                  style={{ border: "1px solid var(--color-border-subtle)", borderRadius: "2px" }}
                >
                  <span
                    className="font-display block mb-4"
                    style={{ fontSize: "3rem", fontWeight: 300, color: "var(--color-forest-muted)", lineHeight: 1 }}
                  >
                    {step.step}
                  </span>
                  <h3
                    className="font-heading font-semibold mb-3"
                    style={{ fontSize: "0.95rem", letterSpacing: "0.04em", color: "var(--color-charcoal)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--color-mid-gray)" }}>
                    {step.description}
                  </p>
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
              Not sure which service is right for you?
            </h2>
            <p className="font-body mb-8" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem" }}>
              Request a free concept and we'll review your current website and recommend the best approach — no commitment required.
            </p>
            <Link href="/contact" className="btn-forest">
              Request a Free Website Concept
              <ArrowRight size={15} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
