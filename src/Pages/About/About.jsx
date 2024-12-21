import React from "react";
import { Navbar } from "../../Components";

const About = () => {
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

        {/* Main Content Container */}
        <div className="container mx-auto px-4 pt-24 pb-12">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300">
                CDC DBATU
              </span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Empowering careers, bridging dreams, and fostering excellence.
            </p>
          </div>

          {/* Info Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Vision Card */}
            <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-white/80">
                To be the premier facilitator of career opportunities and
                professional growth for our students.
              </p>
            </div>

            {/* Mission Card */}
            <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white/80">
                Creating pathways to success through industry connections, skill
                development, and personalized guidance.
              </p>
            </div>

            {/* Values Card */}
            <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Values
              </h3>
              <p className="text-white/80">
                Excellence, integrity, innovation, and student-centric approach
                in all our endeavors.
              </p>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="backdrop-blur-lg bg-white/10 p-12 rounded-3xl border border-white/20 shadow-xl mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-white/80">Companies</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">95%</div>
                <div className="text-white/80">Placement Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">50LPA+</div>
                <div className="text-white/80">Highest Package</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">1000+</div>
                <div className="text-white/80">Students Placed</div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-2xl mx-auto text-center backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-white/80 mb-6">
              Have questions? We're here to help guide you through your career
              journey.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
