import About from "@/components/about/About";
import FamouseBrands from "@/components/famousBrends/FamousBrends";
import Products from "@/components/Products/Products";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const RTL_LANGUAGES = ['ar'];

  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language;
    const dir = RTL_LANGUAGES.includes(currentLang) ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.body.setAttribute("dir", dir); // Optional, for full body styling
  }, [i18n.language]);

  return (
    <div className="wrapper">
      <Products />
      <FamouseBrands />
      <About />
    </div>
  );
};

export default Home;
