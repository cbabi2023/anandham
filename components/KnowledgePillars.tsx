import { Hourglass, ScrollText, Scale, Users, Landmark, Music, UserCheck } from "lucide-react";

const pillars = [
  {
    icon: ScrollText,
    title: "Krithis",
    description: "Digital library of original poems, philosophical treatises, and translations.",
  },
  {
    icon: Scale,
    title: "Dharma",
    description: "Analysis of the ethical and philosophical system propounded by the Guru.",
  },
  {
    icon: Hourglass,
    title: "Life",
    description: "Timeline-based history of Guru's life, travels, and interactions.",
  },
  {
    icon: Landmark,
    title: "Temples",
    description: "Geography, architectural symbolism, and purpose of consecrated sites.",
  },
  {
    icon: Music,
    title: "Keerthanam",
    description: "Lyrics, meanings, and audio renditions of devotional compositions.",
  },
  {
    icon: UserCheck,
    title: "Disciples & Work",
    description: "Profiles of Guru's disciples and their contributions to social reform and philosophy.",
  },
];

export default function KnowledgePillars() {
  return (
    <section className="py-12 lg:py-20 knowledge-pillars-section">
      <div className="container flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold pt-[10px]" style={{ fontFamily: "var(--font-family-heading)", letterSpacing: "-0.02em" }}>Knowledge Pillars</h2>
          <p className="text-muted-foreground">
            Core areas of study within the archive.
          </p>
        </div>

        {/* Mobile version - 3x2 grid */}
        <div className="knowledge-pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="knowledge-pillar-card">
              <div className="knowledge-pillar-icon">
                <pillar.icon size={24} />
              </div>
              <span className="knowledge-pillar-label">{pillar.title}</span>
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
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <div className="feature-card-footer">Read more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
