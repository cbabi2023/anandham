"use client";

import { ChevronRight } from "lucide-react";

export default function ContinueReading() {
  return (
    <section className="continue-reading-section">
      <div className="container">
        <div className="continue-reading-card">
          <div className="continue-reading-header">
            <div>
              <div className="continue-reading-label">Pick up where you left off</div>
              <div className="continue-reading-title">Daiva Dasakam</div>
            </div>
            <ChevronRight size={20} style={{ color: "var(--muted-foreground)" }} />
          </div>
          <div className="continue-reading-subtitle">
            Verse 4: Like the ocean, waves, and wind...
          </div>
          <div className="continue-reading-progress">
            <div className="continue-reading-progress-bar"></div>
          </div>
          <button className="continue-reading-btn">Continue Reading</button>
        </div>
      </div>
    </section>
  );
}

