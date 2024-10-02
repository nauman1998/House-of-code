import React, { useState,useEffect  } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeepDropdownOpen, setIsDeepDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle dropdown toggling
  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDeepDropdownToggle = (e) => {
    e.preventDefault();
    setIsDeepDropdownOpen(!isDeepDropdownOpen);
  };

  // Handle mobile menu toggling
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    if (location.hash !== '#hero') {
      window.location.hash = '#hero';
    }
  }, []);
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="" className="logo d-flex align-items-center me-auto me-lg-0">
          <h1 className="sitename">HOC</h1>
          <span>.</span>
        </a>

        <nav id="navmenu" className={`navmenu ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
          <ul>
            <li>
              <Link to="#hero" onClick={() => scrollToSection('hero')} className={`${location.hash === '#hero' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="#about" onClick={() => scrollToSection('about')} className={`${location.hash === '#about' ? 'active' : ''}`}>
                About
              </Link>
            </li>
            <li>
              <Link to="#services" onClick={() => scrollToSection('services')} className={`${location.hash === '#services' ? 'active' : ''}`}>
                Services
              </Link>
            </li>
            <li>
              <Link to="#portfolio" onClick={() => scrollToSection('portfolio')} className={`${location.hash === '#portfolio' ? 'active' : ''}`}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="#team" onClick={() => scrollToSection('team')} className={`${location.hash === '#team' ? 'active' : ''}`}>
                Team
              </Link>
            </li>
            <li>
              <Link to="#contact" onClick={() => scrollToSection('contact')} className={`${location.hash === '#contact' ? 'active' : ''}`}>
                Contact Us
              </Link>
            </li>
          </ul>
          <i className={`mobile-nav-toggle d-xl-none bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`} onClick={handleMobileMenuToggle}></i>
        </nav>

        <a className="btn-getstarted" href="index.html#about">Get Started</a>
      </div>
    </header>
  );
};

export default Header;
