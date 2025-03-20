
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import GetStarted from "./pages/GetStarted";
import About from "./pages/About";
import "./styles.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;
