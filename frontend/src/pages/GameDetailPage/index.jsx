import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetEntityData } from "../../api/services";
import GameHeroSection from "../../components/GameHeroSection";
import HowGameWork from "../../components/HowGameWork";
import { GameDetailUrl } from "../../constant";
import PreviousSuccessStories from "../../components/PreviousStories";
import OtherGames from "../../components/OtherGames";
import DataNotFound from "../../components/DataNotFound";

function GameDetailPage() {
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetEntityData(GameDetailUrl, id);
        setGameData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching game data:", error);
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="flex flex-col">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <DataNotFound message={error} />
      ) : (
        <>
          <GameHeroSection data={gameData?.attributes} />
          <HowGameWork data={gameData?.attributes?.HowItWorks} />
          <PreviousSuccessStories
            data={gameData?.attributes?.PreviousStories}
          />
          <OtherGames data={gameData?.attributes?.OtherGames} />
        </>
      )}
    </div>
  );
}

export default GameDetailPage;
