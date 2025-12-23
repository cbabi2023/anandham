"use client";

import { motion } from "framer-motion";
import { User, Mail, Calendar, BookOpen, Settings, LogOut, Edit2, Award, FileText, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ProfilePage() {
  const stats = [
    { label: "Works Read", value: "24", icon: BookOpen },
    { label: "Articles Saved", value: "12", icon: FileText },
    { label: "Favorites", value: "8", icon: Heart },
  ];

  const recentActivity = [
    { title: "Atmopadesa Satakam", type: "Work", date: "2 days ago" },
    { title: "Temple Entry Movement", type: "Article", date: "5 days ago" },
    { title: "Advaita Vedanta Study", type: "Research", date: "1 week ago" },
  ];

  return (
    <main className="min-h-screen bg-background profile-page">
      <Header />
      
      <div className="container py-12 lg:py-20">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="profile-header"
        >
          <div className="profile-avatar-container">
            <div className="profile-avatar-wrapper">
              <Image
                src="/abcguru.png"
                alt="Profile"
                width={120}
                height={120}
                className="profile-avatar"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="profile-avatar-edit"
                aria-label="Edit profile picture"
              >
                <Edit2 size={16} />
              </motion.button>
            </div>
          </div>
          
          <div className="profile-info">
            <h1 className="profile-name">Scholar Account</h1>
            <p className="profile-email">
              <Mail size={16} />
              scholar@anandham.org
            </p>
            <p className="profile-joined">
              <Calendar size={16} />
              Member since January 2024
            </p>
          </div>

          <div className="profile-actions">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary"
            >
              <Edit2 size={16} />
              Edit Profile
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-secondary"
            >
              <Settings size={16} />
              Settings
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="profile-stats"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="profile-stat-card"
            >
              <div className="profile-stat-icon">
                <stat.icon size={24} />
              </div>
              <div className="profile-stat-content">
                <div className="profile-stat-value">{stat.value}</div>
                <div className="profile-stat-label">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="profile-content-grid">
          {/* Account Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="profile-card"
          >
            <div className="profile-card-header">
              <h2 className="profile-card-title">Account Details</h2>
            </div>
            <div className="profile-card-content">
              <div className="profile-detail-item">
                <div className="profile-detail-label">
                  <User size={18} />
                  Full Name
                </div>
                <div className="profile-detail-value">Scholar Account</div>
              </div>
              <div className="profile-detail-item">
                <div className="profile-detail-label">
                  <Mail size={18} />
                  Email Address
                </div>
                <div className="profile-detail-value">scholar@anandham.org</div>
              </div>
              <div className="profile-detail-item">
                <div className="profile-detail-label">
                  <Award size={18} />
                  Account Type
                </div>
                <div className="profile-detail-value">Academic Researcher</div>
              </div>
              <div className="profile-detail-item">
                <div className="profile-detail-label">
                  <Calendar size={18} />
                  Member Since
                </div>
                <div className="profile-detail-value">January 15, 2024</div>
              </div>
            </div>
          </motion.div>

          {/* Recent Activity Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="profile-card"
          >
            <div className="profile-card-header">
              <h2 className="profile-card-title">Recent Activity</h2>
            </div>
            <div className="profile-card-content">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="profile-activity-item"
                >
                  <div className="profile-activity-content">
                    <h4 className="profile-activity-title">{activity.title}</h4>
                    <div className="profile-activity-meta">
                      <span className="profile-activity-type">{activity.type}</span>
                      <span className="profile-activity-date">{activity.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="profile-quick-actions"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="profile-action-btn"
          >
            <BookOpen size={20} />
            <span>My Library</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="profile-action-btn"
          >
            <FileText size={20} />
            <span>Saved Articles</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="profile-action-btn"
          >
            <Heart size={20} />
            <span>Favorites</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="profile-action-btn profile-action-btn-danger"
          >
            <LogOut size={20} />
            <span>Sign Out</span>
          </motion.button>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}

