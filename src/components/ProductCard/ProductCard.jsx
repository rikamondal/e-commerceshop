
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {

const { addToCart, toggleWishlist, wishlist } =
useContext(ShopContext);

const isWishlisted = wishlist.some(
(item) => item.id === product.id
);

const handleCart = () => {

const user = localStorage.getItem("loggedInUser");

if (!user) {
alert("Please login first");
return;
}

addToCart(product);

};

return (

<div className="card">

<img src={product.image} alt={product.title} />

<h3>{product.title}</h3>

<p>₹{product.price}</p>

<div className="card-buttons">

<Link to={`/product/${product.id}`} className="view-btn">
View
</Link>

</div>

<button onClick={handleCart}>
Add To Cart
</button>

<button onClick={() => toggleWishlist(product)}>
{isWishlisted ? "❤️" : "🤍"}
</button>

</div>

);

};

export default ProductCard;







