import Image from "next/image";
import { Library, GraduationCap } from "lucide-react";

export default function HeroSection() {
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
          <h1 className="hero-title-mobile">Sree Narayana Guru</h1>
          <p className="hero-tagline-mobile">Study • Reflect • Understand</p>
        </div>

        {/* Desktop Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center hero-desktop">
          <div className="flex flex-col">
            <span className="hero-eyebrow">sree narayana guru digital library</span>
            <h1 className="hero-title">
              Sree Narayana Guru
              <br />
              <span className="hero-title-accent">Life, Works & Dharma</span>
            </h1>
            <p className="hero-subtitle">
              An authoritative digital archive for the rigorous study of
              Guru's philosophy, literature, and interventions in social
              reform.
            </p>
            <div className="hero-meta">
              <div className="hero-meta-item">
                <Library size={14} style={{ color: "var(--primary)" }} />
                <span>Critical editions & translations</span>
              </div>
              <div className="hero-meta-item">
                <GraduationCap size={14} style={{ color: "var(--primary)" }} />
                <span>For scholars, students & institutions</span>
              </div>
            </div>
            <div className="hero-actions">
              <button className="btn btn-primary">Explore Works</button>
              <button className="btn btn-secondary">Learn the Dharma</button>
              <a href="#research" className="hero-secondary-link">
                Browse research & articles →
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
