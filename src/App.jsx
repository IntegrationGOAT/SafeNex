import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Combustion from './pages/Combustion';
import Emulsification from './pages/Emulsification';

import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 

function App() {
  return (
    <Router>
      {}
      <Navbar />
      
      {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/combustion" element={<Combustion />} />
        <Route path="/emulsification" element={<Emulsification />} />
        {}
      </Routes>
      
      {}
      <Footer />
    </Router>
  );
}

export default App;