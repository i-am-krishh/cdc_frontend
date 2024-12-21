import React from "react";
import { Navbar } from "../../Components";

const Team = () => {
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
      <div className="relative z-20">
        <Navbar />
        {/* Other content can go here */}
      </div>
    </div>
  );
};

export default Team;
