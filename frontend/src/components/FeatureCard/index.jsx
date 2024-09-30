import React from "react";
const FeatureCard = ({ icon, title, description, className }) => (
  <div className={`p-6 rounded-lg ${className}`}>
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-3">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);
export default FeatureCard;
