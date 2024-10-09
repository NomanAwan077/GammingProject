// components/Card.js
import React from "react";

const PrimaryCard = ({
  title,
  description,
  imageSrc,
  features = [],
  buttonText,
  backgroundColor = "bg-white",
  textColor = "text-black",
}) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-lg ${backgroundColor} ${textColor} flex flex-col justify-between items-start`}
    >
      <div>
        <img src={imageSrc} alt={title} />
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="mb-4">{description}</p>
        {features.length > 0 && (
          <ul className="list-disc pl-5 space-y-2">
            {features.map((feature, index) => (
              <li key={index}>{feature.text}</li>
            ))}
          </ul>
        )}
      </div>
      {buttonText && (
        <button className="mt-4 py-2 px-4 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700">
          {buttonText} &rarr;
        </button>
      )}
    </div>
  );
};

export default PrimaryCard;
