import { CircleDot } from "lucide-react";

const aspects = [
  {
    title: "Caste Structure & Untouchability",
    description: "The rigid stratification that denied basic human rights to large sections of society.",
  },
  {
    title: "Education Inequality",
    description: "Systemic exclusion from traditional and modern knowledge systems.",
  },
  {
    title: "The Temple Entry Movement",
    description: "The struggle for spiritual equality and right to worship.",
  },
  {
    title: "Spiritual Humanism",
    description: "Guru's unique synthesis of Advaitic wisdom with practical social upliftment.",
  },
];

export default function GuruAndSociety() {
  return (
    <section className="py-20 guru-society-section">
      <div
        className="container grid gap-12"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold" style={{ fontFamily: "var(--font-family-heading)", letterSpacing: "-0.02em" }}>Guru and the Society of His Time</h2>
          <p className="text-lg text-muted-foreground">
            Understanding the socio-political landscape of 19th and early 20th
            century Kerala is essential to appreciating the revolutionary
            impact of Guru's work.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {aspects.map((aspect, index) => (
            <div key={index} className="flex gap-4">
              <div
                style={{
                  width: 24,
                  height: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <CircleDot size={16} style={{ color: "var(--primary)" }} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-semibold">{aspect.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {aspect.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
