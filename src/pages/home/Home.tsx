import About from "@/components/about/About";
import FamouseBrands from "@/components/famousBrends/FamousBrends";
import Products from "@/components/Products/Products";

const Home = () => {
  return (
    <div className="wrapper">
      <Products />
      <FamouseBrands />
      <About />
    </div>
  );
};

export default Home;
