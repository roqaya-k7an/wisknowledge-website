import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <strong>WisKnowledge Consultancy</strong><br />
        Incubation Center, IIUI New Campus, Islamabad, Pakistan<br />
        <span>
          Email:{" "}
          <a href="mailto:wisknowledgeconsultancy@gmail.com">
            wisknowledgeconsultancy@gmail.com
          </a>
        </span>{" "}
        |{" "}
        <span>
          WhatsApp:{" "}
          <a href="https://wa.me/923369859980" target="_blank" rel="noopener noreferrer">
            +92-336-9859890
          </a>
        </span>
      </div>
      <div className="footer-right">
        &copy; 2025 WisKnowledge Consultancy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
