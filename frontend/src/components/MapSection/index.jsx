import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import locationIcon from "../../assets/location-icon.svg";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useNavigate } from "react-router-dom";
const MapSection = ({ data }) => {
  const navigate = useNavigate();
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
          position={[
            position.attributes.Latitude,
            position.attributes.Longitude,
          ]}
          icon={customIcon}
          eventHandlers={{
            click: () => navigate(`/region/${position.id}`),
          }}
        >
          <Tooltip>
            <div className="text-sm font-normal">
              <div className="text-lg font-bold">
                {position?.attributes?.title}
              </div>
              {position?.attributes?.PopularGames?.games?.data?.map(
                (game, idx) => (
                  <div className="text-sm font-normal" key={idx}>
                    {game.attributes.title}
                  </div>
                )
              )}
            </div>
          </Tooltip>
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
        positions.map((pos) => [
          pos.attributes.Latitude,
          pos.attributes.Longitude,
        ])
      );
      map.fitBounds(bounds);
    }
  }, [map, positions]);

  return null;
};
