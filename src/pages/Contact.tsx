import { useState } from "react";
import { ArrowRight, Mail, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    website: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mqeygqwe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...form,
          _replyto: form.email,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({
          name: "",
          email: "",
          business: "",
          website: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    }

    setLoading(false);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1rem",
    border: "1px solid var(--color-border-subtle)",
    borderRadius: "2px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.72rem",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: "0.5rem",
    display: "block",
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="py-20">
        <div className="container max-w-3xl mx-auto">

          {submitted ? (
            <div className="text-center p-10 border">
              <CheckCircle size={40} className="mx-auto mb-4" />
              <h3 className="text-2xl mb-2">Message received!</h3>
              <p>We’ll get back to you within 1–2 business days.</p>
            </div>
          ) : (

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              <input type="hidden" name="_subject" value="New SiteForge Client Request" />

              <div>
                <label style={labelStyle}>Your Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Email *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Business *</label>
                <input
                  name="business"
                  value={form.business}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Website</label>
                <input
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, minHeight: "120px" }}
                />
              </div>

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Submit Request"}
                {!loading && <ArrowRight size={15} />}
              </button>

            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
