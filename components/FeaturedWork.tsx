import Image from "next/image";

export default function FeaturedWork() {
  return (
    <section className="py-20 bg-secondary featured-work-section">
      <div className="container pt-3">
        <div className="bg-card border rounded-xl pt-8 pb-8 px-6 lg:pt-[40px] lg:pb-[40px] lg:pl-[56px] lg:pr-[56px] flex flex-col lg:flex-row items-start gap-6 lg:gap-10 shadow-md">
          <div className="hidden lg:block relative" style={{ width: 300, height: 240, flexShrink: 0 }}>
            <div className="w-full h-full bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-64 bg-amber-800 rounded shadow-2xl border-4 border-amber-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-amber-900"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-amber-100">
                      <div className="text-2xl font-bold mb-2">ആത്മോപദേശ</div>
                      <div className="text-lg">ശതകം</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span
                className="text-xs font-bold text-primary uppercase tracking-wider pt-[9px] pb-[9px]"
              >
                Featured Work
              </span>
            </div>
            <h2 className="text-4xl font-semibold text-foreground" style={{ fontFamily: "var(--font-family-heading)", letterSpacing: "-0.02em" }}>
              Atmopadesa Satakam
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Considered the magnum opus of Sree Narayana Guru, this work of self-instruction encapsulates the essence of Advaita Vedanta in a social context.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="tag">Advaita Vedanta</span>
              <span className="tag">Ethics</span>
              <span className="tag">Epistemology</span>
              <span className="tag">Malayalam Literature</span>
            </div>
            <div className="flex gap-3 mt-2 flex-wrap">
              <button className="btn btn-primary">Read Original</button>
              <button className="btn btn-secondary">View Translation</button>
              <button className="btn btn-ghost">Read Commentary</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
