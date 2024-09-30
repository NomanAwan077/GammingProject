import React from "react";

const LandingHeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-12 bg-gray-100 gap-6">
      <h1 className="text-4xl font-bold">
        Welcome to TLF Fundraising Solutions
      </h1>
      <p className="text-xl">Empowering Nonprofits, Maximizing Impact</p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
        Get Started
      </button>
    </section>
  );
};

export default LandingHeroSection;
