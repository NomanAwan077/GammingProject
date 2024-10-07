import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import locationIcon from "../../assets/location-icon.svg";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapSection = ({ data }) => {
  const customIcon = new L.Icon({
    iconUrl: locationIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  return (
    <MapContainer className="h-full w-full rounded-lg">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapBounds positions={data} />
      {data?.map((position, idx) => (
        <Marker
          key={idx}
          position={[position.Latitude, position.Longitude]}
          icon={customIcon}
        >
          <Popup>
            <div className="text-lg font-bold">{position.LocationName}</div>
            <p className="text-sm">{position.LocationDetail}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapSection;

const MapBounds = ({ positions }) => {
  const map = useMap();

  useEffect(() => {
    if (positions?.length > 0) {
      const bounds = new L.LatLngBounds(
        positions.map((pos) => [pos.Latitude, pos.Longitude])
      );
      map.fitBounds(bounds);
    }
  }, [map, positions]);

  return null;
};
