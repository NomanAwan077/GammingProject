import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapSection from "../MapSection";

const ProvinceGames = ({ data, loading }) => {
  if (loading) return <div>Loading...</div>;
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-full max-w-7xl mx-auto p-6 flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 h-96">
          <MapSection data={data?.regions?.data} />
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900">{data?.Title}</h1>
          <p className="text-gray-600 mt-4">{data?.Description}</p>
          <button className="mt-6 px-4 py-2 rounded transition flex items-center rounded-full border border-gray-900">
            {data?.BtnText[0].ButtonText}
            <img
              src={`http://localhost:1337${data?.BtnText[0].Icon.data.attributes.url}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProvinceGames;
