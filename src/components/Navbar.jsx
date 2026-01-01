import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      
      <div className="logo" >
        <a className="logo-name" href="#">Santhosh Kumar R</a>
      </div>

      {/* Desktop Links */}
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Icons */}
      <div className="nav-icons">
        <a href="https://github.com/santhoshkumar7339" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/santhosh-kumar-6713b8395" target="_blank"><FaLinkedin /></a>
        <a
          href="mailto:santhoshkumar22033@gmail.com,"
          aria-label="Email Santhosh Kumar"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}

