import "./Filters.css";

const Filters = ({ setFilters }) => {
  return (
    <div className="filters">
      <select onChange={(e) => setFilters(prev => ({...prev, price: e.target.value}))}>
        <option value="">Price</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>
    </div>
  );
};

export default Filters;