import React from "react";

const GameHeroSection = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-12 py-[96px] max-w-[1072px] mx-auto">
      <div className="flex flex-col items-start justify-left text-left py-12 gap-6">
        <h1 className="text-4xl font-bold text-left">{data?.title}</h1>
        <p className="text-xl text-left">{data?.Description}</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-2`">
          {data?.BtnText?.ButtonText}
          <img
            src={`http://localhost:1337${data?.BtnText?.Icon?.data?.attributes?.url}`}
            alt="arrow"
            className="w-4 h-4"
          />
        </button>
      </div>
      <div className="flex items-center justify-center w-[461px] h-[371px]">
        <img
          src={`http://localhost:1337${data?.img?.data?.attributes?.url}`}
          alt="TLF Fundraising Solutions"
        />
      </div>
    </div>
  );
};
export default GameHeroSection;
