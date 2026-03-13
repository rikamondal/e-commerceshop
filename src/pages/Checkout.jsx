const Checkout = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Checkout Page</h2>
      <p>This is a demo checkout (No backend connected)</p>
      <button onClick={() => alert("Order Placed Successfully!")}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;