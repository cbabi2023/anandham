"use client";

import { User, BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [language, setLanguage] = useState("EN");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <BookOpen size={20} style={{ color: "var(--primary)" }} />
          <span className="navbar-logo">Anandham</span>
        </div>

        <div className="navbar-links">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">Life & History</a>
          <a href="#" className="nav-link">Works</a>
          <a href="#" className="nav-link">Philosophy</a>
          <a href="#" className="nav-link">Research</a>
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
            <a href="#" className="nav-link active" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Life & History</a>
            <a href="#" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Works</a>
            <a href="#" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Philosophy</a>
            <a href="#" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Research</a>
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
