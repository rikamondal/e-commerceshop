
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { products } from "../data/products";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

  const [products2] = useState(products);
  const [search, setSearch] = useState("");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  // ================= SEARCH =================

  const filteredProducts = products2.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );


  // ================= CART =================

  const addToCart = (product) => {

    const exist = cart.find((item) => item.id === product.id);

    if (exist) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

    } else {

      setCart([...cart, { ...product, quantity: 1 }]);

    }

    toast.success("Added to Cart");
  };

  const increaseQty = (id) => {

    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

  };

  const decreaseQty = (id) => {

    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };

  const removeFromCart = (id) => {

    setCart(cart.filter((item) => item.id !== id));
    toast.error("Removed from Cart");

  };

  const getTotal = () => {

    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

  };

  // ================= WISHLIST =================

  const toggleWishlist = (product) => {

    const exist = wishlist.find((item) => item.id === product.id);

    if (exist) {

      setWishlist(
        wishlist.filter((item) => item.id !== product.id)
      );

      toast.info("Removed from Wishlist");

    } else {

      setWishlist([...wishlist, product]);

      toast.success("Added to Wishlist");

    }

  };

  // ================= LOCAL STORAGE =================

  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart));

  }, [cart]);

  useEffect(() => {

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

  }, [wishlist]);

  return (

    <ShopContext.Provider
      value={{
        products: filteredProducts,
        search,
        setSearch,
        cart,
        wishlist,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        getTotal,
        toggleWishlist,
      }}
    >

      {children}

    </ShopContext.Provider>

  );

};

export default ShopContextProvider;