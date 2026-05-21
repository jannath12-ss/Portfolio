import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <h1 className="text-Black text-2xl font-bold">
          Portfolio
        </h1>

        {/* NAV LINKS */}
        <ul className="flex items-center gap-8 text-Black">

          <li>
            <a href="#about" className="hover:text-sky-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#education" className="hover:text-sky-400 transition">
              Education
            </a>
          </li>

          <li>
            <a href="#skill" className="hover:text-sky-400 transition">
              Skill
            </a>
          </li>

          <li>
            <a href="#project" className="hover:text-sky-400 transition">
              Project
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-sky-400 transition">
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;