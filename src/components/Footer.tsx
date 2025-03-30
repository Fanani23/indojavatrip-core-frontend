"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { getKategoriByLanguage } from "@/data/language/data-kategori"; // Import fungsi untuk mendapatkan kategori berdasarkan bahasa

interface FooterProps {
  language: "id" | "en" | "ms" | "zh"; // Restrict language to valid keys
}

export default function Footer({ language }: FooterProps) {
  // Ambil data kategori berdasarkan bahasa
  const kategori = getKategoriByLanguage(language);

  // Teks berdasarkan bahasa
  const translations = {
    id: {
      quickLinks: "Tautan Cepat",
      categories: "Kategori",
      contact: "Kontak",
      home: "Beranda",
      about: "Tentang Kami",
      description:
        "Indojavatrip adalah agen tur yang beroperasi di Jawa Timur, Indonesia. Sejak pendiriannya, Indojavatrip telah menjadi agen tur terkemuka di Jawa Timur, Indonesia.",
      copyright: "Hak Cipta © 2025 Indojavatrip. Semua Hak Dilindungi.",
    },
    en: {
      quickLinks: "Quick Links",
      categories: "Categories",
      contact: "Contact",
      home: "Home",
      about: "About Us",
      description:
        "Indojavatrip is a tour agency operating in East Java, Indonesia. Since its establishment, Indojavatrip has become a leading tour agency in East Java, Indonesia.",
      copyright: "Copyright © 2025 Indojavatrip. All Rights Reserved.",
    },
    ms: {
      quickLinks: "Pautan Pantas",
      categories: "Kategori",
      contact: "Hubungi",
      home: "Laman Utama",
      about: "Tentang Kami",
      description:
        "Indojavatrip adalah agensi pelancongan yang beroperasi di Jawa Timur, Indonesia. Sejak penubuhannya, Indojavatrip telah menjadi agensi pelancongan terkemuka di Jawa Timur, Indonesia.",
      copyright: "Hak Cipta © 2025 Indojavatrip. Semua Hak Terpelihara.",
    },
    zh: {
      quickLinks: "快速链接",
      categories: "类别",
      contact: "联系方式",
      home: "首页",
      about: "关于我们",
      description:
        "Indojavatrip 是一家在印度尼西亚东爪哇运营的旅游机构。自成立以来，Indojavatrip 已成为印度尼西亚东爪哇的领先旅游机构。",
      copyright: "版权所有 © 2025 Indojavatrip。保留所有权利。",
    },
  };

  // Gunakan teks berdasarkan bahasa dengan fallback ke bahasa Indonesia
  const text = translations[language as keyof typeof translations] || translations.id;

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Image src="/Logo.svg" alt="Indojavatrip Logo" width={200} height={60} className="mb-4" />
            <p className="text-sm text-gray-300 mt-4">{text.description}</p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-white hover:text-gray-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">{text.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  {text.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  {text.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  {text.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">{text.categories}</h3>
            <ul className="space-y-2">
              {kategori.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/all-package?category=${encodeURIComponent(cat.category)}`}
                    className="text-gray-300 hover:text-white"
                  >
                    {cat.category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">{text.contact}</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">+62 813-9007-0766</li>
              <li className="text-gray-300">Indojavatrip@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">{text.copyright}</div>
      </div>
    </footer>
  );
}