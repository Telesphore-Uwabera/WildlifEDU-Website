import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsAboutOpen(false);
    setIsResourcesOpen(false);
    setIsSupportOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          🦁 CareAfrica
        </Link>
        
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-links" onClick={closeMobileMenu}>Courses</Link>
          </li>
          <li className="nav-item">
            <Link to="/forum" className="nav-links" onClick={closeMobileMenu}>Forum</Link>
          </li>
          <li className="nav-item dropdown">
            <span 
              className="nav-links dropdown-toggle"
              onMouseEnter={() => !isMobileMenuOpen && setIsAboutOpen(true)}
              onMouseLeave={() => !isMobileMenuOpen && setIsAboutOpen(false)}
              onClick={() => isMobileMenuOpen && setIsAboutOpen(!isAboutOpen)}
            >
              About
            </span>
            {isAboutOpen && (
              <ul className="dropdown-menu" 
                  onMouseEnter={() => !isMobileMenuOpen && setIsAboutOpen(true)}
                  onMouseLeave={() => !isMobileMenuOpen && setIsAboutOpen(false)}>
                <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
                <li><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
                <li><Link to="/volunteer" onClick={closeMobileMenu}>Volunteer</Link></li>
                <li><Link to="/events" onClick={closeMobileMenu}>Events</Link></li>
              </ul>
            )}
          </li>
          <li className="nav-item dropdown">
            <span 
              className="nav-links dropdown-toggle"
              onMouseEnter={() => !isMobileMenuOpen && setIsResourcesOpen(true)}
              onMouseLeave={() => !isMobileMenuOpen && setIsResourcesOpen(false)}
              onClick={() => isMobileMenuOpen && setIsResourcesOpen(!isResourcesOpen)}
            >
              Resources
            </span>
            {isResourcesOpen && (
              <ul className="dropdown-menu"
                  onMouseEnter={() => !isMobileMenuOpen && setIsResourcesOpen(true)}
                  onMouseLeave={() => !isMobileMenuOpen && setIsResourcesOpen(false)}>
                <li><Link to="/blog" onClick={closeMobileMenu}>Blog</Link></li>
                <li><Link to="/research" onClick={closeMobileMenu}>Research</Link></li>
                <li><Link to="/videos" onClick={closeMobileMenu}>Videos</Link></li>
                <li><Link to="/podcasts" onClick={closeMobileMenu}>Podcasts</Link></li>
              </ul>
            )}
          </li>
          <li className="nav-item dropdown">
            <span 
              className="nav-links dropdown-toggle"
              onMouseEnter={() => !isMobileMenuOpen && setIsSupportOpen(true)}
              onMouseLeave={() => !isMobileMenuOpen && setIsSupportOpen(false)}
              onClick={() => isMobileMenuOpen && setIsSupportOpen(!isSupportOpen)}
            >
              Support
            </span>
            {isSupportOpen && (
              <ul className="dropdown-menu"
                  onMouseEnter={() => !isMobileMenuOpen && setIsSupportOpen(true)}
                  onMouseLeave={() => !isMobileMenuOpen && setIsSupportOpen(false)}>
                <li><Link to="/faq" onClick={closeMobileMenu}>FAQ</Link></li>
                <li><Link to="/help" onClick={closeMobileMenu}>Help Center</Link></li>
                <li><Link to="/feedback" onClick={closeMobileMenu}>Feedback</Link></li>
                <li><Link to="/contact" onClick={closeMobileMenu}>Contact Support</Link></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link to="/donate" className="nav-links donate-link" onClick={closeMobileMenu}>Donate</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
