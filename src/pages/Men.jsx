import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard/ProductCard";

const Men = () => {
  const { products } = useContext(ShopContext);

  const filtered = products.filter(p => p.category === "men");

  return (
    <div className="grid">
      {filtered.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Men;