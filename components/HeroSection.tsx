"use client";

import Image from "next/image";
import { Library, GraduationCap } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="hero-section">
      <div className="container">
        {/* Mobile Layout */}
        <div className="hero-mobile">
          <div className="hero-mobile-content">
            <div className="hero-mobile-header">
              <span className="hero-mobile-eyebrow">{t("hero.eyebrow")}</span>
              <h1 className="hero-title-mobile">
                {t("hero.title")}
                <span className="hero-title-mobile-accent">{t("hero.subtitle")}</span>
              </h1>
            </div>
            
            <div className="hero-mobile-image-wrapper">
              <div className="hero-mobile-image-container">
                <Image
                  src="/abcguru.png"
                  alt="Sree Narayana Guru"
                  fill
                  className="hero-mobile-image"
                  priority
                  sizes="(max-width: 768px) 280px"
                  quality={90}
                />
              </div>
            </div>
            
            <div className="hero-mobile-body">
              <p className="hero-mobile-description">
                {t("hero.description")}
              </p>
              
              <div className="hero-mobile-meta">
                <div className="hero-mobile-meta-item">
                  <Library size={16} />
                  <span>{t("hero.meta.critical")}</span>
                </div>
                <div className="hero-mobile-meta-item">
                  <GraduationCap size={16} />
                  <span>{t("hero.meta.scholars")}</span>
                </div>
              </div>
              
              <div className="hero-mobile-actions">
                <button className="btn-mobile-primary">{t("hero.btn.explore")}</button>
                <button className="btn-mobile-secondary">{t("hero.btn.learn")}</button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center hero-desktop">
          <div className="flex flex-col">
            <span className="hero-eyebrow">{t("hero.eyebrow")}</span>
            <h1 className="hero-title">
              {t("hero.title")}
              <br />
              <span className="hero-title-accent">{t("hero.subtitle")}</span>
            </h1>
            <p className="hero-subtitle">
              {t("hero.description")}
            </p>
            <div className="hero-meta">
              <div className="hero-meta-item">
                <Library size={14} style={{ color: "var(--primary)" }} />
                <span>{t("hero.meta.critical")}</span>
              </div>
              <div className="hero-meta-item">
                <GraduationCap size={14} style={{ color: "var(--primary)" }} />
                <span>{t("hero.meta.scholars")}</span>
              </div>
            </div>
            <div className="hero-actions">
              <button className="btn btn-primary">{t("hero.btn.explore")}</button>
              <button className="btn btn-secondary">{t("hero.btn.learn")}</button>
              <a href="#research" className="hero-secondary-link">
                {t("hero.link.research")}
              </a>
            </div>
          </div>

          <div className="hero-img-container">
            <Image
              src="/abcguru.png"
              alt="Sree Narayana Guru"
              fill
              className="hero-img"
              priority
              sizes="(max-width: 768px) 100vw, 500px"
              quality={90}
            />
            <div className="hero-img-label">
              Archived representation – not a devotional image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
