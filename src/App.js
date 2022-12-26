import './App.css';
import React, {useState, useEffect} from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Header  from './components/Header'
import Certificets from './components/pages/Certificets';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <HashRouter>
      <Header />
        <Routes>

            <Route path="/" element={<Projects /> } />
            <Route path="/about" element={<About /> } />
            <Route path="/contact" element={<Contact /> } />
            <Route path="/certificets" element={<Certificets /> } />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
