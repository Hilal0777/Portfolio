import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <p>© 2023 Hilal Ahmad. All rights reserved.</p>
            <div className="social-icons">
                <a href="https://www.facebook.com/uohain?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com/YousafxiaBoy" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/hilalah_mad/?next=%2F" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
