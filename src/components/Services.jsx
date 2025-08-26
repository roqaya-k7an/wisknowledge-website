import React, { useEffect } from "react";
import { FaCalendarAlt, FaChalkboardTeacher, FaBook, FaChild } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

const formLink = "https://forms.gle/ZxfQqUs7SpBwBJ4L6";

const services = [
  {
    title: "IELTS Coaching",
    description: "IELTS coaching focused on Listening, Reading, Writing, and Speaking.",
    duration: "4 weeks",
    days: "Mon – Thursday",
    price: "200",
    icon: <FaBook aria-hidden="true" />,
  },
  {
    title: "Spoken English",
    description: "Improve fluency, vocabulary, and pronunciation with conversation practice.",
    duration: "90 days",
    days: "Mon – Thursday",
    price: "300",
    icon: <FaChalkboardTeacher aria-hidden="true" />,
  },
  {
    title: "Strategic Study Management Workshop",
    description: "Workshop teaching planning, note-taking, active recall, and exam strategy.",
    duration: "One or two days",
    days: null,
    price: "100",
    icon: <FaCalendarAlt aria-hidden="true" />,
  },
  {
    title: "Strategic Summer Camp for Kids",
    description: "Fun, safe summer program with workshops, creativity labs, and sports.",
    duration: "2 weeks or 20 days",
    days: "June, July",
    price: "250",
    icon: <FaChild aria-hidden="true" />,
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Generate JSON-LD dynamically
  const courseSchema = {
    "@context": "https://schema.org",
    "@graph": services.map((s) => ({
      "@type": "Course",
      "name": s.title,
      "description": s.description,
      "provider": {
        "@type": "Organization",
        "name": "WisKnowledge Academy",
        "url": "https://wisknowledge.com/"
      },
      "offers": {
        "@type": "Offer",
        "price": s.price,
        "priceCurrency": "PKR",
        "url": formLink,
        "availability": "https://schema.org/InStock"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Onsite",
        "location": "WisKnowledge Academy, Islamabad, Pakistan",
        "courseWorkload": s.days || s.duration
      }
    }))
  };

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
          <article
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
          </article>
        ))}
      </div>

      {/* JSON-LD schema injection */}
      <script type="application/ld+json">
        {JSON.stringify(courseSchema, null, 2)}
      </script>
    </section>
  );
}
