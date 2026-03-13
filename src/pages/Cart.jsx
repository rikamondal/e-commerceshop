import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    getTotal,
  } = useContext(ShopContext);

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          {item.title} - ₹{item.price}
          <button onClick={() => decreaseQty(item.id)}>-</button>
          {item.quantity}
          <button onClick={() => increaseQty(item.id)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{getTotal()}</h3>
       <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;