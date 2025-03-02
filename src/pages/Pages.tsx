import { Route, Routes } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "./home/Home";
import Wishlist from "./wishlist/Wishlist";
import Cart from "./cart/Cart";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default Pages;
