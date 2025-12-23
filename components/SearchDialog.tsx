"use client";

import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchResult {
  id: string;
  title: string;
  category: string;
  description?: string;
}

// Mock search data - replace with actual data source
const searchData: SearchResult[] = [
  {
    id: "1",
    title: "Atmopadesa Satakam",
    category: "Krithis",
    description: "Considered the magnum opus of Sree Narayana Guru",
  },
  {
    id: "2",
    title: "Daiva Dasakam",
    category: "Krithis",
    description: "A work of self-instruction encapsulating Advaita Vedanta",
  },
  {
    id: "3",
    title: "Sivagiri Mutt",
    category: "Temples",
    description: "Geography, architectural symbolism, and purpose",
  },
  {
    id: "4",
    title: "Caste Structure & Untouchability",
    category: "Philosophy",
    description: "The rigid stratification that denied basic human rights",
  },
  {
    id: "5",
    title: "Temple Entry Movement",
    category: "History",
    description: "The struggle for spiritual equality and right to worship",
  },
  {
    id: "6",
    title: "Advaita Vedanta",
    category: "Philosophy",
    description: "Guru's unique synthesis of Advaitic wisdom",
  },
  {
    id: "7",
    title: "Dr. Palpu",
    category: "Disciples & Work",
    description: "Profile of Guru's disciple and contributions",
  },
  {
    id: "8",
    title: "Keerthanam Collection",
    category: "Keerthanam",
    description: "Lyrics, meanings, and audio renditions",
  },
];

export default function SearchDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setResults([]);
      return;
    }

    // Focus input when dialog opens
    const timer = setTimeout(() => {
      const input = document.getElementById("search-input");
      input?.focus();
    }, 100);

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setResults([]);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query)
    );

    setResults(filtered);
  }, [searchQuery]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="search-dialog-overlay"
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      <div
        className="search-dialog-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="search-dialog-header">
          <div className="search-input-wrapper">
            <Search size={20} className="search-icon" />
            <Input
              id="search-input"
              type="text"
              placeholder="Search works, philosophy, temples, disciples..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="search-clear-btn"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <button
            onClick={onClose}
            className="search-close-btn"
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        <div className="search-results">
          {searchQuery.trim() === "" ? (
            <div className="search-empty-state">
              <Search size={48} className="search-empty-icon" />
              <p className="search-empty-text">Start typing to search...</p>
              <p className="search-empty-hint">
                Search for works, philosophy, temples, disciples, and more
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="search-empty-state">
              <Search size={48} className="search-empty-icon" />
              <p className="search-empty-text">No results found</p>
              <p className="search-empty-hint">
                Try different keywords or check your spelling
              </p>
            </div>
          ) : (
            <div className="search-results-list">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="search-result-item"
                  onClick={() => {
                    // Handle result click - navigate to page
                    console.log("Navigate to:", result);
                    onClose();
                  }}
                >
                  <div className="search-result-content">
                    <h4 className="search-result-title">{result.title}</h4>
                    <span className="search-result-category">
                      {result.category}
                    </span>
                    {result.description && (
                      <p className="search-result-description">
                        {result.description}
                      </p>
                    )}
                  </div>
                  <Search size={16} className="search-result-icon" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

