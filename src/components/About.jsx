// src/components/About.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <section className="about-grid-section" id="about">
      <div className="about-grid-header">
        <h2>About WisKnowledge</h2>
        <p>
          Discover our identity, vision, and mission — all aligned to help learners and innovators grow with clarity.
        </p>
      </div>

      <div className="about-grid-container">
        {/* WHO WE ARE */}
        <div className="about-box">
          <h3>Who We Are</h3>
          <p>
            WisKnowledge is a forward-thinking consultancy offering educational and digital solutions. We specialize in IELTS coaching, spoken English, study abroad guidance, and strategic branding services — all with clarity, quality, and care.
          </p>
        </div>

        {/* OUR VISION */}
        <div className="about-box">
          <h3>Our Vision</h3>
          <p>
            To become a trusted global hub where learners and innovators grow through wisdom, skill, and strategic support. We aim to empower futures by bridging clarity and confidence.
          </p>
        </div>

        {/* OUR MISSION */}
        <div className="about-box">
          <h3>Our Mission</h3>
          <ul className="mission-list">
            <li>
              <FaCheckCircle className="tick-icon" />
              Deliver top-tier IELTS and communication training.
            </li>
            <li>
              <FaCheckCircle className="tick-icon" />
              Provide transparent study abroad consulting.
            </li>
            <li>
              <FaCheckCircle className="tick-icon" />
              Support startups with digital branding and tools.
            </li>
            <li>
              <FaCheckCircle className="tick-icon" />
              Inspire growth through knowledge and action.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
