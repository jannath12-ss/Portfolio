import React, { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">

      <nav className="navbar">

        {/* LOGO */}
        <div className="logo-section">

          <div className="logo-circle">
            J
          </div>

          <h1 className="logo-name">
            Jannath
          </h1>

        </div>

        {/* MENU BUTTON */}
        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* MENU */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>

          <li>
            <a href="#education" className="nav-link">
              Education
            </a>
          </li>

          <li>
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>

          <li>
            <button className="hire-btn">
              Hire Me
            </button>
          </li>

        </ul>

      </nav>

    </header>
  );
}

export default Navbar;