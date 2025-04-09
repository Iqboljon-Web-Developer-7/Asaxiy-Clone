import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselItem from "./Carousel/CarouselItem";
import { Mousewheel, Scrollbar } from "swiper/modules";

import StyledLink from "@/styledComponents/StyledLink";
import { ProductType } from "@/lib/types";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/scrollbar";
import ProductLoading from "./ProductLoading";
import { client } from "@/utils/Client";
import { SANITY_PRODUCTS_QUERY } from "@/utils/Data";

const Products: FC<{ category?: string }> = () => {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [swiperDir, setSwiperDir] = useState(document.documentElement.getAttribute("dir") || "ltr");

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const fetchedProducts = await client.fetch(
          SANITY_PRODUCTS_QUERY(0, 20)
        );
        setProducts(fetchedProducts);
      } catch (error: any) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInitialData();
  }, []);

  // Listen for language changes to update the Swiper direction.
  useEffect(() => {
    const handleLanguageChange = () => {
      const newDir = document.documentElement.getAttribute("dir") || "ltr";
      setSwiperDir(newDir);
    };

    // Subscribe to language change events.
    i18n.on("languageChanged", handleLanguageChange);

    // Cleanup the listener on unmount.
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  const SwiperContents = products.map((product) => (
    <SwiperSlide key={product._id} className="pb-14">
      <CarouselItem product={product} />
    </SwiperSlide>
  ));

  return (
    <div className="products my-6">
      <div className="products__info my-12 flex items-end justify-between">
        <h3 className="text-[2.5rem] leading-[2.75rem] font-medium">
          {t("phones_and_gadgets")}
        </h3>
        <StyledLink destination={"/products"} name={t("more_products")} />
      </div>
      <Swiper
        key={swiperDir} // Changing key re-initializes the Swiper when the direction changes.
        dir={swiperDir} // Pass the direction to Swiper.
        spaceBetween={8}
        slidesPerView={1.5}
        breakpoints={{
          440: { slidesPerView: 2.5, spaceBetween: 8 },
          640: { slidesPerView: 3.4, spaceBetween: 10 },
          800: { slidesPerView: 4.5, spaceBetween: 14 },
          1024: { slidesPerView: 5.5, spaceBetween: 24 },
        }}
        scrollbar={{ hide: true }}
        modules={[Scrollbar, Mousewheel]}
        mousewheel={{ forceToAxis: true }}
        className="mySwiper"
      >
        {products.length <= 0 ? <ProductLoading /> : SwiperContents}
      </Swiper>
    </div>
  );
};

export default Products;
