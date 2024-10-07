import React, { useEffect, useState } from "react";
import { GetData } from "../../api/services";
import LoadingSpinner from "../common/LoadingSpinner";

const LandingHeroSection = ({ data, loading }) => {
  const [subtitle, setSubtitle] = useState([]);
  useEffect(() => {
    setSubtitle(data?.SubTitle?.split("|"));
  }, [data]);

  if (loading) return <LoadingSpinner />;
  return (
    <section className="flex flex-col items-center justify-center text-center py-12 bg-gray-100 gap-6">
      <div className="flex gap-1 align-center">
        {subtitle?.map((item, index) => (
          <p className="text-xl" key={index}>
            {item}:
          </p>
        ))}
      </div>
      <h1 className="text-4xl font-bold">{data?.title}</h1>
      <img
        src={`http://localhost:1337${data?.BannerImage?.data?.attributes?.url}`}
        className="w-[1072px] h-[502px]"
        alt="hero"
      />
      <button className="bg-blue-500 text-white px-6 py-3 rounded-full flex justify-center align-center gap-2">
        {data?.BtnText?.ButtonText}
        <img
          src={`http://localhost:1337${data?.BtnText.Icon.data.attributes.url}`}
          alt="icon"
        />
      </button>
    </section>
  );
};

export default LandingHeroSection;
