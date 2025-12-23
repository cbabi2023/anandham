"use client";

import { useState } from "react";
import { Bookmark, Share2, Volume2 } from "lucide-react";

export default function ThoughtOfTheDay() {
  const [language, setLanguage] = useState("English");

  return (
    <section className="featured-quote-section desktop-quote-section">
      <div className="container">
        <div className="featured-quote-card">
          <h3 className="featured-quote-text">
            "One Caste, One Religion, One God for Man."
          </h3>
          <p className="featured-quote-explanation">
            The fundamental unity of humanity transcends all artificial divisions created by society.
          </p>
          <div className="featured-quote-actions">
            <button className="quote-action-btn">
              <Bookmark size={18} />
              <span>Save</span>
            </button>
            <button className="quote-action-btn">
              <Share2 size={18} />
              <span>Share</span>
            </button>
            <button className="quote-action-btn">
              <Volume2 size={18} />
              <span>Listen</span>
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
