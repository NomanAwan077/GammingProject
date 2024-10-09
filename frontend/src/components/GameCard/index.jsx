import React from "react";
import { useNavigate } from "react-router-dom";

const GameCard = ({
  title,
  description,
  imageSrc,
  btnText,
  btnIcon,
  id = 0,
}) => {
  const navigate = useNavigate();
  console.log(id);
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-[344px]">
      <div className="flex flex-col gap-4">
        <div className="relative h-full w-full rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-green-200 opacity-50"></div>
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 bg-white p-6 justify-start items-start">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <button
            className="mt-2 inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md border-gray-900 text-gray-900 rounded-[100px] gap-3"
            onClick={() => navigate(`/game/${id}`)}
          >
            {btnText}
            <img src={btnIcon} alt="btn-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
