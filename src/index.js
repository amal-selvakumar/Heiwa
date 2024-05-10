import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import WellnessPackages from "./pages/ourServices/WellnessPackages";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/wellnessPackages" element={<WellnessPackages />} />

      {/* <Route path="/services" element={<Services />} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
