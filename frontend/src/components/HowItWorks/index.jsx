import React from "react";
import imageSrc2 from "../../assets/images/game-card-2.png";
import GameCard from "../GameCard";
import imageSrc from "../../assets/images/game-card-1.png";

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-100 text-center flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">How It Works</h2>
      <p className="max-w-2xl mx-auto">
        With TLF Fundraising Solutions, nonprofits can set up and manage 50/50
        and Chase the Ace games effortlessly.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1072px] mx-auto">
        <GameCard
          imageSrc={imageSrc}
          title={"Classic 50/50"}
          description={
            "Participants purchase tickets for a chance to win half of the total proceeds in one draw."
          }
        />
        <GameCard
          imageSrc={imageSrc2}
          title={"Prize Raffle"}
          description={
            "Prize raffle draws are a classic and effective fundraising strategy that offers donors the chance to win."
          }
        />
        <GameCard
          imageSrc={imageSrc}
          title={"Classic 50/50"}
          description={
            "Participants purchase tickets for a chance to win half of the total proceeds in one draw."
          }
        />
        <GameCard
          imageSrc={imageSrc2}
          title={"Prize Raffle"}
          description={
            "Prize raffle draws are a classic and effective fundraising strategy that offers donors the chance to win."
          }
        />
      </div>
    </section>
  );
};

export default HowItWorks;
