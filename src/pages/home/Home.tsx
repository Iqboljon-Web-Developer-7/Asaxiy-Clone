import About from "@/components/about/About";
import FamouseBrands from "@/components/famousBrends/FamousBrends";

const Home = () => {
  return (
    <div className="bg-slate-50 wrapper">
      <FamouseBrands />
      <About />
    </div>
  );
};

export default Home;
