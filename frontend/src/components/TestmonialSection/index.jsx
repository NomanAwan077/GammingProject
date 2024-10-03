import React, { useState, useEffect } from "react";
import heroImage from "../../assets/images/hero-frame.png";
import { GetData } from "../../api/services";

const TestimonialSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const dataPromise = await GetData();
      setData(dataPromise?.data[0]?.attributes?.ClientReviews);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{data?.Title}</h2>
        <div className=" gap-8">
          <img
            src={`http://localhost:1337${data?.ImagesWraapper[0]?.Image?.data?.attributes?.url}`}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
