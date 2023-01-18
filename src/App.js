import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/p1" element={<Page1 />} />
      <Route path="/p2" element={<Page2 />} />
    </Routes>
  );
}

export default App;
