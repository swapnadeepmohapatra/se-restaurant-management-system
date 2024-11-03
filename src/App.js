import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from "./pages/Menu";
import Order from "./pages/Order";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h1>Restaurant Management System</h1>
        <nav style={{ marginBottom: "20px" }}>
          <Link
            to="/"
            style={{ margin: "10px", textDecoration: "none", color: "blue" }}
          >
            Menu
          </Link>
          <Link
            to="/order"
            style={{ margin: "10px", textDecoration: "none", color: "blue" }}
          >
            Order
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
