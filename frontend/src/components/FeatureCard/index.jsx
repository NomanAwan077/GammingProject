import React from "react";
const FeatureCard = ({ CardStatus, Title, Description, Icon, GetStarted }) => (
  <div className={`p-6 rounded-lg ${CardStatus}`}>
    <div className="flex items-center mb-4">
      {CardStatus != "primary" ? (
        <img
          src={`http://localhost:1337${Icon?.data?.attributes?.url}`}
          alt="CardStatus"
        />
      ) : null}
      <h3 className="text-xl font-semibold ml-3 ">{Title}</h3>
    </div>
    <p className="text-gray-600">{Description}</p>
    {CardStatus === "primary" && (
      <button className="flex items-center bg-white rounded-full px-4 py-2 gap-2">
        {GetStarted.ButtonText}
        <img
          src={`http://localhost:1337${GetStarted?.Icon?.data?.attributes?.url}`}
          alt="GetStarted"
        />
      </button>
    )}
  </div>
);
export default FeatureCard;
