export interface SectionTwoContent {
    title: string;
    description: string;
    hotel: {
      title: string;
      description: string;
    };
    accommodation: {
      title: string;
      description: string;
    };
    button: string;
  }
  
  export const sectionTwoData: Record<string, SectionTwoContent> = {
    id: {
      title: "Jelajahi Keindahan Alam yang Tak Terlupakan",
      description:
        "Nikmati pengalaman perjalanan terbaik dengan layanan wisata kami. Dari pemandangan matahari terbit di Gunung Bromo hingga menjelajahi pesona alam Gunung Rinjani, kami siap membawa Anda ke destinasi impian dengan layanan terbaik.",
      hotel: {
        title: "Hotel",
        description: "Nikmati kenyamanan menginap dengan pilihan hotel terbaik.",
      },
      accommodation: {
        title: "Akomodasi",
        description:
          "Perjalanan yang aman dan nyaman dengan layanan transportasi profesional.",
      },
      button: "Pelajari Lebih Lanjut",
    },
    en: {
      title: "Explore Unforgettable Natural Beauty",
      description:
        "Enjoy the best travel experience with our tour services. From sunrise views at Mount Bromo to exploring the natural charm of Mount Rinjani, we are ready to take you to your dream destinations with the best service.",
      hotel: {
        title: "Hotel",
        description: "Enjoy comfortable stays with the best hotel options.",
      },
      accommodation: {
        title: "Accommodation",
        description:
          "Safe and comfortable travel with professional transportation services.",
      },
      button: "Learn More",
    },
    ms: {
      title: "Terokai Keindahan Alam yang Tidak Terlupakan",
      description:
        "Nikmati pengalaman perjalanan terbaik dengan perkhidmatan pelancongan kami. Dari pemandangan matahari terbit di Gunung Bromo hingga menerokai pesona alam Gunung Rinjani, kami sedia membawa anda ke destinasi impian dengan perkhidmatan terbaik.",
      hotel: {
        title: "Hotel",
        description: "Nikmati penginapan yang selesa dengan pilihan hotel terbaik.",
      },
      accommodation: {
        title: "Penginapan",
        description:
          "Perjalanan yang selamat dan selesa dengan perkhidmatan pengangkutan profesional.",
      },
      button: "Ketahui Lebih Lanjut",
    },
    zh: {
      title: "探索难忘的自然之美",
      description:
        "通过我们的旅游服务享受最佳旅行体验。从布罗莫火山的日出美景到探索林贾尼山的自然魅力，我们随时准备以最好的服务带您前往梦想的目的地。",
      hotel: {
        title: "酒店",
        description: "通过最佳酒店选择享受舒适的住宿。",
      },
      accommodation: {
        title: "住宿",
        description: "通过专业的交通服务享受安全舒适的旅行。",
      },
      button: "了解更多",
    },
  };