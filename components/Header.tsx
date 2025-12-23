"use client";

import { User, BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
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
          <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>{t("nav.home")}</Link>
          <Link href="/life-history" className={`nav-link ${pathname === "/life-history" ? "active" : ""}`}>{t("nav.lifeHistory")}</Link>
          <Link href="/works" className={`nav-link ${pathname === "/works" ? "active" : ""}`}>{t("nav.works")}</Link>
          <Link href="/philosophy" className={`nav-link ${pathname === "/philosophy" ? "active" : ""}`}>{t("nav.philosophy")}</Link>
          <Link href="/research" className={`nav-link ${pathname === "/research" ? "active" : ""}`}>{t("nav.research")}</Link>
        </div>

        <div className="navbar-actions">
          <div className="navbar-language-toggle">
            <button
              className={`pill-toggle-item ${language === "en" ? "active" : ""}`}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <button
              className={`pill-toggle-item ${language === "ml" ? "active" : ""}`}
              onClick={() => setLanguage("ml")}
            >
              ML
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
            <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}>{t("nav.home")}</Link>
            <Link href="/life-history" className={`nav-link ${pathname === "/life-history" ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}>{t("nav.lifeHistory")}</Link>
            <Link href="/works" className={`nav-link ${pathname === "/works" ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}>{t("nav.works")}</Link>
            <Link href="/philosophy" className={`nav-link ${pathname === "/philosophy" ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}>{t("nav.philosophy")}</Link>
            <Link href="/research" className={`nav-link ${pathname === "/research" ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}>{t("nav.research")}</Link>
            <div className="pill-toggle">
              <button
                className={`pill-toggle-item ${language === "en" ? "active" : ""}`}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
              <button
                className={`pill-toggle-item ${language === "ml" ? "active" : ""}`}
                onClick={() => setLanguage("ml")}
              >
                ML
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
