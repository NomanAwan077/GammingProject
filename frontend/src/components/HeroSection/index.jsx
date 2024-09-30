import React from "react";
import heroImage from "../../assets/images/hero-frame.png";
import GameCard from "../GameCard";
import imageSrc from "../../assets/images/game-card-1.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-r to-[#067DF9] from-white">
      <div className="grid grid-cols-2 gap-12 py-[96px] max-w-[1072px] mx-auto">
        <div className="flex flex-col items-center justify-center text-center py-12 gap-6">
          <h1 className="text-4xl font-bold">
            Welcome to TLF Fundraising Solutions
          </h1>
          <p className="text-xl">Empowering Nonprofits, Maximizing Impact</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
            Get Started
          </button>
        </div>
        <div className="flex items-center justify-center w-[461px] h-[371px]">
          <img src={heroImage} alt="TLF Fundraising Solutions" />
        </div>
      </div>
      <div className="pt-[96px] bg-white w-full">
        <div className="grid grid-cols-3 gap-12 max-w-[1072px] mx-auto">
          <div className="flex flex-col items-center justify-center text-center py-12 gap-6">
            <h1 className="text-4xl font-bold">
              Welcome to TLF Fundraising Solutions
            </h1>
            <p className="text-xl">Empowering Nonprofits, Maximizing Impact</p>
          </div>
          <GameCard
            imageSrc={imageSrc}
            title={"Classic 50/50"}
            description={
              "Participants purchase tickets for a chance to win half of the total proceeds in one draw."
            }
          />
          <GameCard
            imageSrc={imageSrc}
            title={"Prize Raffle"}
            description={
              "Prize raffle draws are a classic and effective fundraising strategy that offers donors the chance to win."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
