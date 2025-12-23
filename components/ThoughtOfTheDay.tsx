"use client";

import { useState } from "react";

export default function ThoughtOfTheDay() {
  const [language, setLanguage] = useState("Malayalam");

  return (
    <section
      className="py-12 bg-muted"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div 
        className="container"
        style={{ 
          paddingTop: "47px",
          paddingBottom: "47px",
          paddingLeft: "29px",
          paddingRight: "29px"
        }}
      >
        <div
          className="border rounded-xl bg-card"
          style={{ padding: "40px 48px", maxWidth: 900, margin: "0 auto", boxShadow: "var(--shadow-md)" }}
        >
          <div
            className="flex justify-between items-center gap-4 mb-4"
            style={{ marginBottom: 16 }}
          >
            <div className="flex flex-col gap-1">
              <span
                className="text-sm font-medium text-muted-foreground"
                style={{ letterSpacing: "0.16em", textTransform: "uppercase" }}
              >
                Thought of the Day
              </span>
              <span className="text-xs text-muted-foreground">
                Curated excerpt for reflective, non-devotional study.
              </span>
            </div>
            <div className="pill-toggle">
              <button
                className={`pill-toggle-item ${language === "Malayalam" ? "active" : ""}`}
                onClick={() => setLanguage("Malayalam")}
              >
                Malayalam
              </button>
              <button
                className={`pill-toggle-item ${language === "English" ? "active" : ""}`}
                onClick={() => setLanguage("English")}
              >
                English
              </button>
            </div>
          </div>

          {language === "Malayalam" ? (
            <div className="mb-4">
              <h3
                className="text-3xl font-medium"
                style={{ color: "var(--foreground)", lineHeight: 1.6, marginBottom: 16, fontFamily: "var(--font-family-heading)" }}
              >
                "അവനവൻ ആത്മസുഖത്തിനായി ആചരിക്കുന്നതു<br />അപരംസുഖത്തിനായിവരേണം."
              </h3>
            </div>
          ) : null}

          <p className="text-sm text-muted-foreground mb-2">
            From <em>Atmopadesa Satakam</em>, this verse argues that practices
            aimed at one's own well-being are ethically sound only when they
            also advance the well-being of others.
          </p>
          <p className="text-xs text-muted-foreground">
            The verse is presented here as a philosophical proposition,
            inviting analytical reading rather than devotional recitation.
          </p>
        </div>
      </div>
    </section>
  );
}
