import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard/ProductCard";

const Women = () => {
  const { products } = useContext(ShopContext);

  const filtered = products.filter(p => p.category === "women");

  return (
    <div className="grid">
      {filtered.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Women;