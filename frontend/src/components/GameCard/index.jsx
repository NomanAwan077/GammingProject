import React from "react";

const GameCard = ({ title, description, imageSrc, btnText, btnIcon }) => {
  return (
    <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-md overflow-hidden">
      <div className="flex flex-col gap-4">
        <div className="relative h-full w-full bg-green-300 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-green-200 opacity-50"></div>
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 bg-white p-6">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <button className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300">
            {btnText}
            <img src={btnIcon} alt="btn-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
