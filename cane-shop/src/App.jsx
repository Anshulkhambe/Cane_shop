// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Collections from './pages/Collections';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import WhyCane from './pages/WhyCane';
import Services from './pages/Services';
import NotFound from './pages/NotFound';

function App() {
  return (
    <React.StrictMode>
      {/* Test Tailwind CSS */}

      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="collections" element={<Collections />} />
              <Route path="about" element={<About />} />
              <Route path="why-cane" element={<WhyCane />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
              <Route path="services" element={<Services />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Router>
    </React.StrictMode>
  );
}

export default App;