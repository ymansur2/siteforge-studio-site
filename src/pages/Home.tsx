/*
 * SiteForge Studio — Home Page
 * Design: Quiet Luxury Editorial
 * Sections: Hero, Services intro, Why redesign matters, Before/After, Testimonials, CTA
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, TrendingUp, Smartphone, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439451125/LzaPoWkcNdDGqAHqEaCNq8/hero-bg-ZYxNj2Eetf9BQmG9qdF35q.webp";
const BEFORE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439451125/LzaPoWkcNdDGqAHqEaCNq8/before-after-old-E4LUpkkAu9yYfVTL9zgPAr.webp";
const AFTER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439451125/LzaPoWkcNdDGqAHqEaCNq8/before-after-new-SeWohT3ywF749ioHEQgz7b.webp";

const services = [
  {
    number: "01",
    title: "Website Redesign",
    description: "We modernize outdated websites with improved layouts, better user experience, and full mobile optimization — so your site reflects the quality of your business.",
    icon: <TrendingUp size={20} />,
  },
  {
    number: "02",
    title: "New Website Development",
    description: "Building fully custom websites from the ground up for businesses that need a strong, credible online presence to attract and convert customers.",
    icon: <Zap size={20} />,
  },
  {
    number: "03",
    title: "Website Optimization",
    description: "Improving speed, navigation structure, and performance so your existing website works harder for your business every single day.",
    icon: <Smartphone size={20} />,
  },
];

const whyReasons = [
  "First impressions happen online — 75% of users judge credibility by website design",
  "Mobile-first experience is no longer optional for local businesses",
  "A modern website directly impacts booking rates, inquiries, and walk-ins",
  "Your website works 24/7 — it should represent you at your best",
];

const testimonials = [
  {
    quote: "SiteForge completely transformed how our spa appears online. We started getting more booking inquiries within the first week of launching the new site.",
    name: "Sarah M.",
    business: "Tranquil Waters Spa",
    initials: "SM",
  },
  {
    quote: "I was embarrassed to share my old website. Now I send it to every potential client. The redesign was exactly what my fitness studio needed.",
    name: "Marcus T.",
    business: "Apex Fitness Studio",
    initials: "MT",
  },
  {
    quote: "Professional, fast, and they truly understood what our restaurant needed. The new site has driven a noticeable increase in reservations.",
    name: "Elena R.",
    business: "Luminary Restaurant",
    initials: "ER",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(255,255,255,0.55)" }} />

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="accent-line" />
              <span className="section-label">Web Design Agency</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mb-6"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                fontWeight: 400,
                lineHeight: 1.08,
                color: "var(--color-charcoal)",
                letterSpacing: "-0.02em",
              }}
            >
              Modern website redesigns for small businesses.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="font-body mb-10 max-w-xl"
              style={{
                fontSize: "1.15rem",
                color: "var(--color-mid-gray)",
                lineHeight: 1.7,
              }}
            >
              We transform outdated websites into modern, high-performing digital experiences that help small businesses grow.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/portfolio" className="btn-forest">
                View Sample Projects
                <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="btn-outline-forest">
                Request a Free Website Concept
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="section-label" style={{ color: "var(--color-mid-gray)" }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{ width: 1, height: 32, backgroundColor: "var(--color-forest)" }}
          />
        </motion.div>
      </section>

      {/* ── Services Intro ── */}
      <section className="py-24" style={{ backgroundColor: "white" }}>
        <div className="container">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="accent-line" />
              <span className="section-label">What We Do</span>
            </div>
            <h2
              className="font-display max-w-2xl"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "var(--color-charcoal)",
                letterSpacing: "-0.01em",
              }}
            >
              Everything your business needs to thrive online.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.number}>
                <div
                  className="group p-8 border transition-all duration-300 hover:shadow-md"
                  style={{
                    borderColor: "var(--color-border-subtle)",
                    borderRadius: "2px",
                  }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span
                      className="section-number"
                      style={{ fontSize: "3.5rem", color: "var(--color-forest-muted)" }}
                    >
                      {service.number}
                    </span>
                    <span style={{ color: "var(--color-forest)" }}>{service.icon}</span>
                  </div>
                  <h3
                    className="font-heading font-semibold mb-3"
                    style={{ fontSize: "1rem", letterSpacing: "0.04em", color: "var(--color-charcoal)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--color-mid-gray)" }}>
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.2} className="mt-10">
            <Link href="/services" className="btn-outline-forest">
              View All Services
              <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Redesign Matters ── */}
      <section className="py-24" style={{ backgroundColor: "var(--color-warm-gray)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <span className="accent-line" />
                <span className="section-label">Why It Matters</span>
              </div>
              <h2
                className="font-display mb-6"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: "var(--color-charcoal)",
                  letterSpacing: "-0.01em",
                }}
              >
                Your website is your most important business asset.
              </h2>
              <p className="font-body mb-8" style={{ color: "var(--color-mid-gray)", fontSize: "1.05rem" }}>
                For small businesses, a website is often the first — and sometimes only — impression a potential customer has. An outdated or poorly designed website signals distrust and sends customers to competitors.
              </p>
              <Link href="/contact" className="btn-forest">
                See How We Can Help
                <ArrowRight size={14} />
              </Link>
            </AnimatedSection>

            <StaggerContainer className="flex flex-col gap-4">
              {whyReasons.map((reason, i) => (
                <StaggerItem key={i}>
                  <div
                    className="flex items-start gap-4 p-5 bg-white"
                    style={{ border: "1px solid var(--color-border-subtle)", borderRadius: "2px" }}
                  >
                    <CheckCircle
                      size={18}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "var(--color-forest)" }}
                    />
                    <p className="font-body text-sm leading-relaxed" style={{ color: "var(--color-charcoal)" }}>
                      {reason}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ── Before / After ── */}
      <section className="py-24 bg-white">
        <div className="container">
          <AnimatedSection className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="accent-line" />
              <span className="section-label">The Transformation</span>
              <span className="accent-line" />
            </div>
            <h2
              className="font-display mx-auto max-w-2xl"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "var(--color-charcoal)",
                letterSpacing: "-0.01em",
              }}
            >
              See the difference a redesign makes.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div>
                <div
                  className="flex items-center gap-2 mb-4"
                >
                  <span
                    className="font-heading text-xs font-semibold uppercase tracking-widest px-3 py-1"
                    style={{
                      backgroundColor: "#FEE2E2",
                      color: "#DC2626",
                      letterSpacing: "0.12em",
                    }}
                  >
                    Before
                  </span>
                </div>
                <div
                  className="overflow-hidden"
                  style={{ borderRadius: "2px", border: "1px solid var(--color-border-subtle)" }}
                >
                  <img
                    src={BEFORE_IMG}
                    alt="Outdated website before redesign"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <p className="font-body text-sm mt-3" style={{ color: "var(--color-mid-gray)" }}>
                  Cluttered layout, outdated design, poor mobile experience — losing customers every day.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="font-heading text-xs font-semibold uppercase tracking-widest px-3 py-1"
                    style={{
                      backgroundColor: "var(--color-forest-muted)",
                      color: "var(--color-forest)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    After
                  </span>
                </div>
                <div
                  className="overflow-hidden"
                  style={{ borderRadius: "2px", border: "1px solid var(--color-border-subtle)" }}
                >
                  <img
                    src={AFTER_IMG}
                    alt="Modern website after redesign"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <p className="font-body text-sm mt-3" style={{ color: "var(--color-mid-gray)" }}>
                  Clean, modern, and conversion-focused — a website that builds trust and drives bookings.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24" style={{ backgroundColor: "var(--color-warm-gray)" }}>
        <div className="container">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="accent-line" />
              <span className="section-label">Client Stories</span>
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
              Businesses that trusted us with their redesign.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <div className="testimonial-card h-full">
                  <p
                    className="font-body text-sm leading-relaxed mt-8 mb-6"
                    style={{ color: "var(--color-charcoal)" }}
                  >
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--color-forest)", color: "white" }}
                    >
                      <span className="font-heading text-xs font-semibold">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-sm" style={{ color: "var(--color-charcoal)" }}>
                        {t.name}
                      </p>
                      <p className="font-body text-xs" style={{ color: "var(--color-mid-gray)" }}>
                        {t.business}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="py-28"
        style={{ backgroundColor: "var(--color-charcoal)" }}
      >
        <div className="container">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="accent-line" />
              <span className="section-label" style={{ color: "rgba(255,255,255,0.5)" }}>
                Start Today
              </span>
              <span className="accent-line" />
            </div>
            <h2
              className="font-display mb-6 text-white"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Ready to transform your online presence?
            </h2>
            <p
              className="font-body mb-10 text-base"
              style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}
            >
              We'll create a free concept redesign of your website so you can see exactly what's possible — with zero commitment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-forest">
                Request a Free Website Concept
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/portfolio"
                className="btn-outline-forest"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)" }}
              >
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
