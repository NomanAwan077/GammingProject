import React from "react";
import { useState, useEffect } from "react";
import imageSrc2 from "../../assets/images/game-card-2.png";
import GameCard from "../GameCard";
import imageSrc from "../../assets/images/game-card-1.png";
import { GetData } from "../../api/services";

const HowItWorks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPromise = await GetData();
        setData(dataPromise?.data[0].attributes?.HowItWorks);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
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
