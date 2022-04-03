import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNavbar from "./components/BottomNavbar";
import MoviePage from "./components/MoviePage";
import Movies from "./components/Movies";
import Navbar from "./components/navbar";
import Search from "./components/Search";
import Trending from "./components/Trending";
import TvSeries from "./components/TvSeries";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Trending />} />
              <Route exact path="/movies" element={<Movies />} />
              <Route exact path="/series" element={<TvSeries />} />
              <Route exact path="/search" element={<Search />} />
              <Route exact path="*" element={<Trending />} />
              <Route exact path="/:type/:id" element={<MoviePage />} />
            </Routes>
          </div>
        </div>

        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
