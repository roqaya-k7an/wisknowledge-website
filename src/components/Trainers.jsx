import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Trainers.css";

const trainers = [
  {
    name: "Dr. Abdul Fareed Brohi",
    title: "Language & IELTS Trainer",
    description: "25+ years of expertise helping students achieve Band 7+ in IELTS with proven strategies and mentorship.",
    image: "/male.jpeg",
  },
  {
    name: "Dr. Nishw",
    title: "Summer Camp Trainer",
    description: "Guides young learners with interactive summer programs to develop their communication and soft skills.",
    image: "/female.jpeg",
  },
];

export default function Trainers() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="trainers-section" id="trainers">
      <div className="trainers-container">
        <div className="trainers-intro" data-aos="fade-up">
          <h2>Meet Our Trainers</h2>
          <p>
            Our trainers are mentors, innovators, and lifelong educators. Learn from experts who are passionate about your growth and success.
          </p>
        </div>

        <div className="trainers-grid">
          {trainers.map((trainer, index) => (
            <div
              className="trainer-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img src={trainer.image} alt={trainer.name} className="trainer-img" />
              <h3 className="trainer-name">{trainer.name}</h3>
              <p className="trainer-role">{trainer.title}</p>
              <p className="trainer-desc">{trainer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
