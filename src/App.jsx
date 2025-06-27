import React from "react";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="main-bg">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
