"use client";

import { DownloadCloud } from "lucide-react";

export default function OfflineLibrary() {
  return (
    <section className="offline-library-section">
      <div className="container">
        <div className="offline-bar">
          <div className="offline-info">
            <DownloadCloud size={20} style={{ color: "var(--secondary-foreground)" }} />
            <div>
              <div className="offline-text">Offline Library</div>
              <div className="offline-sub">12 items • 45 MB</div>
            </div>
          </div>
          <a href="#" className="offline-link">View</a>
        </div>
      </div>
    </section>
  );
}

