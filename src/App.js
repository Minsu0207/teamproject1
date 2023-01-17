import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../src/components/Main";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Test1 from "./components/Test1";
import First from "./components/First";

function App() {
  return (
    <First />
    // <Routes>
    //   <Route path="/" element={<Main />} />
    //   <Route path="/p1" element={<Page1 />} />
    //   <Route path="/p2" element={<Page2 />} />
    // </Routes>
    // <Test1 />
  );
}

export default App;
