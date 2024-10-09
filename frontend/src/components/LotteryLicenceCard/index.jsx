import React from "react";

const LotteryLicenseCard = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-sm">
      <div className="flex flex-col items-start gap-4">
        <div className="bg-blue-500 rounded-full p-3">
          <img
            src={`http://localhost:1337${data?.icon?.data?.attributes?.url}`}
            alt="icon"
            className="w-8 h-8"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{data?.title}</h2>
        <p className="text-gray-600 text-left">{data?.Description}</p>
        <button className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300">
          {data?.BtnText}
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LotteryLicenseCard;
