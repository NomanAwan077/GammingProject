import React from "react";
import heroImage from "../../assets/images/hero-frame.png";
import GameCard from "../GameCard";
import imageSrc from "../../assets/images/game-card-1.png";

const HeroSection = ({ data }) => {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-r to-[#067DF9] from-white">
      <div className="grid grid-cols-2 gap-12 py-[96px] max-w-[1072px] mx-auto">
        <div className="flex flex-col items-center justify-center text-center py-12 gap-6">
          <h1 className="text-4xl font-bold">{data?.title}</h1>
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
      <div className="pt-[96px] bg-white w-full">
        <div className="grid grid-cols-3 gap-12 max-w-[1072px] mx-auto">
          <div className="flex flex-col items-center justify-center text-center py-12 gap-6">
            <h1 className="text-4xl font-bold text-left">
              {data?.PopularGames?.title}
            </h1>
            <p className="text-xl text-left">
              {data?.PopularGames?.Description}
            </p>
          </div>
          {data?.PopularGames?.games.data.map((game, idx) => (
            <GameCard
              key={idx}
              imageSrc={`http://localhost:1337${game?.attributes?.img?.data?.attributes?.url}`}
              title={game?.attributes?.title}
              description={game?.attributes?.Description}
              btnText={game?.attributes?.BtnText?.ButtonText}
              btnIcon={`http://localhost:1337${game?.attributes?.BtnText?.Icon?.data?.attributes?.url}`}
              id={game?.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
