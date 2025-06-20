// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import React from "react";
import Layout from "./layout/Layout";
import FromPage from "./screens/fromPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/from" element={<FromPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
