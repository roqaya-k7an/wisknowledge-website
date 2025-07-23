import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Navbar";
import "./App.css";

import Home from "./components/Home";
import Services from "./components/Services";
import Trainers from "./components/Trainers";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AOSRefresher from "./components/AOSRefresher"; 

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 80,
    });
  }, []);

  return (
    <div className="main-bg">
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="services" style={{ paddingTop: "90px" }}>
          <Services />
        </section>

        <section id="trainers" style={{ paddingTop: "90px" }}>
          <Trainers />
        </section>

        <section id="testimonials" style={{ paddingTop: "90px" }}>
          <Testimonials />
        </section>

        <section id="faqs" style={{ paddingTop: "90px" }}>
          <FAQs />
        </section>

        <section id="about" style={{ paddingTop: "90px" }}>
          <About />
        </section>

        <section id="contact" style={{ paddingTop: "90px" }}>
          <Contact />
        </section>
      </main>

      <Footer />

      <AOSRefresher />
    </div>
  );
}

export default App;
