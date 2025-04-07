import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/myportfolio" element={<Navigate to="/myportfolio/home" replace />} />
        <Route path="/myportfolio/home" element={<Home />} />
        <Route path="/myportfolio/about" element={<About />} />
        <Route path="/myportfolio/projects" element={<Projects />} />
        <Route path="/myportfolio/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
