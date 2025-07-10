import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Testimonials.css";

const testimonials = [
  {
    message:
      "Scored 6.5 in IELTS and secured XYZ University admission—thanks WisKnowledge!",
    name: "— Student",
  },
  {
    message:
      "I was impressed with Wis Knowledge Summer Camp engaging activities and qualified staff, who created a safe and supportive environment. My child enjoyed all the activities and formed new friendships. To improve, I suggest to conduct twice a year (Summer and winter camp) . Overall, I'm satisfied with the experience and would recommend the camp to others. The organizers were outstanding. Thank you for a memorable summer 2023 and 2024 !",
    name: "— Sir Jawad",
  },
  {
    message:
      "Got my student visa through their consultancy. Got 7 band in IELTS. Very supportive team!",
    name: "— Student",
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="testimonials-bg" id="testimonials">
      <h2 className="testimonials-title" data-aos="fade-down">
         Real Stories, Real Impact
      </h2>
      <p className="testimonials-subtitle" data-aos="fade-up">
        These aren’t just reviews — they’re journeys of transformation. Hear what our students and parents say about WisKnowledge.
      </p>

      <div className="testimonials-container">
        {testimonials.map((t, i) => (
          <div
            className="testimonial-card"
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 150}
          >
            <p className="testimonial-message">“{t.message}”</p>
            <p className="testimonial-name">{t.name}</p>
          </div>
        ))}
      </div>

      <a
        href="https://wa.me/923369859980"
        className="testimonial-cta"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-up"
      >
        Start Your Success Story — Contact Us on WhatsApp 📲
      </a>
    </section>
  );
}
