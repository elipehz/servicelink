import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SearchServices from './pages/SearchServices';
import BusinessSignup from './pages/BusinessSignup';
import Login from './pages/Login';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/buscar-servicos" element={<SearchServices />} />
            <Route path="/para-empresas" element={<BusinessSignup />} />
            <Route path="/entrar" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;