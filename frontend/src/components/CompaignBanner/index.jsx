import React from "react";
// import imageSrc from "../../assets/images/campaign-icon.png";
import imageSrc from "../../assets/images/compaign-icon.png";

const CampaignBanner = () => {
  return (
    <div className="bg-blue-500 rounded-xl overflow-hidden p-10 max-w-[1072px] mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-white">
          <h2 className="text-4xl font-bold mb-4">
            Together We can make a Difference
          </h2>
          <p className="text-xl mb-6">
            Sign up now to create your account and start hosting successful
            campaigns without the hassle of hidden fees or complicated pricing
            structures.
          </p>
          <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full inline-flex items-center transition duration-300 ease-in-out hover:bg-blue-100">
            Get Your License
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
        <div className="flex-1">
          <img
            src={imageSrc}
            alt="Volunteers working together"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignBanner;
