import React, { useEffect, useState } from "react";
import { GetData } from "../../api/services";

const LandingHeroSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subtitle, setSubtitle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPromise = await GetData();
        setData(dataPromise?.data[0]?.attributes?.HeroSection);
        const subtitleArray =
          dataPromise?.data[0]?.attributes?.HeroSection.SubTitle?.split(":") ||
          [];
        setSubtitle(subtitleArray);
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
    <section className="flex flex-col items-center justify-center text-center py-12 bg-gray-100 gap-6">
      <div className="flex gap-1 align-center">
        <p className="text-xl">{subtitle[0]}:</p>
        <p className="text-xl">{subtitle[1]}</p>
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
