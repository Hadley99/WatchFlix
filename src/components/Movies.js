import { useState, useEffect } from "react";
import Genres from "./Genres";
import DetailCard from "./SingleComponents/DetailCard";
import useGenre from "./hooks/useGenre";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

const Movies = () => {
  const changePage = (p) => {
    window.scroll(0, 0);
    setPage(p);
  };

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genresForUrl = useGenre(selectedGenres);

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(500);

  const [fetchType, setFetchType] = useState("discover");
  const getFetchType = () => {
    switch (fetchType) {
      case "discover":
        return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresForUrl}`;
      case "upcoming":
        return `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresForUrl}`;
      case "popular":
        return `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresForUrl}`;
      case "nowPlaying":
        return `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresForUrl}`;
      case "topRated":
        return `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresForUrl}`;
      default:
        return;
    }
  };
  const fetchMovies = () => {
    fetch(getFetchType())
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMovies(data.results);

        setTotalResults(() =>
          data.total_pages > 500 ? 500 * 20 : data.total_pages
        );
      });
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [genresForUrl, page, selectedGenres, fetchType]);

  return (
    <div>
      <div>
        <h1 className="mb-md-4 mb-sm-2 mt-5 pt-3">Movies</h1>

        <select
          className="form-select"
          id="movie-types"
          value={fetchType}
          onChange={(e) => {
            const selectedType = e.target.value;
            setFetchType(selectedType);
            setPage(1);
          }}
        >
          <option value="discover">Discover</option>
          <option value="popular">Popular</option>
          <option value="nowPlaying">Now Playing</option>
          <option value="topRated">Top Rated</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>
      <div>
        <Genres
          type="movie"
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
        />
      </div>
      <div className="row row-cols-md-5 row-cols-sm-2 row-cols-2 gy-4 pb-3 mb-5 mb-md-3  pb-md-5">
        {movies.map((item) => (
          <DetailCard
            key={item.id}
            id={item.id}
            title={item.title || item.name}
            poster={item.poster_path}
            type={"movie"}
            date={
              item.first_air_date?.slice(0.4) || item.release_date?.slice(0, 4)
            }
            vote={item.vote_average}
          />
        ))}
      </div>
      {!movies.length ? (
        ""
      ) : (
        <Pagination
          style={{}}
          className="mb-5 pb-3  mt-5 pb-md-4 justify-content-center text-dark d-flex"
          prevIcon={"<"}
          nextIcon={">"}
          total={totalResults}
          pageSize={movies.length}
          current={page}
          onChange={changePage}
          hideOnSinglePage
        />
      )}
    </div>
  );
};

export default Movies;
