"use client";

import { User, BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [language, setLanguage] = useState("EN");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          <BookOpen size={20} style={{ color: "var(--primary)" }} />
          <span className="navbar-logo">Anandham</span>
        </Link>

        <div className="navbar-links">
          <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>Home</Link>
          <Link href="/life-history" className={`nav-link ${pathname === "/life-history" ? "active" : ""}`}>Life & History</Link>
          <Link href="/works" className={`nav-link ${pathname === "/works" ? "active" : ""}`}>Works</Link>
          <Link href="/philosophy" className={`nav-link ${pathname === "/philosophy" ? "active" : ""}`}>Philosophy</Link>
          <Link href="/research" className={`nav-link ${pathname === "/research" ? "active" : ""}`}>Research</Link>
        </div>

        <div className="navbar-actions">
          <div className="navbar-language-toggle">
            <button
              className={`pill-toggle-item ${language === "EN" ? "active" : ""}`}
              onClick={() => setLanguage("EN")}
            >
              EN
            </button>
            <button
              className={`pill-toggle-item ${language === "MAL" ? "active" : ""}`}
              onClick={() => setLanguage("MAL")}
            >
              MAL
            </button>
          </div>
          <Link
            href="/profile"
            className="navbar-profile-btn"
            aria-label="Profile"
          >
            <User size={18} />
          </Link>
          <button
            className="navbar-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-content">
            <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/life-history" className={`nav-link ${pathname === "/life-history" ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}>Life & History</Link>
            <Link href="/works" className={`nav-link ${pathname === "/works" ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}>Works</Link>
            <Link href="/philosophy" className={`nav-link ${pathname === "/philosophy" ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}>Philosophy</Link>
            <Link href="/research" className={`nav-link ${pathname === "/research" ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}>Research</Link>
            <div className="pill-toggle">
              <button
                className={`pill-toggle-item ${language === "EN" ? "active" : ""}`}
                onClick={() => setLanguage("EN")}
              >
                EN
              </button>
              <button
                className={`pill-toggle-item ${language === "MAL" ? "active" : ""}`}
                onClick={() => setLanguage("MAL")}
              >
                MAL
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
