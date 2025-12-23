"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, ArrowLeft, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CommunityPage() {
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
            <Users size={64} />
          </motion.div>
          
          <h1 className="coming-soon-title">Coming Soon</h1>
          <p className="coming-soon-subtitle">
            The Community platform is under development. 
            Connect with scholars, discuss philosophy, and share insights with fellow researchers.
          </p>
          
          <div className="coming-soon-features">
            <div className="coming-soon-feature">
              <Clock size={20} />
              <span>Expected launch: Q3 2024</span>
            </div>
          </div>

          <Link href="/" className="coming-soon-link">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}

