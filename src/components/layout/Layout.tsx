import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = () => {
  return (
    <main className="bg-slate-50">
      <div className="sticky top-0 z-50 bg-white">
        <Header />
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
