import { Facebook, Instagram } from "lucide-react";
import { sectionEightData, SectionEightContent } from "@/data/language/section-eight";

const ContactPerson: React.FC<{ language: keyof typeof sectionEightData }> = ({ language }) => {
  const data: SectionEightContent = sectionEightData[language] || sectionEightData["id"]; // Fallback to Indonesian if language not found

  return (
    <div className="container mx-auto py-16 px-4 mt-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            {/* Judul Responsif */}
            <h1 className="text-2xl md:text-4xl font-bold text-amber-500">
              {data.title}
            </h1>
            {/* Deskripsi Responsif */}
            <p className="text-sm md:text-base max-w-3xl mx-auto leading-relaxed text-black">
              {data.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* Social Media */}
            {(["facebook", "instagram", "tiktok"] as const).map((platform) => (
              <div
                key={platform}
                className="flex flex-col items-start space-y-2"
              >
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                  {platform === "facebook" && (
                    <Facebook className="h-5 w-5 text-amber-500" />
                  )}
                  {platform === "instagram" && (
                    <Instagram className="h-5 w-5 text-amber-500" />
                  )}
                  {platform === "tiktok" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-500"
                    >
                      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M19.5 4.65c-2.03 -1.06 -3.42 -1.28 -7.5 -1.28c-4.08 0 -5.47 .22 -7.5 1.28c-2.03 1.06 -3.5 2.51 -3.5 7.7c0 5.19 1.47 6.64 3.5 7.7c2.03 1.06 3.42 1.28 7.5 1.28c4.08 0 5.47 -.22 7.5 -1.28c2.03 -1.06 3.5 -2.51 3.5 -7.7c0 -5.19 -1.47 -6.64 -3.5 -7.7z" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-black text-left">
                  {data.socialMedia[platform]}
                </span>
                <span className="text-sm font-medium text-black text-left">
                  {data.socialMedia.handle}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="border border-amber-200 rounded-lg p-6 mt-8">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-black">
              {data.contactForm.kontak}
            </h2>

            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm text-black">
                {data.contactForm.name}
              </label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  placeholder={data.contactForm.placeholderName}
                  className="w-full pl-10 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-black placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm text-black">
                {data.contactForm.email}
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder={data.contactForm.placeholderEmail}
                  className="w-full pl-10 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-black placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm text-black">
                {data.contactForm.description}
              </label>
              <textarea
                id="description"
                placeholder={data.contactForm.placeholderDescription}
                className="w-full min-h-[100px] p-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-black placeholder:text-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors"
            >
              {data.contactForm.submitButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPerson;