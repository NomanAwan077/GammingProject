import React from "react";
import { useState, useEffect } from "react";
import { GetData } from "../../api/services";

const ClientTestimonials = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPromise = await GetData();
        setData(dataPromise?.data[0].attributes?.ClientTestimonial);
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
    <section className="py-12 bg-white text-center gap-6 flex flex-col max-w-[1072px] align-center m-auto">
      <h2 className="text-2xl font-semibold">{data?.Description}</h2>
      <div className="flex flex-col gap-4">
        <ul className="flex gap-4 justify-center">
          <li className="flex flex-col gap-2">
            <span>Years In Industrya</span>
            <span>{data?.YearsInIndustry}</span>
          </li>
          <li className="flex flex-col gap-2">
            <span>Happy Clients</span>
            <span>{data?.HappyClients}</span>
          </li>
          <li className="flex flex-col gap-2">
            <span>Raised for various cause</span>
            <span>{data?.RaisedFor}</span>
          </li>
        </ul>
        <div>
          <ul className="flex justify-center align-center gap-4">
            {data?.CompniesImage[0].companyImage.data.map((item) => (
              <li>
                <img
                  src={`http://localhost:1337${item?.attributes.url}`}
                  alt="logo"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
