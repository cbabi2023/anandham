"use client";

import { motion } from "framer-motion";
import { Search, Clock, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function SearchPage() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="coming-soon-container"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="coming-soon-icon"
          >
            <Search size={64} />
          </motion.div>
          
          <h1 className="coming-soon-title">{t("comingSoon.title")}</h1>
          <p className="coming-soon-subtitle">
            {t("comingSoon.search.desc")}
          </p>
          
          <div className="coming-soon-features">
            <div className="coming-soon-feature">
              <Clock size={20} />
              <span>{t("comingSoon.launch")}</span>
            </div>
          </div>

          <Link href="/" className="coming-soon-link">
            <ArrowLeft size={18} />
            <span>{t("comingSoon.back")}</span>
          </Link>
        </motion.div>
      </div>

      <Footer />
      <MobileNav />
    </main>
  );
}

