/*
 * SiteForge Studio — Contact Page
 * Design: Quiet Luxury Editorial
 * Contact form with name, email, business name, website URL, message
 */

import { useState } from "react";
import { ArrowRight, Mail, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

interface FormData {
  name: string;
  email: string;
  businessName: string;
  websiteUrl: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  businessName: "",
  websiteUrl: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1rem",
    border: "1px solid var(--color-border-subtle)",
    borderRadius: "2px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    color: "var(--color-charcoal)",
    backgroundColor: "white",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Syne', sans-serif",
    fontSize: "0.72rem",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "var(--color-mid-gray)",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="pt-36 pb-20" style={{ backgroundColor: "var(--color-warm-gray)" }}>
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-5">
              <span className="accent-line" />
              <span className="section-label">Get In Touch</span>
            </div>
            <h1
              className="font-display max-w-2xl mb-4"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--color-charcoal)",
                letterSpacing: "-0.02em",
              }}
            >
              Request a Free Website Concept
            </h1>
            <p
              className="font-body max-w-xl"
              style={{ fontSize: "1.1rem", color: "var(--color-mid-gray)", lineHeight: 1.7 }}
            >
              Tell us about your business and current website. We'll create a free concept redesign so you can see exactly what's possible — with no commitment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                {submitted ? (
                  <div
                    className="p-10 text-center"
                    style={{
                      border: "1px solid var(--color-border-subtle)",
                      borderRadius: "2px",
                      backgroundColor: "var(--color-forest-muted)",
                    }}
                  >
                    <CheckCircle
                      size={40}
                      className="mx-auto mb-5"
                      style={{ color: "var(--color-forest)" }}
                    />
                    <h3
                      className="font-display mb-3"
                      style={{ fontSize: "1.8rem", fontWeight: 400, color: "var(--color-charcoal)" }}
                    >
                      Message received!
                    </h3>
                    <p className="font-body" style={{ color: "var(--color-mid-gray)" }}>
                      Thank you for reaching out. We'll review your website and get back to you within 1–2 business days with your free concept.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label style={labelStyle} htmlFor="name">
                          Your Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          style={inputStyle}
                          onFocus={(e) => (e.target.style.borderColor = "var(--color-forest)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--color-border-subtle)")}
                        />
                      </div>
                      <div>
                        <label style={labelStyle} htmlFor="email">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@yourbusiness.com"
                          style={inputStyle}
                          onFocus={(e) => (e.target.style.borderColor = "var(--color-forest)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--color-border-subtle)")}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle} htmlFor="businessName">
                        Business Name *
                      </label>
                      <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        required
                        value={form.businessName}
                        onChange={handleChange}
                        placeholder="Your Business Name"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--color-forest)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--color-border-subtle)")}
                      />
                    </div>

                    <div>
                      <label style={labelStyle} htmlFor="websiteUrl">
                        Current Website URL
                      </label>
                      <input
                        id="websiteUrl"
                        name="websiteUrl"
                        type="url"
                        value={form.websiteUrl}
                        onChange={handleChange}
                        placeholder="https://yourbusiness.com"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--color-forest)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--color-border-subtle)")}
                      />
                      <p className="font-body text-xs mt-1.5" style={{ color: "var(--color-mid-gray)" }}>
                        Don't have a website yet? That's okay — leave this blank.
                      </p>
                    </div>

                    <div>
                      <label style={labelStyle} htmlFor="message">
                        Tell Us About Your Business *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your business, what you're looking for in a redesign, and any specific goals you have for your website..."
                        style={{ ...inputStyle, resize: "vertical", minHeight: "130px" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--color-forest)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--color-border-subtle)")}
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-forest w-full sm:w-auto justify-center"
                        style={{ opacity: loading ? 0.7 : 1 }}
                      >
                        {loading ? "Sending..." : "Submit Request"}
                        {!loading && <ArrowRight size={15} />}
                      </button>
                      <p className="font-body text-xs mt-3" style={{ color: "var(--color-mid-gray)" }}>
                        We typically respond within 1–2 business days.
                      </p>
                    </div>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.15} className="flex flex-col gap-6">
                {/* What to expect */}
                <div
                  className="p-6"
                  style={{
                    backgroundColor: "var(--color-warm-gray)",
                    border: "1px solid var(--color-border-subtle)",
                    borderRadius: "2px",
                  }}
                >
                  <p className="section-label mb-4">What Happens Next</p>
                  <div className="flex flex-col gap-4">
                    {[
                      { step: "1", text: "We review your current website and business details" },
                      { step: "2", text: "We create a free concept redesign (within 2 business days)" },
                      { step: "3", text: "We share the concept and discuss your options" },
                      { step: "4", text: "You decide if you'd like to move forward — no pressure" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-3">
                        <span
                          className="font-heading font-bold text-xs w-5 h-5 flex items-center justify-center flex-shrink-0 rounded-full"
                          style={{
                            backgroundColor: "var(--color-forest)",
                            color: "white",
                            fontSize: "0.65rem",
                          }}
                        >
                          {item.step}
                        </span>
                        <p className="font-body text-sm leading-relaxed" style={{ color: "var(--color-charcoal)" }}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact info */}
                <div
                  className="p-6"
                  style={{
                    border: "1px solid var(--color-border-subtle)",
                    borderRadius: "2px",
                  }}
                >
                  <p className="section-label mb-4">Direct Contact</p>
                  <a
                    href="mailto:hello@siteforgestudio.co"
                    className="flex items-center gap-3 font-body text-sm transition-colors duration-200"
                    style={{ color: "var(--color-charcoal)", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-forest)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-charcoal)")}
                  >
                    <Mail size={16} style={{ color: "var(--color-forest)" }} />
                    hello@siteforgestudio.co
                  </a>
                </div>

                {/* Reassurance */}
                <div
                  className="p-5"
                  style={{
                    backgroundColor: "var(--color-forest-muted)",
                    borderLeft: "3px solid var(--color-forest)",
                    borderRadius: "0 2px 2px 0",
                  }}
                >
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--color-charcoal)" }}>
                    <strong>Zero commitment.</strong> The free concept is completely free — we create it because we're confident you'll love what you see.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
