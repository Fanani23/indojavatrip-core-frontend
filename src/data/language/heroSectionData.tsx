export interface HeroSectionContent {
  title: string;
  subtitle: string;
  description: string;
  buttons: {
    getStarted: string;
    explorePackages: string;
  };
}

export const heroSectionData: Record<string, HeroSectionContent> = {
  id: {
    title: "Selamat Datang di ",
    subtitle: "Indojavatrip",
    description:
      "Rasakan dunia seperti belum pernah sebelumnya dengan tur kami yang dirancang dengan cermat. Pilih paket perjalanan Anda di sini dan nikmati petualangan Anda!",
    buttons: {
      getStarted: "Mulai Sekarang",
      explorePackages: "Jelajahi Paket",
    },
  },
  en: {
    title: "Welcome to ",
    subtitle: "Indojavatrip",
    description:
      "Explore the world in a whole new way with our carefully curated tours. Choose your travel package and embark on an amazing adventure!",
    buttons: {
      getStarted: "Get Started",
      explorePackages: "Explore Packages",
    },
  },
  ms: {
    title: "Selamat Datang di ",
    subtitle: "Indojavatrip",
    description:
      "Terokai dunia dengan cara yang baru melalui lawatan kami yang dirancang dengan teliti. Pilih pakej perjalanan anda dan mulakan pengembaraan hebat!",
    buttons: {
      getStarted: "Mulakan Sekarang",
      explorePackages: "Terokai Pakej",
    },
  },
  zh: {
    title: "欢迎来到 ",
    subtitle: "Indojavatrip",
    description:
      "以全新的方式探索世界，体验我们精心策划的旅行。选择您的旅行套餐，开启您的奇妙冒险！",
    buttons: {
      getStarted: "立即开始",
      explorePackages: "探索套餐",
    },
  },
};