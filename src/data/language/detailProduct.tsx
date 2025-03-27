// Import file JSON untuk setiap bahasa
import productDetailsEn from "../DetailProduk/productDetails_en.json";
import productDetailsId from "../DetailProduk/productDetails_id.json";
import productDetailsMs from "../DetailProduk/productDetails_ms.json";
import productDetailsZh from "../DetailProduk/productDetails_zh.json";

// Tipe untuk data produk
interface Itinerary {
  day: string;
  details: string[];
}

interface Product {
  title: string;
  type: string;
  price: string;
  customTrip: string;
  contact: string;
  book: string;
  image: string;
  itinerary: Itinerary[];
  includes: string[];
  excludes: string[];
  notes: string[];
}

// Fungsi untuk mendapatkan data produk berdasarkan bahasa
export const getProductDetailsByLanguage = (language: string): Product[] => {
  switch (language) {
    case "id":
      return productDetailsId as Product[];
    case "ms":
      return productDetailsMs as Product[];
    case "zh":
      return productDetailsZh as Product[];
    case "en":
    default:
      return productDetailsEn as Product[]; // Fallback ke bahasa Inggris
  }
};