import { ChevronRight } from "lucide-react";

const articles = [
  {
    language: "English",
    date: "Oct 12, 2023",
    title: "Re-interpreting 'Oru Jathi' in the Context of Global Humanism",
    description: "An analysis of how Guru's adage transcends local caste politics to address universal brotherhood.",
  },
  {
    language: "Malayalam",
    date: "Sep 28, 2023",
    title: "Comparative Study of Advaita in Atmopadesa Satakam and Sankara Bhashyam",
    description: "Exploring distinct interpretative shifts in Guru's application of non-dual philosophy.",
  },
  {
    language: "English",
    date: "Aug 15, 2023",
    title: "The Economic Philosophy of Sree Narayana Guru",
    description: "Examining the directives on industry and agriculture from the 1928 Sivagiri pilgrimage message.",
  },
];

export default function ResearchArticles() {
  return (
    <section className="py-20 research-articles-section" id="research">
      <div className="container flex flex-col gap-8">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-family-heading)", letterSpacing: "-0.02em" }}>Research & Articles</h2>
            <p className="text-sm text-muted-foreground">
              Latest academic contributions and essays.
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all articles →
          </a>
        </div>

        <div className="flex flex-col gap-4">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <div className="flex flex-col gap-2 flex-1">
                <div className="article-card-meta">
                  <span
                    className="tag"
                    style={{
                      background: "var(--muted)",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {article.language}
                  </span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-sm text-muted-foreground">{article.description}</p>
              </div>
              <div
                style={{
                  width: 24,
                  height: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ChevronRight size={20} style={{ color: "var(--muted-foreground)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
