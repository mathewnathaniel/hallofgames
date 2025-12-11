// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import ExploreGames from "./pages/games";
import MainNavbar from "./components/navbar";


function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/explore" element={<ExploreGames />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
