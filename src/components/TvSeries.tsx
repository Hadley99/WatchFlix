import * as React from "react";
import Pagination from "rc-pagination";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Genres from "./Genres";
import useGenre from "./hooks/useGenre";
import DetailCard from "./common/detailCard/DetailCard";
import MovieResult, { Genre } from "../interfaces/MovieResult";

const TvSeries = () => {
  const [series, setSeries] = useState<Array<MovieResult>>([]);
  const [selectedGenres, setSelectedGenres] = useState<Array<Genre>>([]);
  const [genres, setGenres] = useState<Array<Genre>>([]);
  const genresForUrl = useGenre(selectedGenres);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(500);
  const changePage = (p: number) => {
    window.scroll(0, 0);
    setPage(p);
  };

  const fetchSeries = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresForUrl}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSeries(data.results);
        setTotalResults(() =>
          data.total_pages > 500 ? 500 * 20 : data.total_pages
        );
      });
  };

  useEffect(() => {
    fetchSeries();
    // eslint-disable-next-line
  }, [genresForUrl, page]);

  return (
    <div>
      <div>
        <h1 className="mb-md-4 mb-sm-2 mt-5 pt-3">Tv Series</h1>
        <Genres
          type="tv"
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
        />
      </div>
      <motion.div
        layout
        className="row row-cols-md-5 row-cols-sm-2 row-cols-2 gy-4 pb-3 mb-5 mb-md-3  pb-md-5"
      >
        {series?.map((item) => (
          <DetailCard
            key={item.id}
            id={item.id}
            title={item.title || item.name}
            poster={item.poster_path}
            type={"tv"}
            date={item.first_air_date || item.release_date}
          />
        ))}
      </motion.div>
      {!series.length ? (
        ""
      ) : (
        <Pagination
          className="mb-5 pb-3 pb-md-4  mt-5 justify-content-center text-dark d-flex"
          prevIcon={"<"}
          nextIcon={">"}
          total={totalResults}
          pageSize={series.length}
          current={page}
          onChange={changePage}
          hideOnSinglePage
        />
      )}
    </div>
  );
};

export default TvSeries;
