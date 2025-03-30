"use client";

import Image from "next/image";
import Link from "next/link";
import { getKategoriByLanguage } from "@/data/language/data-kategori";

interface FooterProps {
  language: "id" | "en" | "ms" | "zh";
}

export default function Footer({ language }: FooterProps) {
  const kategori = getKategoriByLanguage(language);

  const translations = {
    id: {
      quickLinks: "Tautan Cepat",
      categories: "Kategori",
      contact: "Kontak",
      home: "Beranda",
      packages: "Daftar Paket",
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
      packages: "Packages",
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
      packages: "Senarai Pakej",
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
      packages: "套餐列表",
      about: "关于我们",
      description:
        "Indojavatrip 是一家在印度尼西亚东爪哇运营的旅游机构。自成立以来，Indojavatrip 已成为印度尼西亚东爪哇的领先旅游机构。",
      copyright: "版权所有 © 2025 Indojavatrip。保留所有权利。",
    },
  };

  const text = translations[language as keyof typeof translations] || translations.id;

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Image src="/Logo.svg" alt="Indojavatrip Logo" width={200} height={60} className="mb-4" />
            <p className="text-sm text-gray-300 mt-4">{text.description}</p>
            <div className="flex space-x-6 mt-6">
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/indojavatrip/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 320 512"
                  fill="currentColor"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/indojavatrip/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9-99.5 9-132.1s2.7-102.7-9-132.1z" />
                </svg>
              </Link>

              {/* TikTok */}
              <Link
                href="https://www.tiktok.com/@indojavatrip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">{text.quickLinks}</h3>
            <ul className="space-y-2">
              {/* Beranda */}
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  {text.home}
                </Link>
              </li>

              {/* Daftar Paket */}
              <li>
                <Link href="/all-package" className="text-gray-300 hover:text-white">
                  {text.packages || "Daftar Paket"}
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