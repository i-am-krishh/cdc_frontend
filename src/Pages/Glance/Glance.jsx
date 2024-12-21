import React from "react";
import { Navbar } from "../../Components";
import Gallery from "../../Components/Gallery/Gallery";
import './Glance.css';

const Glance = () => {
  const gradientAnimation = {
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with animation */}
      <div className="absolute inset-0 z-0" style={gradientAnimation} />

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 z-10 backdrop-blur-[120px]" />

      {/* Content */}
      {/* Hello  */}
      <div className="relative z-20">
        <Navbar />
        <div className="img-show">
          {/* I Added this Gallery Component here with in the div and give the div height 100vh so i can center it */}
          <Gallery />
        </div>
        {/* Other content can go here */}
      </div>
    </div>
  );
};

export default Glance;
