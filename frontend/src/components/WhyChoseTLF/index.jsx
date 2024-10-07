import React, { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard";
import { GetData } from "../../api/services";

const WhyChooseTLF = ({ data, loading }) => {
  if (loading) return <p>Loading...</p>;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">
          {data?.Title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {data?.FeatureCard.map((card) => (
            <FeatureCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseTLF;
