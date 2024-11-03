import React, { useEffect, useState } from "react";

const Order = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrdersFromLocalStorage = () => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  };

  useEffect(() => {
    fetchOrdersFromLocalStorage();
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <h2>Order</h2>
      {orders.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {orders.map((order, index) => (
            <li
              key={index}
              style={{
                margin: "10px 0",
                border: "1px solid #ccc",
                padding: "10px",
              }}
            >
              <h4>Order {index + 1}:</h4>
              <ul style={{ listStyleType: "none", padding: "0" }}>
                {order.map((item, itemIndex) => (
                  <li key={itemIndex} style={{ margin: "5px 0" }}>
                    {item.name} (x{item.quantity}) - ${item.total}
                  </li>
                ))}
              </ul>
              <h4>
                Total: ${order.reduce((acc, item) => acc + item.total, 0)}
              </h4>
              <button
                style={{ marginTop: "10px" }}
                onClick={() => {
                  window.open("https://rzp.io/rzp/bg4ul1g", "_blank");
                }}
              >
                Proceed to Payment
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Order;
