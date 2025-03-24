export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface SectionFiveContent {
  title: string;
  description: string;
  features: Feature[];
}

// Use Record<string, SectionFiveContent> to define the structure of sectionFiveData
export const sectionFiveData: Record<string, SectionFiveContent> = {
  id: {
    title: "Fitur Unggulan Kami",
    description:
      "Semua fitur yang kamu butuhkan untuk belajar lebih cepat dan efisien—langsung dalam genggaman tanganmu!",
    features: [
      {
        title: "Pemesanan Mudah",
        description:
          "Pemesan kami dapat disesuaikan dengan petualangan impian dan preferensi Anda.",
        icon: "/Herosection/Pesan.svg",
      },
      {
        title: "Harga Terjangkau",
        description:
          "Indojavatrip memastikan kliennya menikmati harga yang terjangkau dan dapat diakses.",
        icon: "/HeroSection/Harga.svg",
      },
      {
        title: "Beragam Tur",
        description:
          "Kami menawarkan beragam tur khusus bagi mereka yang mencintai perjalanan di Jawa Timur, Indonesia.",
        icon: "/Herosection/tur.svg",
      },
    ],
  },
  en: {
    title: "Our Featured Features",
    description:
      "All the features you need to learn faster and more efficiently—right at your fingertips!",
    features: [
      {
        title: "Easy Booking",
        description:
          "Our booking system can be tailored to your dream adventure and preferences.",
        icon: "/Herosection/Pesan.svg",
      },
      {
        title: "Affordable Prices",
        description:
          "Indojavatrip ensures its clients enjoy affordable and accessible prices.",
        icon: "/HeroSection/Harga.svg",
      },
      {
        title: "Diverse Tours",
        description:
          "We offer a variety of custom tours for those who love traveling in East Java, Indonesia.",
        icon: "/Herosection/tur.svg",
      },
    ],
  },
  ms: {
    title: "Ciri-Ciri Unggul Kami",
    description:
      "Semua ciri yang anda perlukan untuk belajar dengan lebih cepat dan cekap—terus di hujung jari anda!",
    features: [
      {
        title: "Tempahan Mudah",
        description:
          "Sistem tempahan kami boleh disesuaikan dengan pengembaraan impian dan keutamaan anda.",
        icon: "/Herosection/Pesan.svg",
      },
      {
        title: "Harga Berpatutan",
        description:
          "Indojavatrip memastikan pelanggannya menikmati harga yang berpatutan dan mudah diakses.",
        icon: "/HeroSection/Harga.svg",
      },
      {
        title: "Pelbagai Lawatan",
        description:
          "Kami menawarkan pelbagai lawatan khas untuk mereka yang gemar melancong di Jawa Timur, Indonesia.",
        icon: "/Herosection/tur.svg",
      },
    ],
  },
  zh: {
    title: "我们的特色功能",
    description: "您需要的一切功能，让您学习更快、更高效——尽在您的指尖！",
    features: [
      {
        title: "轻松预订",
        description: "我们的预订系统可以根据您的梦想冒险和偏好量身定制。",
        icon: "/Herosection/Pesan.svg",
      },
      {
        title: "价格实惠",
        description: "Indojavatrip 确保其客户享受实惠且可负担的价格。",
        icon: "/HeroSection/Harga.svg",
      },
      {
        title: "多样化的旅行",
        description: "我们为热爱在印度尼西亚东爪哇旅行的人提供各种定制旅行。",
        icon: "/Herosection/tur.svg",
      },
    ],
  },
};
