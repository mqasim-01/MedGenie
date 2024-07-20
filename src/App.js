// App.js

import React, { useState } from 'react';
import ContactSection from './components/contactform';
import Footer from './components/footer';
import Header from './components/header';
import HeroSection from './components/hero';
import LandingPage from './components/landing';

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="App">
      {/* Header Component */}
      <LandingPage/>

      

      {/* Footer Component */}
      <Footer />

    </div>
  );
}

export default App;
