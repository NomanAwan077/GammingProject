// components/HowItWorks.js
import React from "react";
import PrimaryCard from "../PrimaryCard";

const HowGameWork = ({ data }) => {
  return (
    <section className="flex flex-col items-center space-y-8 py-12 bg-gradient-to-l from-blue-100 via-white to-white">
      <h2 className="text-3xl font-semibold">{data?.title}</h2>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-6xl">
        <div className="flex flex-1">
          <PrimaryCard
            imageSrc={`http://localhost:1337${data?.icon?.data?.attributes?.url}`}
            description={data?.Description}
            buttonText={data?.BtnText?.ButtonText}
          />
        </div>
        <div className="flex-1">
          <img
            src={`http://localhost:1337${data?.img?.data?.attributes?.url}`}
            alt="Card Image"
            className="rounded-lg shadow-lg h-[500px]"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-6xl">
        {data?.WorkCard.map((card, index) => (
          <PrimaryCard
            key={index}
            title={card?.title}
            imageSrc={`http://localhost:1337${card?.icon?.data?.attributes?.url}`}
            description={card?.subTitle}
            features={card?.listItem}
            backgroundColor={card?.backgroundColor}
            textColor={card?.textColor}
          />
        ))}
      </div>
    </section>
  );
};

export default HowGameWork;
