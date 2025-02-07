import { Routes, Route } from "react-router-dom";
import "./CSS/App.css";
import Home from "./page/Home";
import { MoiveProvider } from "./contexts/MovieContext";
import Favorites from "./page/Favorites";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <MoiveProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MoiveProvider>
  );
}

export default App;
