// src/components/Home.jsx
import React from "react";

function Home() {
  return (
    <>
      {/* Logo */}
      <img
        src="/logo.jpeg"
        alt="WisKnowledge Logo"
        className="logo-img"
      />

      <h1 className="main-title">
        WisKnowledge Consultancy
      </h1>
      <p className="main-subtitle">
        Shape The Future Of The Nation
      </p>

      {/* Posters */}
      <div className="poster-grid">
        <img
          src="/poster1.jpeg"
          alt="Poster 1"
          className="poster-img"
        />
        <img
          src="/abroad.jpeg"
          alt="Poster 2"
          className="poster-img"
        />
        <img
          src="/ab.jpeg"
          alt="Poster 3"
          className="poster-img"
        />
        <img
          src="/summer.jpeg"
          alt="Poster 4"
          className="poster-img"
        />
      </div>
    </>
  );
}

export default Home;
