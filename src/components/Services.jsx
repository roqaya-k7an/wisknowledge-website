import React from "react";

const services = [
  {
    title: "IELTS Preparation",
    image: "/poster1.jpeg5.jpeg",
    description:
      "Expert-led classes to help you achieve your IELTS band. Includes tests, materials, and speaking practice.",
    duration: "Flexible",
    special: "Discount for early registration!",
    button: {
      text: "Register via WhatsApp",
      link: "https://wa.me/923369859980",
    },
  },
  {
    title: "Spoken English",
    image: "/poster1.jpeg",
    description:
      "Boost your fluency for life, work, and study. Friendly, interactive sessions.",
    duration: "Flexible",
    special: "",
    button: {
      text: "Register via WhatsApp",
      link: "https://wa.me/923369859980",
    },
  },
  {
    title: "Summer Camp",
    image: "/summer.jpeg",
    description:
      "Ages 7–18 | June & July | 10 am – 2 pm | IIUI New Campus. Activities: English, games, competitions, confidence building, and more.",
    duration: "2 Months (June & July)",
    special: "Discount for early registration!",
    button: {
      text: "Register via WhatsApp",
      link: "https://wa.me/923369859980",
    },
  },
  {
    title: "Study Abroad Support",
    image: "/study abroad.jpeg",
    description:
      "Free expert counseling for UK, USA, Canada, Australia, Europe & UAE. Admission, visa, documents & more.",
    duration: "On demand",
    special: "100% Free Consultation!",
    button: {
      text: "Contact via WhatsApp",
      link: "https://wa.me/923369859980",
    },
  },
];

export default function Services() {
  return (
<div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-blue-400 pt-4 pb-10 px-2 flex flex-col items-center">
      {/* Banner */}
      <div className="services-banner"></div>

      {/* Title & Intro */}
<h1 className="services-title mt-4">Our Services</h1> 
      <p className="services-subtitle">
  Boost your language skills or study abroad, Register easily via WhatsApp!
</p>


      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service) => (
    <div className="services-card" key={service.title}>
            <img
              src={service.image}
              alt={service.title}
              className="services-img"
            />
            <div className="services-name">{service.title}</div>
            <div className="services-desc">{service.description}</div>
            <div className="services-info">{service.duration}</div>
            {service.special && (
              <div className="services-discount">{service.special}</div>
            )}
            <a
              href={service.button.link}
              target="_blank"
              rel="noopener noreferrer"
              className="services-whatsapp-btn"
            >
              {service.button.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
