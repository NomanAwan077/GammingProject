import React from "react";
import GameCard from "../GameCard";
const HowItWorks = ({ data, loading }) => {
  if (loading) return <p>Loading...</p>;
  return (
    <section className="py-12 bg-gray-100 text-center flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">{data?.Title}</h2>
      <p className="max-w-2xl mx-auto">{data?.Description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1072px] mx-auto">
        {data.LotteryCard.map((card) => (
          <GameCard
            imageSrc={`http://localhost:1337${card.CardImage?.data?.attributes?.url}`}
            key={card.id}
            title={card.Title}
            description={card.Description}
            btnText={card.ReadMore.ButtonText}
            btnIcon={`http://localhost:1337${card.ReadMore.Icon?.data?.attributes?.url}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
