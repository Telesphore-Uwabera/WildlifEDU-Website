import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Reset subscription status after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Row 1: Brand and Social Links */}
        <div className="footer-section">
          <div className="footer-brand">
            <h3>CareAfrica</h3>
            <p>Empowering Wildlife Conservation Through Education</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Row 2: Quick Access Links */}
        <div className="footer-section">
          <h4>Quick Access</h4>
          <ul>
            <li><Link to="/courses">Browse Courses</Link></li>
            <li><Link to="/forum">Join Community</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/donate">Support Us</Link></li>
          </ul>
        </div>

        {/* Row 3: Legal Links */}
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/cookies">Cookie Policy</Link></li>
            <li><Link to="/accessibility">Accessibility</Link></li>
          </ul>
        </div>

        {/* Row 4: Newsletter */}
        <div className="footer-section newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter for the latest conservation news and course updates.</p>
          <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {isSubscribed && (
            <div className="subscription-success">
              Thank you for subscribing!
            </div>
          )}
        </div>
      </div>

      {/* Footer Bottom with Stats */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-info">
            <p>&copy; 2024 CareAfrica. All rights reserved.</p>
          </div>
          <div className="footer-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat">
              <span className="stat-number">25+</span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Experts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
