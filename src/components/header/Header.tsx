import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdMenu, MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AsaxiyLogoImg from "@/assets/asaxiy-logo.svg";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import UzbFlagImg from "@/assets/uzb-flag.svg";
import UsaFlagImg from "@/assets/usa-flag.svg";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  return (
    <header className="px-[1%] md:px-[3%] py-4 flex items-center justify-between bg-white border-b">
      <img
        onClick={() => navigate("/")}
        src={AsaxiyLogoImg}
        alt="Asaxiy"
        className="h-8 w-auto hover:cursor-pointer"
      />

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
        <div
          className="flex items-center flex-col space-x-1 cursor-pointer"
          onClick={() => changeLanguage(i18n.language === "en" ? "uz" : "en")}
        >
          <img
            src={i18n.language === "en" ? UsaFlagImg : UzbFlagImg}
            alt={i18n.language === "en" ? "USA Flag" : "Uzbekistan Flag"}
            className="h-4 w-4 rounded-full"
          />
          <span>{i18n.language === "en" ? "O'zbekcha" : "English"}</span>
        </div>
      </div>

      <button
        className="md:hidden text-gray-600"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
      </button>

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
            <div
              className="flex items-center space-x-1 cursor-pointer"
              onClick={() =>
                changeLanguage(i18n.language === "en" ? "uz" : "en")
              }
            >
              <img
                src={i18n.language === "en" ? UsaFlagImg : UzbFlagImg}
                alt={i18n.language === "en" ? "USA Flag" : "Uzbekistan Flag"}
                className="h-4 w-4 rounded-full"
              />
              <span>{i18n.language === "en" ? "O'zbekcha" : "English"}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
