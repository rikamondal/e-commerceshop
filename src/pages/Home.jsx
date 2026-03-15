import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import Filters from "../components/Filters/Filters";
import ProductCard from "../components/ProductCard/ProductCard";

const Home = () => {
  const { products } = useContext(ShopContext);
  const [filters, setFilters] = useState({});

  // let filtered = [...products];
  let filtered = products ? [...products] : [];

  if (filters.price === "low")
    filtered.sort((a,b)=>a.price-b.price);

  if (filters.price === "high")
    filtered.sort((a,b)=>b.price-a.price);

  return (
    <>
   
      <Hero />
      <Slider />
      
      <Filters setFilters={setFilters} />
<h1>All Products</h1>
      <div className="grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;




