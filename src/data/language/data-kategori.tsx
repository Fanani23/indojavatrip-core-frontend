// Import file JSON untuk setiap bahasa
import kategoriId from "@/data/kategori/kategori_id.json";
import kategoriEn from "@/data/kategori/kategori_en.json";
import kategoriMs from "@/data/kategori/kategori_ms.json";
import kategoriZh from "@/data/kategori/kategori_zh.json";

// Tipe untuk data kategori
interface Package {
  id: number;
  title: string;
  rating: number;
  duration: string;
  image: string;
}

interface Category {
  id: number;
  category: string;
  image: string;
  destination: string;
  days: number;
  nights: number;
  packages: Package[];
}

// Fungsi untuk mendapatkan data kategori berdasarkan bahasa
export const getKategoriByLanguage = (language: string): Category[] => {
  switch (language) {
    case "id":
      return kategoriId as Category[];
    case "en":
      return kategoriEn as Category[];
    case "ms":
      return kategoriMs as Category[];
    case "zh":
      return kategoriZh as Category[];
    default:
      return kategoriId as Category[]; // Fallback ke bahasa Indonesia
  }
};