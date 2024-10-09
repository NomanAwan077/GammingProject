import React from "react";
import GameCard from "../GameCard";

const OtherGames = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-8">
      <h1 className="text-4xl font-bold">{data?.title}</h1>
      <div className="flex items-center justify-center gap-4">
        {data?.games?.data?.map((game, index) => (
          <>
            <GameCard
              key={index}
              title={game?.attributes?.title}
              description={game?.attributes?.Description}
              imageSrc={`http://localhost:1337${game?.attributes?.img?.data?.attributes?.url}`}
              btnText={game?.attributes?.BtnText?.ButtonText}
              btnIcon={`http://localhost:1337${game?.attributes?.BtnText?.Icon?.data?.attributes?.url}`}
              id={game?.id}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default OtherGames;
