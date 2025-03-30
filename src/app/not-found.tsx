"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  const [language, setLanguage] = useState<"id" | "en" | "ms" | "zh">("id"); // Default language: Indonesian

  const translations = {
    id: {
      title: "404",
      subtitle: "Halaman Tidak Ditemukan",
      description: "Halaman yang Anda cari tidak ditemukan. Silakan kembali ke beranda.",
      button: "Kembali ke Beranda",
    },
    en: {
      title: "404",
      subtitle: "Page Not Found",
      description: "The page you are looking for could not be found. Please return to the homepage.",
      button: "Back to Homepage",
    },
    ms: {
      title: "404",
      subtitle: "Halaman Tidak Dijumpai",
      description: "Halaman yang anda cari tidak dijumpai. Sila kembali ke laman utama.",
      button: "Kembali ke Laman Utama",
    },
    zh: {
      title: "404",
      subtitle: "页面未找到",
      description: "您正在寻找的页面无法找到。请返回首页。",
      button: "返回首页",
    },
  };

  const text = translations[language];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header language={language} setLanguage={setLanguage} />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-4 py-32 md:py-40">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl font-bold text-orange-500 mb-6">{text.title}</h1>
          <h2 className="text-2xl font-semibold mb-6">{text.subtitle}</h2>
          <p className="text-lg text-gray-600 mb-8">{text.description}</p>
          <a
            href="/"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all"
          >
            {text.button}
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}