// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import ExploreGames from "./pages/games";
import MainNavbar from "./components/navbar";
import GameDetail from "./pages/gamedetail";


function App() {
  return (
    <BrowserRouter>

      <MainNavbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/explore" element={<ExploreGames />} />
            <Route path="/game/:id" element={<GameDetail />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
