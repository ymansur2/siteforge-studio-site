import { ArrowRight, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Contact() {
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
    textTransform: "uppercase",
    color: "var(--color-mid-gray)",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
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

            {/* FORM */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <form
                  action="https://formspree.io/f/mqeygqwe"
                  method="POST"
                  className="flex flex-col gap-6"
                >

                  {/* Hidden inputs */}
                  <input type="hidden" name="_subject" value="New SiteForge Client Request" />
                  <input type="hidden" name="_redirect" value="https://siteforgestudio.co/thank-you.html" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Jane Smith"
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="jane@yourbusiness.com"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Business Name *</label>
                    <input
                      type="text"
                      name="business"
                      required
                      placeholder="Your Business Name"
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Current Website URL</label>
                    <input
                      type="url"
                      name="website"
                      placeholder="https://yourbusiness.com"
                      style={inputStyle}
                    />
                    <p className="font-body text-xs mt-1.5" style={{ color: "var(--color-mid-gray)" }}>
                      Don't have a website yet? That's okay — leave this blank.
                    </p>
                  </div>

                  <div>
                    <label style={labelStyle}>Tell Us About Your Business *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your business, what you're looking for in a redesign, and any goals you have..."
                      style={{ ...inputStyle, resize: "vertical", minHeight: "130px" }}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="btn-forest w-full sm:w-auto justify-center"
                    >
                      Submit Request
                      <ArrowRight size={15} />
                    </button>

                    <p className="font-body text-xs mt-3" style={{ color: "var(--color-mid-gray)" }}>
                      We typically respond within 1–2 business days.
                    </p>
                  </div>
                </form>
              </AnimatedSection>
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.15} className="flex flex-col gap-6">

                <div
                  className="p-6"
                  style={{
                    backgroundColor: "var(--color-warm-gray)",
                    border: "1px solid var(--color-border-subtle)",
                  }}
                >
                  <p className="section-label mb-4">What Happens Next</p>
                  <div className="flex flex-col gap-4">
                    {[
                      "We review your current website and business",
                      "We create your free concept (within 2 days)",
                      "We share the redesign with you",
                      "You decide if you want to move forward",
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span
                          className="w-5 h-5 flex items-center justify-center rounded-full text-white text-xs"
                          style={{ backgroundColor: "var(--color-forest)" }}
                        >
                          {i + 1}
                        </span>
                        <p className="text-sm">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 border">
                  <p className="section-label mb-4">Direct Contact</p>
                  <a
                    href="mailto:hello@siteforgestudio.co"
                    className="flex items-center gap-3"
                  >
                    <Mail size={16} />
                    hello@siteforgestudio.co
                  </a>
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
