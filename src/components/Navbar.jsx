import React from "react";

function Navbar() {
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

        {/* MENU */}
        <ul className="nav-links">

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

        </ul>

        {/* BUTTON */}
        <button className="hire-btn">
          Hire Me
        </button>

      </nav>

    </header>
  );
}

export default Navbar;