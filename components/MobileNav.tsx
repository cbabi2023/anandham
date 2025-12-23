"use client";

import { Home, BookOpen, Search, MessageCircle, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: BookOpen, label: "Read", href: "/read" },
    { icon: Search, label: "Search", href: "/search" },
    { icon: MessageCircle, label: "Group Chat", href: "/group-chat" },
    { icon: User, label: "Profile", href: "/profile" },
  ];

  return (
    <nav className="mobile-bottom-nav">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`mobile-nav-item ${pathname === item.href ? "active" : ""}`}
        >
          <item.icon size={20} />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

