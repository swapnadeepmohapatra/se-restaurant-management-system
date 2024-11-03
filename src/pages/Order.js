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
    <div
      style={{
        margin: "20px",
        color: "#333",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ color: "#4A90E2" }}>Order Summary</h2>
      {orders.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {orders.map((order, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#F5F7FA",
                border: "1px solid #E2E6EA",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                marginBottom: "15px",
              }}
            >
              <h4 style={{ color: "#4A90E2", marginBottom: "10px" }}>
                Order {index + 1}
              </h4>
              <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                {order.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                      color: "#333",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>{item.name}</span>
                    <span>
                      x{item.quantity} - ₹{item.total}
                    </span>
                  </li>
                ))}
              </ul>
              <h4
                style={{
                  color: "#333",
                  borderTop: "1px solid #E2E6EA",
                  paddingTop: "10px",
                  marginTop: "10px",
                }}
              >
                Total:{" "}
                <span style={{ color: "#4A90E2" }}>
                  ₹{order.reduce((acc, item) => acc + item.total, 0)}
                </span>
              </h4>
              <button
                style={{
                  backgroundColor: "#4A90E2",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  marginTop: "15px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onClick={() => {
                  window.open("https://rzp.io/rzp/bg4ul1g", "_blank");
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#357ABD")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#4A90E2")}
              >
                Proceed to Payment
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "#666", marginTop: "20px" }}>No orders found.</p>
      )}
    </div>
  );
};

export default Order;
