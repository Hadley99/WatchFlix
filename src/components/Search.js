import Pagination from "rc-pagination";
import { useEffect, useState } from "react";
import DetailCard from "./SingleComponents/DetailCard";
import Tabs from "./SingleComponents/Tabs";

const Search = () => {
  const [searchText, setSearchText] = useState();
  const [result, setResult] = useState([]);
  const [toggleState, setToggleState] = useState(0);

  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(500);
  const [notFound, setNotFound] = useState();

  const changePage = (p) => {
    setPage(p);
    window.scroll(0, 0);
  };

  const toggleTab = (index) => {
    setToggleState(index);
    setPage(1);
  };
  const fetchSearch = () => {
    if (!searchText) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/${
        toggleState === 1 ? "tv" : "movie"
      }?api_key=${
        process.env.REACT_APP_MY_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setResult(data.results);
        setTotalResults(() =>
          data.total_pages > 500 ? 500 * 20 : data.total_pages
        );
        setNotFound(data.total_results);
      });
  };

  useEffect(() => {
    fetchSearch();
    // eslint-disable-next-line
  }, [page, toggleState]);

  return (
    <div>
      <div>
        <h1 className="mb-md-4 mb-sm-2 mt-5  pt-3">Search</h1>
      </div>
      <form action="">
        <div className="row g-0">
          <div className="col-md-10 col-8 ">
            <input
              type="text"
              className=" form-control custom-bg  text-white"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className="col-md-2 col-4 ps-md-3 ps-0">
            <button
              className="form-control px-3 ms-1 ms-md-0 btn btn-light "
              onClick={(e) => {
                fetchSearch();
                e.preventDefault();
              }}
            >
              Search
            </button>
          </div>
        </div>
        <Tabs
          toggleState={toggleState}
          setToggleState={setToggleState}
          setPage={setPage}
          toggleTab={toggleTab}
        />

        <div className=" row row-cols-md-5 row-cols-sm-2 row-cols-2 gy-4 pb-3 mb-5 mb-md-3  pb-md-5">
          {notFound === 0 ? (
            <div className="text-center w-100 mt-5">No Results Found</div>
          ) : (
            result.map((item) => (
              <DetailCard
                key={item.id}
                id={item.id}
                title={item.title || item.name}
                poster={item.poster_path}
                type={toggleState === 0 ? "movie" : "tv"}
                date={item.first_air_date || item.release_date}
                vote={item.vote_average}
              />
            ))
          )}
        </div>
        {!result.length ? (
          ""
        ) : (
          <Pagination
            className="mb-5 pb-3 mt-5 pb-md-4 justify-content-center text-dark d-flex"
            prevIcon={"<"}
            nextIcon={">"}
            total={totalResults}
            pageSize={result.length}
            current={page}
            onChange={changePage}
            hideOnSinglePage
          />
        )}
      </form>
    </div>
  );
};

export default Search;
