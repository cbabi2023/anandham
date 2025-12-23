"use client";

import { Home, BookOpen, Search, Archive, User } from "lucide-react";

export default function MobileNav() {
  return (
    <nav className="mobile-bottom-nav">
      <a href="#" className="mobile-nav-item active">
        <Home size={20} />
        <span>Home</span>
      </a>
      <a href="#" className="mobile-nav-item">
        <BookOpen size={20} />
        <span>Read</span>
      </a>
      <a href="#" className="mobile-nav-item">
        <Search size={20} />
        <span>Search</span>
      </a>
      <a href="#" className="mobile-nav-item">
        <Archive size={20} />
        <span>Archive</span>
      </a>
      <a href="#" className="mobile-nav-item">
        <User size={20} />
        <span>Profile</span>
      </a>
    </nav>
  );
}

