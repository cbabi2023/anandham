import { Hourglass, ScrollText, Scale, Users, Landmark, Music } from "lucide-react";

const pillars = [
  {
    icon: Hourglass,
    title: "Life & Biography",
    description: "Timeline-based history of Guru's life, travels, and interactions.",
  },
  {
    icon: ScrollText,
    title: "Krithis & Texts",
    description: "Digital library of original poems, philosophical treatises, and translations.",
  },
  {
    icon: Scale,
    title: "Sree Narayana Dharma",
    description: "Analysis of the ethical and philosophical system propounded by the Guru.",
  },
  {
    icon: Users,
    title: "Disciples & Lineage",
    description: "Biographies of Kumaran Asan, Dr. Palpu, and other intellectual successors.",
  },
  {
    icon: Landmark,
    title: "Temples & Institutions",
    description: "Geography, architectural symbolism, and purpose of consecrated sites.",
  },
  {
    icon: Music,
    title: "Keerthanam & Prayers",
    description: "Lyrics, meanings, and audio renditions of devotional compositions.",
  },
];

export default function KnowledgePillars() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold pt-[10px]" style={{ fontFamily: "var(--font-family-heading)", letterSpacing: "-0.02em" }}>Knowledge Pillars</h2>
          <p className="text-muted-foreground">
            Core areas of study within the archive.
          </p>
        </div>

        <div
          className="grid gap-6 pt-[27px] pb-[27px]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
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
