"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsScrollingDown(true); // Scrolling down
      if (isMenuOpen) {
        setIsMenuOpen(false); // Hide menu if open while scrolling
      }
    } else {
      setIsScrollingDown(false); // Scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isMenuOpen]);

  return (
    <div className="navbar">
      <nav className={`${isScrollingDown ? 'hidden' : ''}`}>
        <div className="logo-section">
          <img src="/crystan.png" alt="Logo" />Crystan
        </div>
        <div className="links">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/services">Services</Link></li>
          </ul>
        </div>
        <div className="right-section">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search">
            <g>
              <path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"></path>
            </g>
          </svg>
          {!isMenuOpen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="hamburger"
              onClick={toggleMenu}
            >
              <g>
                <path d="M1 8h30a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2zM31 15H1a1 1 0 0 0 0 2h30a1 1 0 0 0 0-2zM31 24H1a1 1 0 0 0 0 2h30a1 1 0 0 0 0-2z"></path>
              </g>
            </svg>
          )}
          {isMenuOpen && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="cross" onClick={toggleMenu}>
              <path d="M83.9 17.1c-.9-.9-2.5-.9-3.4 0l-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4l30 30-30 30c-.9.9-.9 2.5 0 3.4.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l30-30 30 30c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4l-30-30 30-30c.9-.9.9-2.4 0-3.4z"></path>
            </svg>
          )}
        </div>
      </nav>
      <div className={`hamburger-menu-content ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li className="hidden-navbar"><Link href="/">Home</Link></li>
          <li className="hidden-navbar"><Link href="/#about">About Us</Link></li>
          <li className="hidden-navbar"><Link href="/contact">Contact Us</Link></li>
          <li className="hidden-navbar"><Link href="/services">Services</Link></li>
          <li className="shown-navbar"><Link href="#crystan">CRYSTAN Aurora</Link></li>
          <li className="shown-navbar"><Link href="#crystan">CRYSTAN Zenith</Link></li>
          <li className="shown-navbar"><Link href="#crystan">CRYSTAN Nebula</Link></li>
          <li className="shown-navbar"><Link href="#crystan">CRYSTAN Eclipse</Link></li>
          <li className="shown-navbar"><Link href="#crystan">CRYSTAN Vortex</Link></li>
          <li className="shown-navbar"><Link href="#crystan">CRYSTAN Nova</Link></li>
        </ul>
      </div>
    </div >
  );
};

export default Navbar;