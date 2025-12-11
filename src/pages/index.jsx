import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-4">
          Discover Games Worldwide
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Explore thousands of titles from the RAWG video game database API.
        </p>

        <div className="flex justify-center">
          <Link to="/explore">
            <Button color="dark" size="lg">
              Explore Games
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
