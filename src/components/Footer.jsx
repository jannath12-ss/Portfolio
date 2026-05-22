import React from "react";

function Footer() {
  return (
    <footer className="footer-section">

      {/* GLOW */}
      <div className="footer-glow footer-glow1"></div>
      <div className="footer-glow footer-glow2"></div>

      <div className="footer-container">

        {/* TOP */}
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">

            <h2 className="footer-logo">Jannath</h2>

            <p className="footer-text">
              Frontend Developer & UI Designer crafting
              aesthetic and modern digital experiences.
            </p>

          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="footer-title">Navigation</h3>

            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* SOCIAL */}
<div>

  <h3 className="footer-title">
    Social Media
  </h3>

  <div className="social-icons">

    <a href="#" aria-label="Instagram">
      ⌾
    </a>

    <a href="#" aria-label="GitHub">
      GH
    </a>

    <a href="#" aria-label="LinkedIn">
      in
    </a>

    <a href="#" aria-label="Twitter">
      X
    </a>

  </div>

</div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© 2025 Jannath. All Rights Reserved.</p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;