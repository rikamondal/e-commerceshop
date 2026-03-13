import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Wishlist = () => {
  const { wishlist, toggleWishlist } =
    useContext(ShopContext);

  return (
    <div>
      <h2>Wishlist</h2>

      {wishlist.length === 0 && <p>No items yet</p>}

      {wishlist.map((item) => (
        <div key={item.id}>
          {item.title} - ₹{item.price}
          <button onClick={() => toggleWishlist(item)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;