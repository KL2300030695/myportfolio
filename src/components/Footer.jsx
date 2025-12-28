import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <span className="footer-text">
                    {new Date().getFullYear()} Subhash Vadaparthi. All rights reserved.
                </span>
                <div className="footer-links">
                    <a
                        href="https://github.com/KL2300030695"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vadaparthisubhash/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:2300030695cseh@gmail.com">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;