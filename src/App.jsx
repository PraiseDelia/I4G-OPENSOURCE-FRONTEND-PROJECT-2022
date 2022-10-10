import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/dashboard";
import Cart from "./pages/dashboard/Cart";
import Messages from "./pages/dashboard/Messages";
import Products from "./pages/dashboard/Products";
import Wishlist from "./pages/dashboard/Wishlist";
import Dashboard from "./templates/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="user" element={<Index />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="messages" element={<Messages />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
