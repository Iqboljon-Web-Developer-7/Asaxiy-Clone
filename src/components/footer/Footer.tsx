import {
  FaFacebook,
  FaTelegram,
  FaInstagram,
  FaYoutube,
  FaRss,
} from "react-icons/fa";
import UzumIcon from "@/assets/payments/uzum.svg";
import PaymeIcon from "@/assets/payments/payme.svg";
import VisaIcon from "@/assets/payments/visa.svg";
import MastercardIcon from "@/assets/payments/mastercard.svg";
import HumoIcon from "@/assets/payments/humo.svg";
import UzcardIcon from "@/assets/payments/uzcard.svg";

import { GoMail } from "react-icons/go";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { GrMapLocation } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { RiArrowRightSLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8">
      <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Ma'lumotlar</h3>
          <ul className="text-gray-600 space-y-2">
            {[
              "Ko'p so'raladigan savollar",
              "Yangiliklar",
              "Blog",
              "Bizning brendlarimiz",
              "Asaxiydagi karyerasi",
              "Muddatli to’lov ofertasi",
              "Ommaviy oferta",
              "Biz haqimizda",
              "Sayt xaritasi",
            ].map((item, idx) => (
              <li key={idx} className="hover:text-blue-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Biz bilan aloqa</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex-center justify-start gap-x-3">
              <MdLocalPhone className="text-xl" /> +998 71 200 01 05
            </li>
            <li className="flex-center justify-start gap-x-3">
              <GoMail className="text-xl" /> info@asaxiy.uz
            </li>
            <li className="flex-center justify-start gap-x-3">
              <PiTelegramLogoDuotone className="text-xl" /> Telegram bot
            </li>
            <li className="flex-center justify-start gap-x-3">
              <IoLocationOutline className="text-xl" /> Chilonzor ko'chasi,
              45/2, Toshkent
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-4">
            Sodiqlik dasturlari
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>"El-yurt ishonchi" statusi</li>
            <li>«Asaxiy Plus»</li>
            <li>«Asaxiy Plus» ofertasi</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Yetkazib berish va do'konlar
          </h3>
          <div className="space-y-3 mt-2">
            {[
              {
                label: "Bizning do'konlar",
                icon: <HiOutlineBuildingStorefront />,
              },
              { label: "Olib ketish punktlari", icon: <GrMapLocation /> },
              { label: "Yetkazib berish", icon: <TbTruckDelivery /> },
            ].map((item, idx) => (
              <button
                key={idx}
                className="min-w-64 flex items-center bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition"
              >
                <span className="mr-2 text-xl">{item.icon}</span>
                <span className="text-center w-full font-medium">
                  {item.label}
                </span>
                <span className="text-2xl">
                  <RiArrowRightSLine />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">To'lov turlari</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              UzumIcon,
              PaymeIcon,
              VisaIcon,
              MastercardIcon,
              HumoIcon,
              UzcardIcon,
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-200 p-3 py-4 rounded-lg flex justify-center items-center"
              >
                <img src={item} alt={`payment-icon-${idx}`} className="h-5" />
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-4">
            Biz ijtimoiy tarmoqlarda
          </h3>
          <div className="flex space-x-3 text-gray-600 text-2xl">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaTelegram className="cursor-pointer hover:text-blue-400" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaYoutube className="cursor-pointer hover:text-red-500" />
            <FaRss className="cursor-pointer hover:text-orange-500" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-700 font-medium mt-8 border-t pt-4">
        2015 - 2025 Internet-do’kon asaxiy.uz: Maishiy texnikalar va boshqalar.
        Mahsulotni yetkazib berish barcha viloyatlarda amalga oshiriladi. Barcha
        huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
