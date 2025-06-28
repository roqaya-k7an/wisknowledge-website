import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src="/logo.jpeg" alt="Logo" className="nav-logo-img" />
        <span className="nav-title">WisKnowledge</span>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/trainers">Trainers</a></li>
        <li><a href="/testimonials">Testimonials</a></li>
        <li><a href="/faqs">FAQs</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/about">About</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
