import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";

import Acer from "@/assets/brends/acer.webp";
import Apple from "@/assets/brends/apple.webp";
import Artel from "@/assets/brends/artel.webp";
import Asus from "@/assets/brends/asus.webp";
import Bosch from "@/assets/brends/bosch.webp";
import Goodwell from "@/assets/brends/goodwell.webp";
import Hoco from "@/assets/brends/hoco.webp";
import Hoffman from "@/assets/brends/hoffman.webp";
import Intex from "@/assets/brends/intex.webp";
import Kukmara from "@/assets/brends/kukmara.webp";
import Lenovo from "@/assets/brends/lenovo.webp";
import Nokia from "@/assets/brends/nokia.webp";
import Philips from "@/assets/brends/philips.webp";
import Samsung from "@/assets/brends/samsung.webp";
import Sony from "@/assets/brends/sony.webp";
import Xiaomi from "@/assets/brends/xiomi.webp";

import { useTranslation } from "react-i18next";

const brands = [
  { name: "Nokia", src: Nokia },
  { name: "Hoffmann", src: Hoffman },
  { name: "Apple", src: Apple },
  { name: "Acer", src: Acer },
  { name: "Lenovo", src: Lenovo },
  { name: "Xiaomi", src: Xiaomi },
  { name: "Artel", src: Artel },
  { name: "Asus", src: Asus },
  { name: "Bosch", src: Bosch },
  { name: "Goodwell", src: Goodwell },
  { name: "Hoco", src: Hoco },
  { name: "Intex", src: Intex },
  { name: "Kukmara", src: Kukmara },
  { name: "Philips", src: Philips },
  { name: "Samsung", src: Samsung },
  { name: "Sony", src: Sony },
];

export default function BrandCarousel() {
  const { t } = useTranslation();

  return (
    <div className="p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{t("famous_brands")}</h2>
        <a href="#" className="text-blue-500 text-sm">
          {t("all_brands")}
        </a>
      </div>

      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        mousewheel={{ forceToAxis: true }} // Enables trackpad & wheel scrolling
        modules={[Autoplay, Mousewheel]}
        className="w-full"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-44 h-24 bg-white p-4 rounded-lg flex items-center justify-center">
              <img
                src={brand.src}
                alt={brand.name}
                className="max-h-12 max-w-24 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
