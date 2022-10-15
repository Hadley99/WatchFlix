import * as React from "react";
import Pagination from "rc-pagination";
import { useState, useEffect } from "react";
import DetailCard from "../common/detailCard/DetailCard";
import { MovieResult } from "../../interfaces";

const Trending: React.FC = () => {
  const [trending, setTrending] = useState<Array<MovieResult>>([]);
  const [page, setPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState(500);

  const changePage = (p: number) => {
    setPage(p);
    window.scroll(0, 0);
  };

  const fetchTrending = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MY_KEY}&page=${page}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTrending(data.results);

        setTotalResults(() =>
          data.total_pages > 500 ? 500 * 20 : data.total_pages
        );
      });
  };

  useEffect(() => {
    fetchTrending();

    // eslint-disable-next-line
  }, [page]);
  return (
    <div>
      <div>
        <div>
          <h1 className="mb-md-4 mb-sm-2 mt-5 pt-3">Trending</h1>
        </div>
        <div className=" row row-cols-md-5 row-cols-sm-2 row-cols-2 gy-4 pb-3 mb-5 mb-md-3  pb-md-5">
          {trending.map((item) => (
            <DetailCard
              key={item.id}
              id={item.id}
              title={item.title || item.name}
              poster={item.poster_path}
              type={item.media_type}
              date={item.first_air_date || item.release_date}
            />
          ))}
        </div>
        {!trending.length ? (
          ""
        ) : (
          <Pagination
            className="mb-5 pb-3  mt-5 pb-md-4 justify-content-center text-dark d-flex"
            prevIcon={"<"}
            nextIcon={">"}
            total={totalResults}
            pageSize={trending.length}
            current={page}
            onChange={changePage}
            hideOnSinglePage
          />
        )}
      </div>
    </div>
  );
};

export default Trending;
