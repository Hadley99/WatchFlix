import * as React from "react";
import Pagination from "rc-pagination";
import { useEffect, useState } from "react";
import DetailCard from "./common/detailCard/DetailCard";
import Tabs from "./common/tabs/Tabs";
import { MovieResult } from "../interfaces";

const Search = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [result, setResult] = useState<Array<MovieResult>>();
  const [tab, setTab] = useState(0);

  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(500);
  const [notFound, setNotFound] = useState();

  const fetchSearch = () => {
    if (!searchText) return;
    fetch(
      `https://api.themoviedb.org/3/search/${
        tab === 1 ? "tv" : "movie"
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

  const debounce: (
    cb: (text: string) => void,
    delay?: number
  ) => (text: string) => void = (cb, delay = 300) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (text: string) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fetchSearch();
        cb(text);
      }, delay);
    };
  };

  const updateDebounce: (query: string) => void = debounce((text: string) => {
    setSearchText(text);
  }, 300);

  const changePage = (p: number) => {
    setPage(p);
    window.scroll(0, 0);
  };

  const toggleTab = (index: number) => {
    setTab(index);
    setPage(1);
  };

  useEffect(() => {
    fetchSearch();
    // eslint-disable-next-line
  }, [page, tab, searchText]);

  return (
    <div>
      <div>
        <h1 className="mb-md-4 mb-sm-2 mt-5  pt-3">Search</h1>
      </div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="row g-0">
          <div className="col ">
            <input
              type="text"
              className=" form-control custom-bg  text-white"
              onChange={(e) => {
                updateDebounce(e.target.value);
                //setSearchText(e.target.value);
              }}
            />
          </div>
          {/* <div className="col-md-2 col-4 ps-md-3 ps-0">
            <button
              className="form-control px-3 ms-1 ms-md-0 btn btn-light "
              onClick={(e) => {
                fetchSearch();
                e.preventDefault();
              }}
            >
              Search
            </button>
          </div> */}
        </div>
        <Tabs {...{ tab, toggleTab }} />

        <div className=" row row-cols-md-5 row-cols-sm-2 row-cols-2 gy-4 pb-3 mb-5 mb-md-3  pb-md-5">
          {notFound === 0 ? (
            <div className="text-center w-100 mt-5">No Results Found</div>
          ) : (
            result?.map((item) => (
              <DetailCard
                key={item.id}
                id={item.id}
                title={item.title || item.name}
                poster={item.poster_path}
                type={tab === 0 ? "movie" : "tv"}
                date={item.first_air_date || item.release_date}
              />
            ))
          )}
        </div>
        {result?.length && (
          <Pagination
            className="mb-5 pb-3 mt-5 pb-md-4 justify-content-center text-dark d-flex"
            prevIcon={"<"}
            nextIcon={">"}
            total={totalResults}
            pageSize={result?.length}
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
