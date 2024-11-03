import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from "./pages/Menu";
import Order from "./pages/Order";

function App() {
  return (
    <Router>
      <div
        style={{
          textAlign: "center",
          margin: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <header style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "2.5em", color: "#333" }}>
            Restaurant Management System
          </h1>
          <p style={{ fontSize: "1.2em", color: "#666" }}>
            Choose your items and place your order seamlessly
          </p>
        </header>

        <nav style={{ marginBottom: "40px" }}>
          <Link
            to="/"
            style={{
              margin: "0 20px",
              padding: "10px 20px",
              textDecoration: "none",
              color: "#ffffff",
              backgroundColor: "#007bff",
              borderRadius: "8px",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Menu
          </Link>
          <Link
            to="/order"
            style={{
              margin: "0 20px",
              padding: "10px 20px",
              textDecoration: "none",
              color: "#ffffff",
              backgroundColor: "#007bff",
              borderRadius: "8px",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Order
          </Link>
        </nav>

        <div style={{ padding: "0 20px" }}>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
