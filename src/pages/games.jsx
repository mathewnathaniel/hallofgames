// src/pages/games.jsx
import { useEffect, useState } from "react";
import { fetchGames } from "../services/api";

export default function ExploreGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadGames() {
      try {
        const data = await fetchGames(); // otomatis include API key
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

  if (loading) return <p style={{ padding: "20px" }}>Loading games...</p>;
  if (error) return <p style={{ padding: "20px", color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          fontSize: "28px",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Explore Games
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {games.map((game) => (
          <div
            key={game.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              transition: "box-shadow 200ms ease"
            }}
          >
            <img
              src={game.background_image}
              alt={game.name}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                background: "#eee",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h2
                style={{
                  fontSize: "18px",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                {game.name}
              </h2>

              <p style={{ marginBottom: "6px" }}>⭐ Rating: {game.rating}</p>
              <p style={{ marginBottom: "6px" }}>
                📅 Released: {game.released}
              </p>
              <p style={{ color: "#666" }}>
                🕹️ Genres:{" "}
                {game.genres?.map((g) => g.name).join(", ") || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
