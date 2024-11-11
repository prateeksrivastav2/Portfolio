"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';


const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const hideNavHandler = () => setShowNav(false);

  return (
    <div>
      {/* Responsive navbar */}
      <Navbar openNav={showNavHandler} />
      <MobileNavbar showNav={showNav} closeNav={hideNavHandler} />
    </div>
  );
};

export default ResponsiveNavbar;
