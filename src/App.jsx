import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
