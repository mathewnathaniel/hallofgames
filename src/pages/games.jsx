import { useEffect, useState } from "react";
import { fetchGames } from "../services/api";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";

export default function ExploreGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadGames() {
      try {
        const data = await fetchGames();
        setGames(data.results || []);
      } catch (err) {
        console.error("Failed to fetch games:", err);
        setError("Failed to load games. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, []);

  if (loading)
    return (
      <p className="p-6 text-gray-700 text-lg font-medium">
        Loading games...
      </p>
    );

  if (error)
    return (
      <p className="p-6 text-red-500 text-lg font-medium">
        {error}
      </p>
    );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Explore Games</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <Card key={game.id} className="shadow-md hover:shadow-lg transition">
            <img
              src={game.background_image}
              alt={game.name}
              className="rounded-md h-48 w-full object-cover"
            />

            {/* Nama game → Link ke detail */}
            <Link to={`/game/${game.id}`}>
              <h2 className="text-xl font-semibold hover:text-blue-600 transition">
                {game.name}
              </h2>
            </Link>

            <p className="text-gray-600">⭐ Rating: {game.rating}</p>
            <p className="text-gray-600">📅 Released: {game.released}</p>

            <p className="text-gray-500 text-sm">
              🕹️ Genres:{" "}
              {game.genres?.map((g) => g.name).join(", ") || "N/A"}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
