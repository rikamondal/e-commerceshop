import  { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const SearchBar = () => {

const {search,setSearch} = useContext(ShopContext)

return (

<input
type="text"
placeholder="Search for products..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
padding:"10px",
width:"300px",
border:"1px solid gray",
borderRadius:"5px"
}}
/>

)

}

export default SearchBar