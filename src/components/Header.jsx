import React from "react";
import "../styles/Header.css";

const Header = () => (
  <header className="header">
    <div className="header__logo">Healthcera</div>
    <nav className="header__nav">
      <a href="/" className="header__link">
        Home
      </a>
      <a href="/research" className="header__link">
        Research
      </a>
    </nav>
  </header>
);

export default Header;
