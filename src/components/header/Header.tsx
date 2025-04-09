import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdMenu, MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AsaxiyLogoImg from "@/assets/asaxiy-logo.svg";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import UzbFlagImg from "@/assets/uzb-flag.svg";
import UsaFlagImg from "@/assets/usa-flag.svg";
import ArabFlagImg from "@/assets/Arab-flag.png"; // New Arabic flag image

// Define supported languages along with flag image, display label, and document direction.
const languages = [
  { code: "en", label: "English", flag: UsaFlagImg, dir: "ltr" },
  { code: "uz", label: "O'zbekcha", flag: UzbFlagImg, dir: "ltr" },
  { code: "ar", label: "العربية", flag: ArabFlagImg, dir: "rtl" },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Change language and update the document's direction attribute
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    const selectedLang = languages.find((lang) => lang.code === lng);
    if (selectedLang) {
      document.documentElement.setAttribute("dir", selectedLang.dir);
    }
  };

  // Get the currently selected language. Default to English if not found.
  const currentLanguage = languages.find(
    (lang) => lang.code === i18n.language
  ) || languages[0];

  return (
    <header className="relative px-[1%] md:px-[3%] py-4 flex items-center justify-between bg-white border-b wrapper">
      {/* Logo Section */}
      <img
        onClick={() => navigate("/")}
        src={AsaxiyLogoImg}
        alt="Asaxiy"
        className="h-8 w-auto hover:cursor-pointer"
      />

      {/* Desktop Search Box */}
      <div className="hidden md:flex flex-grow mx-6 border-primary-blue-500 border-2 rounded-xl overflow-hidden">
        <input
          type="text"
          placeholder={t("search_placeholder")}
          className="border border-gray-300 px-4 py-2 w-full outline-none text-sm"
        />
        <button className="bg-blue-600 text-white px-4 py-1">
          {t("search")}
        </button>
      </div>

      {/* Desktop Menu Icons and Language Selector */}
      <div className="hidden md:flex items-center space-x-6 text-gray-700">
        <div
          className="relative flex flex-col items-center text-sm cursor-pointer hover:text-primary-blue-500"
          onClick={() => navigate("/cart")}
        >
          <IoCartOutline size={20} />
          <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-1 rounded-full">
            1
          </span>
          <span>{t("cart")}</span>
        </div>
        <div
          className="relative flex flex-col items-center text-sm cursor-pointer hover:text-primary-blue-500"
          onClick={() => navigate("/wishlist")}
        >
          <FaRegHeart size={20} />
          <span className="absolute top-0 right-0 bg-gray-400 text-white text-xs px-1 rounded-full">
            0
          </span>
          <span>{t("wishlist")}</span>
        </div>

        {/* Language Selector */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <img
            src={currentLanguage.flag}
            alt={`${currentLanguage.label} flag`}
            className="h-4 w-4 rounded-full"
          />
          <select
            value={currentLanguage.code}
            onChange={(e) => changeLanguage(e.target.value)}
            className="border border-gray-300 rounded-md bg-white p-1 text-sm"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden">
          <input
            type="text"
            placeholder={t("search_placeholder")}
            className="border border-gray-300 px-4 py-2 w-full rounded-md outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            {t("search")}
          </button>
          <div className="flex justify-around text-gray-700">
            <div
              className="flex flex-col items-center text-sm cursor-pointer hover:text-primary-blue-500"
              onClick={() => navigate("/cart")}
            >
              <IoCartOutline size={20} />
              <span>{t("cart")}</span>
            </div>
            <div
              className="flex flex-col items-center text-sm cursor-pointer hover:text-primary-blue-500"
              onClick={() => navigate("/wishlist")}
            >
              <FaRegHeart size={20} />
              <span>{t("wishlist")}</span>
            </div>
            {/* Mobile Language Selector */}
            <div className="flex items-center space-x-1 cursor-pointer">
              <img
                src={currentLanguage.flag}
                alt={`${currentLanguage.label} flag`}
                className="h-4 w-4 rounded-full"
              />
              <select
                value={currentLanguage.code}
                onChange={(e) => changeLanguage(e.target.value)}
                className="border border-gray-300 rounded-md bg-white p-1 text-sm"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
