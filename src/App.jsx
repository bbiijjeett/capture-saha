import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-kreatewave" element={<About />} />  
        <Route path="/our-services" element={<Services />} />
        <Route path="/say-hello" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App