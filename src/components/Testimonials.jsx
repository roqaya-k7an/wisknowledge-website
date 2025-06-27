import React from "react";
import "../App.css"; // Keep styling consistent

const testimonials = [
  {
    name: "Student",
    message: "Scored 6.5 in IELTS and secured xyz university admission—thanks WisKnowledge!",
  },
  {
    name: "Sir Jawad",
    message:
      "I was impressed with WisKnowledge Summer Camp's engaging activities and qualified staff... Thank you for a memorable summer 2023 and 2024!",
  },
  {
    name: "Student",
    message:
      "Got my student visa through their WisKnowledge consultancy. Got 7 band in IELTS. Very supportive team!",
  },
];

function Testimonials() {
  return (
    <div className="testimonials-bg">
      <h2 className="testimonials-title">What Our Students Say</h2>
      <div className="testimonials-container">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-message">"{item.message}"</p>
            <p className="testimonial-name">— {item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
