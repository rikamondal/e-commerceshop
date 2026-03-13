import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "./ProductDetails.css";
import Rating from "../components/Rating/Rating";


const ProductDetails = () => {
  const { id } = useParams();
 const { products, addToCart } = useContext(ShopContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    

     <div className="product-details">

      <div className="details-container">

        <div className="image-section">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="info-section">

          <h2>{product.title}</h2>

<Rating rating={product.rating} reviews={product.reviews} />

          <p className="price">₹{product.price}</p>

          <p className="description">
            Premium quality product made with high quality material.
            Perfect for modern fashion and comfortable daily wear.
          </p>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;







