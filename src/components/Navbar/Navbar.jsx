import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { ThemeContext } from "../../theme/ThemeContext";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Navbar.css";
import AuthModal from "../AuthModal/AuthModal";

const Navbar = () => {
  const { cart, wishlist } = useContext(ShopContext);
  const { dark, setDark } = useContext(ThemeContext);
  const { search, setSearch } = useContext(ShopContext);
  const navigate = useNavigate();

const [showAuth,setShowAuth]=useState(false)
const [showMenu,setShowMenu]=useState(false)
const [profile,setProfile]=useState(false)


 const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const isLogin = localStorage.getItem("isLogin");


  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?search=${search}`);
  };
 return (
    <>
    <nav className="navbar">
      {/* LOGO */}
      <Link to="/" className="logo">
        DressShop
      </Link>

{/* MENU */}
<ul className="nav-links">
<li><Link to="/men">Men</Link></li>
<li><Link to="/women">Women</Link></li>
<li><Link to="/girls">Girls</Link></li>
<li><Link to="/boys">Boys</Link></li>

</ul>

{isLogin && (
        <p>{user.email}</p>
      )}
      {showAuth && <AuthModal close={()=>setShowAuth(false)} />}

     

{/* SEARCH */}
<div className="search">
<input
placeholder="Search for products..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>
</div>

{/* ICONS */}
<div className="icons">

<Link to="/wishlist" className="icon">
<FaHeart />
<span>{wishlist.length}</span>
</Link>

<Link to="/cart" className="icon">
<FaShoppingCart />
<span>{cart.length}</span>
</Link>

<div className="profile">

<FaUser onClick={()=>setProfile(!profile)} />

{profile && (

<div className="profile-menu">

<button onClick={()=>setShowAuth(true)}>
Login
</button>

<Link to="/wishlist">Wishlist</Link>
<Link to="/cart">Cart</Link>

</div>

)}

</div>

</div>

</nav>

{/* {showAuth && <AuthModal close={()=>setShowAuth(false)} />} */}

</>
)
}
//   );
// };

export default Navbar;




// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { ShopContext } from "../../context/ShopContext";
// import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
// import "./Navbar.css";
// import AuthModal from "../AuthModal/AuthModal";

// const Navbar = () => {

// const { cart, wishlist, search, setSearch } = useContext(ShopContext)

// const [showAuth,setShowAuth] = useState(false)
// const [mobileMenu,setMobileMenu] = useState(false)

// return (

// <>
// <nav className="navbar">

// {/* LOGO */}
// <Link to="/" className="logo">DressShop</Link>



// {/* MENU */}
// <ul className={`nav-links ${mobileMenu ? "active" : ""}`}>

// <li><Link to="/men">Men</Link></li>
// <li><Link to="/women">Women</Link></li>
// <li><Link to="/girls">Girls</Link></li>
// <li><Link to="/boys">Boys</Link></li>

// </ul>

// {/* SEARCH */}
// <div className="search">
// <input
// placeholder="Search for products..."
// value={search}
// onChange={(e)=>setSearch(e.target.value)}
// />
// </div>

// {/* ICONS */}
// <div className="icons">

// <Link to="/wishlist" className="icon">
// <FaHeart/>
// <span>{wishlist.length}</span>
// </Link>

// <Link to="/cart" className="icon">
// <FaShoppingCart/>
// <span>{cart.length}</span>
// </Link>

// <FaUser onClick={()=>setShowAuth(true)} />

// </div>

// </nav>

// {showAuth && <AuthModal close={()=>setShowAuth(false)} />}

// </>

// )

// }

// export default Navbar