import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar.jsx";
import Home from "./Pages/Public/Home.jsx";
import Footer from "./Components/Common/Footer.jsx";
import AIAgent from "./Components/Common/AIAgent.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <AIAgent />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
