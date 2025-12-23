"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = ["Manuscripts", "Temples", "Photographs"];

const archiveItems = {
  Manuscripts: [
    {
      title: "Early palm-leaf draft of Daiva Dasakam",
      image: "/guru.jpg",
    },
  ],
  Temples: [
    {
      title: "Sivagiri Mutt, circa 1930",
      image: "/guru.jpg",
    },
  ],
  Photographs: [
    {
      title: "Portrait of Dr. Palpu",
      image: "/guru.jpg",
    },
  ],
};

export default function VisualArchive() {
  const [activeTab, setActiveTab] = useState("Manuscripts");

  return (
    <section className="py-20 bg-muted visual-archive-section">
      <div className="container flex flex-col gap-8">
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-family-heading)", letterSpacing: "-0.02em" }}>Visual Archive Preview</h2>
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`text-sm font-medium pb-1 cursor-pointer transition-colors ${
                    activeTab === tab
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <button className="btn btn-secondary">Visit Digital Archive →</button>
        </div>

        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {(archiveItems[activeTab as keyof typeof archiveItems] || []).map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div
                style={{
                  height: 200,
                  width: "100%",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  background: "#ddd",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-muted-foreground">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
