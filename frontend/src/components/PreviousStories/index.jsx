import React, { useState } from "react";

const Statistic = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-sm text-gray-600">{label}</span>
    <span className="text-4xl font-bold">{value}</span>
  </div>
);

const SuccessCard = ({ img, FundsRaised, campaignTitle, Description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img
      src={`http://localhost:1337${img?.data?.attributes?.url}`}
      alt={campaignTitle}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <p className="text-sm text-gray-600">Funds Raised: {FundsRaised}</p>
      <h3 className="text-lg font-semibold mt-2">{Description}</h3>
    </div>
  </div>
);

const PreviousSuccessStories = ({ data }) => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">{data?.title}</h2>
        <p className="text-center text-gray-600 mb-12">{data?.Description}</p>

        <div className="flex justify-center gap-12 mb-12">
          <Statistic label="Happy Clients" value={data?.HappyClients} />
          <Statistic label="Raised for various cause" value={data?.RaisedFor} />
          <Statistic label="Years in Industry" value={data?.YearsInIndustry} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data?.StoryCard?.map((story, index) => (
            <SuccessCard key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousSuccessStories;
