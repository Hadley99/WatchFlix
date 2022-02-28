import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  useEffect(() => {}, []);
  return (
    <div className="nav-bg fixed-bottom custom-border-top">
      <div className="">
        <ul className="  row p-0  d-flex m-0 row-cols-4">
          <li className="col list-unstyled">
            <Link
              to="/"
              className={
                toggleState === 0
                  ? "  d-flex pt-2   rounded text-center flex-column text-decoration-none  active-tab "
                  : "d-flex pt-2  text-center flex-column text-decoration-none text-white "
              }
              onClick={() => toggleTab(0)}
            >
              <i className="fa-light px-2 fs-5 fa-fire-flame-curved"></i>
              <p className="mt-1 px-sm-2 m-0" style={{ fontSize: "14px" }}>
                Trending
              </p>
            </Link>
          </li>
          <li className="col list-unstyled">
            <Link
              to="/movies"
              className={
                toggleState === 1
                  ? "  d-flex pt-2  rounded text-center flex-column text-decoration-none  active-tab "
                  : "d-flex pt-2  text-center flex-column text-decoration-none text-white "
              }
              onClick={() => {
                toggleTab(1);
              }}
            >
              <i className="fa-light px-2 fs-5 fa-clapperboard-play"></i>
              <p className="mt-1 px-sm-2 m-0" style={{ fontSize: "14px" }}>
                Movies
              </p>
            </Link>
          </li>
          <li className="col list-unstyled">
            <Link
              to="/series"
              className={
                toggleState === 2
                  ? "  d-flex pt-2  rounded text-center flex-column text-decoration-none  active-tab "
                  : "d-flex pt-2  text-center flex-column text-decoration-none text-white "
              }
              onClick={() => {
                toggleTab(2);
              }}
            >
              <i className="fa-light px-2 fs-5 fa-tv-retro"></i>
              <p
                className="mt-1 px-sm-2 elipsis fw-normal w-100 m-0"
                style={{ fontSize: "14px" }}
              >
                Tv Shows
              </p>
            </Link>
          </li>
          <li className=" col list-unstyled">
            <Link
              to="/search"
              className={
                toggleState === 3
                  ? "  d-flex pt-2  rounded text-center flex-column text-decoration-none  active-tab "
                  : "d-flex pt-2 text-center flex-column text-decoration-none text-white "
              }
              onClick={() => {
                toggleTab(3);
              }}
            >
              <i className="fa-light px-2  fs-5 fa-magnifying-glass"></i>
              <p className="mt-1 px-sm-2  m-0" style={{ fontSize: "14px" }}>
                Search
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNavbar;
