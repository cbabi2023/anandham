"use client";

import { Bookmark, Share2, Volume2 } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function ThoughtOfTheDay() {
  const { t } = useLanguage();

  return (
    <section className="featured-quote-section desktop-quote-section">
      <div className="container">
        <div className="featured-quote-card">
          <h3 className="featured-quote-text">
            "{t("quote.text")}"
          </h3>
          <p className="featured-quote-explanation">
            {t("quote.explanation")}
          </p>
          <div className="featured-quote-actions">
            <button className="quote-action-btn">
              <Bookmark size={18} />
              <span>{t("quote.save")}</span>
            </button>
            <button className="quote-action-btn">
              <Share2 size={18} />
              <span>{t("quote.share")}</span>
            </button>
            <button className="quote-action-btn">
              <Volume2 size={18} />
              <span>{t("quote.listen")}</span>
            </button>
          </div>
          <div className="quote-carousel-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
