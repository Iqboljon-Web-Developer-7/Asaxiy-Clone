import About from "@/components/about/About";
import FamouseBrands from "@/components/famousBrends/FamousBrends";
import Products from "@/components/Products/Products";

const Home = () => {
  return (
    <div className="bg-slate-50 wrapper">
      <FamouseBrands />
      <About />
      <Products />
    </div>
  );
};

export default Home;
