import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Girls from "../pages/Girls";
import Boys from "../pages/Boys";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Checkout from "../pages/Checkout"
const AppRoutes = () => {
  return (
    <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/girls" element={<Girls />} />
          <Route path="/boys" element={<Boys />} />
          <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
          <Route path="/cart"element={<Cart />}/>
         <Route path="/wishlist"element={<Wishlist />}/>
<Route path="/checkout"element={<Checkout />}/>
        </Routes>
      </MainLayout>
  );
};

export default AppRoutes;