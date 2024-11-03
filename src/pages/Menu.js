import React, { useState } from "react";

const Menu = () => {
  const menuCategories = {
    Appetizers: [
      { id: 1, name: "Samosa", price: 20 },
      { id: 2, name: "Paneer Tikka", price: 150 },
      { id: 3, name: "Onion Bhaji", price: 80 },
      { id: 4, name: "Aloo Tikki", price: 50 },
      { id: 5, name: "Hara Bhara Kabab", price: 120 },
    ],
    Soup: [
      { id: 6, name: "Tomato Soup", price: 100 },
      { id: 7, name: "Sweet Corn Soup", price: 120 },
      { id: 8, name: "Mushroom Soup", price: 130 },
      { id: 9, name: "Manchow Soup", price: 110 },
    ],
    Rice: [
      { id: 10, name: "Biryani", price: 250 },
      { id: 11, name: "Pulao", price: 180 },
      { id: 12, name: "Jeera Rice", price: 100 },
      { id: 13, name: "Fried Rice", price: 150 },
    ],
    Roti: [
      { id: 14, name: "Naan", price: 30 },
      { id: 15, name: "Roti", price: 20 },
      { id: 16, name: "Butter Naan", price: 40 },
      { id: 17, name: "Garlic Naan", price: 50 },
      { id: 18, name: "Lachha Paratha", price: 60 },
    ],
    "Main Course": [
      { id: 19, name: "Butter Chicken", price: 300 },
      { id: 20, name: "Dal Makhani", price: 200 },
      { id: 21, name: "Palak Paneer", price: 250 },
      { id: 22, name: "Chole Masala", price: 180 },
      { id: 23, name: "Paneer Butter Masala", price: 280 },
      { id: 24, name: "Chicken Curry", price: 270 },
    ],
    Dessert: [
      { id: 25, name: "Gulab Jamun", price: 50 },
      { id: 26, name: "Ras Malai", price: 80 },
      { id: 27, name: "Jalebi", price: 60 },
      { id: 28, name: "Kheer", price: 90 },
      { id: 29, name: "Ice Cream", price: 70 },
    ],
  };

  const [quantities, setQuantities] = useState(
    Object.fromEntries(
      Object.keys(menuCategories).flatMap((category) =>
        menuCategories[category].map((item) => [item.id, 0])
      )
    )
  );

  const updateQuantity = (id, change) => {
    setQuantities((prev) => {
      const newQuantity = prev[id] + change;
      return { ...prev, [id]: newQuantity < 0 ? 0 : newQuantity };
    });
  };

  const handleOrder = () => {
    const orderItems = Object.keys(quantities)
      .filter((key) => quantities[key] > 0)
      .map((key) => {
        const item = Object.values(menuCategories)
          .flat()
          .find((item) => item.id === parseInt(key));
        return {
          name: item.name,
          quantity: quantities[key],
          total: item.price * quantities[key],
        };
      });
    console.log("Order Items:", orderItems);
    saveOrderInLocalStorage(orderItems);
    alert("Order placed!");
  };

  const saveOrderInLocalStorage = (orderItems) => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...orders, orderItems]));
  };

  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <h2>Menu</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {Object.keys(menuCategories).map((category) => (
          <div key={category} style={{ marginBottom: "20px" }}>
            <h3>{category}</h3>
            <ul style={{ listStyleType: "none", padding: "0" }}>
              {menuCategories[category].map((item) => (
                <li key={item.id} style={{ margin: "10px 0", display: "flex" }}>
                  <span
                    style={{ margin: "0 10px", flex: 1, textAlign: "left" }}
                  >
                    {item.name}
                  </span>
                  <span
                    style={{ margin: "0 10px", flex: 1, textAlign: "right" }}
                  >
                    ₹{item.price}
                  </span>
                  <span>
                    <button onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </button>
                    <span style={{ margin: "0 10px" }}>
                      {quantities[item.id]}
                    </span>
                    <button onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button
        onClick={handleOrder}
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
      >
        Order
      </button>
    </div>
  );
};

export default Menu;
