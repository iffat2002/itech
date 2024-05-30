import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import ContactUs from './ContactUs';
import Arrow from '../components/Arrow';
import Whatsapp from '../components/Whatsapp';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />

      </Routes>
      <Arrow />
      <Whatsapp />
    </div>
  );
}

export default Routing;
