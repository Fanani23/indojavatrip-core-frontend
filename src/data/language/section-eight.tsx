export interface ContactForm {
  kontak: string;
  name: string;
  email: string;
  description: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderDescription: string;
  submitButton: string;
}

export interface SocialMedia {
  facebook: string;
  instagram: string;
  tiktok: string;
  handle: string;
}

export interface SectionEightContent {
  title: string;
  description: string;
  contactForm: ContactForm;
  socialMedia: SocialMedia;
}

export const sectionEightData: Record<string, SectionEightContent> = {
  id: {
    title: "Hubungi Kami",
    description:
      "Rasakan sensasi menemukan wawasan yang menarik dan pembayaran menarik di saluran media sosial Indojavatrip kami, yang menunggu untuk dijelajahi oleh Anda.",
    contactForm: {
      kontak: "Kontak Kami",
      name: "Nama",
      email: "Email",
      description: "Deskripsi Proyek",
      placeholderName: "Nama Anda",
      placeholderEmail: "Email Anda",
      placeholderDescription: "Masukkan deskripsi pengalaman Anda",
      submitButton: "Kirim",
    },
    socialMedia: {
      facebook: "Facebook",
      instagram: "Instagram",
      tiktok: "Tiktok",
      handle: "@indojavatrip",
    },
  },
  en: {
    title: "Contact Us",
    description:
      "Experience the thrill of discovering exciting insights and attractive deals on our Indojavatrip social media channels, waiting to be explored by you.",
    contactForm: {
      kontak: "Contact Us",
      name: "Name",
      email: "Email",
      description: "Project Descriptions",
      placeholderName: "Your Name",
      placeholderEmail: "Your Email",
      placeholderDescription: "Input your experience descriptions",
      submitButton: "Send",
    },
    socialMedia: {
      facebook: "Facebook",
      instagram: "Instagram",
      tiktok: "Tiktok",
      handle: "@indojavatrip",
    },
  },
  ms: {
    title: "Hubungi Kami",
    description:
      "Rasai keseronokan menemui wawasan menarik dan tawaran menarik di saluran media sosial Indojavatrip kami, yang menunggu untuk diterokai oleh anda.",
    contactForm: {
      kontak: "Hubungi Kami",
      name: "Nama",
      email: "E-mel",
      description: "Penerangan Projek",
      placeholderName: "Nama Anda",
      placeholderEmail: "E-mel Anda",
      placeholderDescription: "Masukkan penerangan pengalaman anda",
      submitButton: "Hantar",
    },
    socialMedia: {
      facebook: "Facebook",
      instagram: "Instagram",
      tiktok: "Tiktok",
      handle: "@indojavatrip",
    },
  },
  zh: {
    title: "联系我们",
    description:
      "在我们的 Indojavatrip 社交媒体频道上发现令人兴奋的见解和有吸引力的优惠，等待您探索。",
    contactForm: {
      kontak: "联系我们",
      name: "姓名",
      email: "电子邮件",
      description: "项目描述",
      placeholderName: "您的姓名",
      placeholderEmail: "您的电子邮件",
      placeholderDescription: "输入您的体验描述",
      submitButton: "发送",
    },
    socialMedia: {
      facebook: "Facebook",
      instagram: "Instagram",
      tiktok: "Tiktok",
      handle: "@indojavatrip",
    },
  },
};