import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./global-css/app.css";

// import components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Knapsackx from "./components/knapsackx/Knapsackx";
import Inm from "./components/inm/Inm";
import Cooktivate from "./components/cooktivate/Cooktivate";
import Askaiden from "./components/askaiden/Askaiden";
import Mymori from "./components/mymori/Mymori";
import Linkedinlearning from "./components/linkedinlearning/Linkedinlearning";
import Sirloinsociety from "./components/sirloinsociety/Sirloinsociety";
import ContactButton from "./components/contact-btn/ContactBtn";
import ScrollToTopButton from "./components/scroll-btn/ScrollBtn";

const App = () => {

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/knapsackx" element={<Knapsackx />} />
          <Route path="/inm" element={<Inm />} />
          <Route path="/cooktivate" element={<Cooktivate />} />
          <Route path="/askaiden" element={<Askaiden />} />
          <Route path="/mymori" element={<Mymori />} />
          <Route path="/linkedinlearning" element={<Linkedinlearning />} />
          <Route path="/sirloinsociety" element={<Sirloinsociety />} />
        </Routes>
        <Footer />
        <ContactButton />
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
