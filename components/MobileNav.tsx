"use client";

import { Home, BookOpen, Search, Users, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function MobileNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { icon: Home, label: t("nav.home"), href: "/", key: "nav.home" },
    { icon: BookOpen, label: t("nav.read"), href: "/read", key: "nav.read" },
    { icon: Search, label: t("nav.search"), href: "/search", key: "nav.search" },
    { icon: Users, label: t("nav.community"), href: "/community", key: "nav.community" },
    { icon: User, label: t("nav.profile"), href: "/profile", key: "nav.profile" },
  ];

  return (
    <nav className="mobile-bottom-nav">
      {navItems.map((item) => (
        <Link
          key={item.key}
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

