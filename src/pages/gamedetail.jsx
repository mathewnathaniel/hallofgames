import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Badge } from "flowbite-react";
import { fetchGames } from "../services/api";

export default function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGame() {
      try {
        const res = await fetchGames();
        setGame(res.data);
      } catch (err) {
        console.error("Failed to fetch game:", err);
      } finally {
        setLoading(false);
      }
    }

    loadGame();
  }, [id]);

  if (loading)
    return (
      <p className="p-6 text-gray-700 text-lg font-medium">
        Loading game details...
      </p>
    );

  if (!game)
    return (
      <p className="p-6 text-red-500 text-lg font-medium">
        Game not found.
      </p>
    );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Card className="shadow-lg">
        {/* Gambar Utama */}
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-72 rounded-md object-cover"
        />

        <h1 className="text-4xl font-bold mt-4">{game.name}</h1>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          <Badge color="failure">⭐ {game.rating}</Badge>
          <Badge color="info">📅 {game.released}</Badge>
          <Badge color="purple">
            💾 {game.metacritic || "N/A"} Metacritic
          </Badge>
        </div>

        {/* Genres */}
        <div className="mt-3 flex flex-wrap gap-2">
          {game.genres?.map((g) => (
            <Badge key={g.id} color="gray">
              {g.name}
            </Badge>
          ))}
        </div>

        {/* Deskripsi RAWG (HTML) */}
        <div
          className="prose prose-slate max-w-none mt-6"
          dangerouslySetInnerHTML={{ __html: game.description }}
        />

        {/* Platforms */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Platforms</h2>
          <div className="flex flex-wrap gap-2">
            {game.platforms?.map((p, i) => (
              <Badge key={i} color="success">
                {p.platform.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Website */}
        {game.website && (
          <a
            href={game.website}
            target="_blank"
            className="mt-6 inline-block text-blue-600 underline"
          >
            Official Website →
          </a>
        )}
      </Card>
    </div>
  );
}
