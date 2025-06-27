import React from "react";
import "../App.css"; // for shared background styles

function About() {
  return (
    <div className="about-page-wrapper">
      <div className="about-banner">
        <h1 className="about-heading">About WisKnowledge</h1>
      </div>

      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
WisKnowledge is a service-oriented startup offering smart solutions for individuals and businesses. Our tagline, 'Knowledge with Wisdom,' captures our mission to provide value-driven consultancy services. We specialize in IELTS coaching, study abroad and visa consultancy, website development, and digital marketing services.        </p>

        <h2>Our Vision</h2>
        <p>
To become a trusted global service provider that empowers clients through insightful strategies, skill-building, and digital solutions.        </p>

        <h2>Our Mission</h2>
        <p>
- Deliver impactful IELTS and overseas consultancy services.<br />
- Provide tailored tech and marketing solutions to startups and SMEs.<br />
- Enable clients to achieve sustainable growth through innovation and expertise.        </p>
      </div>
    </div>
  );
}

export default About;
