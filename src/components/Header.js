import React, { useState } from 'react';
import '../styles/Headerr.css';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const headerClass = isNavOpen ? 'slide-in' : 'slide-out';

    return (
        <header className={headerClass}>
            <div className="logo">
                <span className="logo-text">Hilal Ahmad</span>
            </div>
            <nav className="navbar">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="search-bar">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search"
                />
                <button>Search</button>
            </div>
            <div className="mobile-toggle" onClick={toggleNav}>
                <div className={`bar ${isNavOpen ? 'active' : ''}`} />
                <div className={`bar ${isNavOpen ? 'active' : ''}`} />
                <div className={`bar ${isNavOpen ? 'active' : ''}`} />
            </div>
        </header>
    );
};

export default Header;
