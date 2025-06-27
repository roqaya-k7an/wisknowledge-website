// src/components/Trainers.jsx
import React from "react";
import "../App.css"; // or a Trainers.css if separate

const trainers = [
  {
    name: "Dr. Abdul Fareed Brohi",
    title: "Language & IELTS Trainer",
    description:
      "25+ years’ experience helping candidates achieve high bands.",
    image: "/male.jpeg", // Make sure this image exists
  },
  {
    name: "Dr. Nishw",
    title: "Summer Camp Trainer",
    description:
      "Specialist in educational counseling, offering support for international admissions, scholarships, and student success strategy.",
    image: "/female.jpeg",
  },
];

function Trainers() {
  return (
    <div className="trainers-section">
      <h1 className="trainers-title">Meet Our Trainers</h1>
      <div className="trainers-grid">
        {trainers.map((trainer) => (
          <div key={trainer.name} className="trainer-card">
            <img src={trainer.image} alt={trainer.name} className="trainer-img" />
            <h2 className="trainer-name">{trainer.name}</h2>
            <h3 className="trainer-role">{trainer.title}</h3>
            <p className="trainer-desc">{trainer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trainers;
