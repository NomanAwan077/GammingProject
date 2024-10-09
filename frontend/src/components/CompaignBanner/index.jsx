import React from "react";
// import imageSrc from "../../assets/images/campaign-icon.png";
import imageSrc from "../../assets/images/compaign-icon.png";

const CampaignBanner = ({ data }) => {
  return (
    <div className="bg-blue-500 rounded-xl overflow-hidden p-10 max-w-[1072px] mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-white">
          <h2 className="text-4xl font-bold mb-4">{data?.Title}</h2>
          <p className="text-xl mb-6">{data?.Description}</p>
          <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full inline-flex items-center transition duration-300 ease-in-out hover:bg-blue-100">
            {data?.SignupButton?.ButtonText}
            <img
              src={`http://localhost:1337${data?.SignupButton?.Icon?.data?.attributes?.url}`}
              alt="btn-icon"
            />
          </button>
        </div>
        <div className="flex-1">
          <img
            src={`http://localhost:1337${data?.img?.data?.attributes?.url}`}
            alt="Volunteers working together"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignBanner;
