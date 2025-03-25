import data from "@/data/data.json";
// Tipe untuk data paket
interface Package {
    id: number; // ID adalah angka
    languages: {
      [key: string]: {
        destination: string; // Destinasi adalah string
        days: number; // Days adalah angka
        nights: number; // Nights adalah angka
      };
    };
    image: string; // Image adalah string
  }
  
  // Fungsi untuk mendapatkan data berdasarkan bahasa
  export const getDataByLanguage = (language: string): Array<{
    id: number;
    destination: string;
    days: number;
    nights: number;
    image: string;
  }> => {
    return (data as Package[]).map((item) => ({
      id: item.id,
      destination: item.languages[language]?.destination || item.languages["id"].destination, // Fallback ke bahasa Indonesia
      days: item.languages[language]?.days || item.languages["id"].days,
      nights: item.languages[language]?.nights || item.languages["id"].nights,
      image: item.image,
    }));
  };