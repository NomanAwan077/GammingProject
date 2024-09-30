import React from "react";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-blue-600 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden max-w-[1072px] mx-auto rounded-xl">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[800px] h-[800px] bg-blue-400 rounded-full opacity-20"></div>
        </div>
        <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4">
          <div className="w-[600px] h-[600px] bg-blue-300 rounded-full opacity-20"></div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready To Get Started
        </h2>
        <p className="text-xl text-white mb-8">
          Whether you're a nonprofit looking to boost your fundraising efforts
          or a supporter eager to make a difference, TLF Fundraising Solutions
          is here to help. Click below to learn more about our platform or sign
          up today to start your fundraising journey!
        </p>
        <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full inline-flex items-center transition duration-300 ease-in-out hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Sign Up Now
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
