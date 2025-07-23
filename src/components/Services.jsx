import React, { useEffect } from "react";
import { FaCalendarAlt, FaChalkboardTeacher, FaBook, FaChild } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

// Google Form link
const formLink = "https://forms.gle/ZxfQqUs7SpBwBJ4L6";

const services = [
  {
    title: "IELTS Coaching",
    duration: "4 weeks",
    days: "Mon – Thursday",
    icon: <FaBook />,
  },
  {
    title: "Spoken English",
    duration: "90 days",
    days: "Mon – Thursday",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Strategic Study Management Workshop",
    duration: "One or two days",
    days: null,
    icon: <FaCalendarAlt />,
  },
  {
    title: "Strategic Summer Camp for Kids",
    duration: "2 weeks or 20 days",
    days: "June, July",
    icon: <FaChild />,
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="services-wrapper" id="services">
      <div className="services-intro">
        <h2 className="services-heading" data-aos="fade-down">
          Shape Your Future with Confidence
        </h2>
        <p className="services-subheading" data-aos="fade-up">
          Join programs that empower you with real skills, global language fluency, and a mindset for success.
        </p>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div
            className="service-box"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="icon-circle">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <ul className="service-details">
              <li><strong>Duration:</strong> {service.duration}</li>
              {service.days && <li><strong>Days:</strong> {service.days}</li>}
              <li><strong>Discount:</strong> 50% for IIUI Community</li>
            </ul>
            <a
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="service-btn"
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
