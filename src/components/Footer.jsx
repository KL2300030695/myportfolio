import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-status">
          <span className="dot dot-live" aria-hidden="true"></span>
          <span className="footer-status-text">OPERATOR ONLINE</span>
          <span className="footer-sep">·</span>
          <span>India</span>
          <span className="footer-sep">·</span>
          <span>UTC+5:30</span>
        </div>

        <div className="footer-links">
          <a href="https://www.linkedin.com/in/vadaparthisubhash/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/KL2300030695" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.youtube.com/@ThinkingUpgraded" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="mailto:subhash@example.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} · Subhash Vadaparthi · Built with care, not a template.
        </p>
      </div>
    </footer>
  );
};

export default Footer;