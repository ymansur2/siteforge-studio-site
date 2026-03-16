/*
 * SiteForge Studio — Footer Component
 * Design: Quiet Luxury Editorial
 * Dark charcoal footer with forest green accents
 */

import { Link } from "wouter";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "var(--color-charcoal)", color: "white" }}
    >
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-7 h-7 flex items-center justify-center"
                style={{ backgroundColor: "var(--color-forest)" }}
              >
                <span className="text-white font-heading font-bold" style={{ fontSize: "0.8rem" }}>
                  SF
                </span>
              </div>
              <span
                className="font-heading font-bold text-sm tracking-widest uppercase text-white"
                style={{ letterSpacing: "0.14em" }}
              >
                SiteForge Studio
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Modern website redesigns for small businesses. We transform outdated digital presences into high-performing experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
              Get In Touch
            </p>
            <a
              href="mailto:hello@siteforgestudio.co"
              className="flex items-center gap-2 font-body text-sm mb-4 transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              <Mail size={14} />
              hello@siteforgestudio.co
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-widest mt-4 transition-colors duration-200"
              style={{ color: "var(--color-forest)", textDecoration: "none", letterSpacing: "0.12em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-forest)")}
            >
              Request a Free Concept
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {year} SiteForge Studio. All rights reserved.
          </p>
          <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Crafting modern digital experiences for small businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
