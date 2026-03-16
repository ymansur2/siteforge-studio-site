/*
 * SiteForge Studio — Navbar Component
 * Design: Quiet Luxury Editorial
 * Sticky top nav with logo, nav links, and CTA button
 * Scrolled state: white bg with subtle shadow
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled || mobileOpen ? "white" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline group">
            <div
              className="w-7 h-7 flex items-center justify-center"
              style={{ backgroundColor: "var(--color-forest)" }}
            >
              <span
                className="text-white font-heading font-bold"
                style={{ fontSize: "0.8rem", letterSpacing: "0.02em" }}
              >
                SF
              </span>
            </div>
            <span
              className="font-heading font-700 text-sm tracking-widest uppercase"
              style={{ color: "var(--color-charcoal)", letterSpacing: "0.14em" }}
            >
              SiteForge Studio
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${location === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link href="/contact" className="btn-forest" style={{ padding: "0.6rem 1.4rem" }}>
              Free Concept
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ color: "var(--color-charcoal)" }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "white",
            borderColor: "var(--color-border-subtle)",
          }}
        >
          <div className="container py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-base ${location === link.href ? "active" : ""}`}
                style={{ fontSize: "0.9rem" }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-forest mt-2 self-start">
              Request Free Concept
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
