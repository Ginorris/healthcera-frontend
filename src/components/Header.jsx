import React from 'react';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="header__logo">Healthcera</div>
    <nav className="header__nav">
      <a href="/" className="header__link">Home</a>
      <a href="/" className="header__link">About</a>
      <a href="/" className="header__link">Contact</a>
    </nav>
  </header>
);

export default Header;
