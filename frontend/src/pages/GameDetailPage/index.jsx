import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetGameDetail } from "../../api/services";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function GameDetailPage() {
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  //   useEffect(() => {
  //     const fetchGameData = async () => {
  //       try {
  //         const response = await GetGameDetail(id);
  //         setGameData(response.data.attributes);
  //         setLoading(false);
  //       } catch (error) {
  //         console.error("Error fetching game data:", error);
  //         setLoading(false);
  //       }
  //     };
  //     fetchGameData();
  //   }, [id]);

  //   if (loading) {
  //     return <LoadingSpinner />;
  //   }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{gameData.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={gameData.image}
              alt={gameData.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-xl mb-4">{gameData.description}</p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">Game Details</h2>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Category:</span>{" "}
                  {gameData.category}
                </li>
                <li>
                  <span className="font-medium">Players:</span>{" "}
                  {gameData.players}
                </li>
                <li>
                  <span className="font-medium">Duration:</span>{" "}
                  {gameData.duration}
                </li>
                <li>
                  <span className="font-medium">Age:</span> {gameData.age}+
                </li>
              </ul>
            </div>
            <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Book Now
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GameDetailPage;
