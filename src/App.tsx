import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNavbar from "./components/BottomNavbar";
import MoviePage from "./components/MoviePage";
import Movies from "./components/Movies";
import Navbar from "./components/common/Navbar";
import Search from "./components/Search";
import Trending from "./components/trending/Trending";
import TvSeries from "./components/TvSeries";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div>
          <div className="container">
            <Routes>
              <Route path="/" element={<Trending />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<TvSeries />} />
              <Route path="/search" element={<Search />} />
              <Route path="/:type/:id" element={<MoviePage />} />
            </Routes>
          </div>
        </div>

        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
