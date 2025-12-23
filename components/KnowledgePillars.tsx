"use client";

import { Hourglass, ScrollText, Scale, Users, Landmark, Music, UserCheck } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function KnowledgePillars() {
  const { t } = useLanguage();
  
  const pillars = [
    {
      icon: ScrollText,
      titleKey: "knowledge.krithis",
      descKey: "knowledge.krithis.desc",
    },
    {
      icon: Scale,
      titleKey: "knowledge.dharma",
      descKey: "knowledge.dharma.desc",
    },
    {
      icon: Hourglass,
      titleKey: "knowledge.life",
      descKey: "knowledge.life.desc",
    },
    {
      icon: Landmark,
      titleKey: "knowledge.temples",
      descKey: "knowledge.temples.desc",
    },
    {
      icon: Music,
      titleKey: "knowledge.keerthanam",
      descKey: "knowledge.keerthanam.desc",
    },
    {
      icon: UserCheck,
      titleKey: "knowledge.disciples",
      descKey: "knowledge.disciples.desc",
    },
  ];
  return (
    <section className="py-12 lg:py-20 knowledge-pillars-section">
      <div className="container flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold pt-[10px]" style={{ fontFamily: "var(--font-family-heading)", letterSpacing: "-0.02em" }}>{t("knowledge.title")}</h2>
          <p className="text-muted-foreground">
            {t("knowledge.subtitle")}
          </p>
        </div>

        {/* Mobile version - 3x2 grid */}
        <div className="knowledge-pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="knowledge-pillar-card">
              <div className="knowledge-pillar-icon">
                <pillar.icon size={24} />
              </div>
              <span className="knowledge-pillar-label">{t(pillar.titleKey)}</span>
            </div>
          ))}
        </div>
        
        {/* Desktop version with descriptions */}
        <div className="knowledge-pillars-desktop">
          {pillars.map((pillar, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <pillar.icon size={20} />
              </div>
              <h3>{t(pillar.titleKey)}</h3>
              <p>{t(pillar.descKey)}</p>
              <div className="feature-card-footer">{t("knowledge.readMore")}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
