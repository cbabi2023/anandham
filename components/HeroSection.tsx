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
          <div className="hero-profile-img">
            <Image
              src="/abcguru.png"
              alt="Sree Narayana Guru"
              width={44}
              height={44}
              className="hero-profile-picture"
              priority
            />
          </div>
          <h1 className="hero-title-mobile">{t("hero.title")}</h1>
          <p className="hero-tagline-mobile">{t("hero.tagline")}</p>
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
