"use client";

import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function ContinueReading() {
  const { t } = useLanguage();
  
  return (
    <section className="continue-reading-section">
      <div className="container">
        <div className="continue-reading-card">
          <div className="continue-reading-header">
            <div>
              <div className="continue-reading-label">{t("continue.label")}</div>
              <div className="continue-reading-title">{t("continue.title")}</div>
            </div>
            <ChevronRight size={20} style={{ color: "var(--muted-foreground)" }} />
          </div>
          <div className="continue-reading-subtitle">
            {t("continue.subtitle")}
          </div>
          <div className="continue-reading-progress">
            <div className="continue-reading-progress-bar"></div>
          </div>
          <button className="continue-reading-btn">{t("continue.btn")}</button>
        </div>
      </div>
    </section>
  );
}

