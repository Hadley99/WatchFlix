import { useState } from "react";
import { NavLink } from "react-router-dom";

const BottomNavbar = () => {
  const [toggleState, setToggleState] = useState(0);

  return (
    <div className="nav-bg fixed-bottom custom-border-top">
      <div className="">
        <ul className="  row p-0  d-flex m-0 row-cols-4">
          <li className="col list-unstyled">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "  d-flex pt-2   rounded text-center flex-column text-decoration-none  active-tab "
                  : "d-flex pt-2  text-center flex-column text-decoration-none text-white "
              }
            >
              <i className="fa-light px-2 fs-5 fa-fire-flame-curved"></i>
              <p className="mt-1 px-sm-2 m-0" style={{ fontSize: "14px" }}>
                Trending
              </p>
            </NavLink>
          </li>
          <li className="col list-unstyled">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive
                  ? "  d-flex pt-2  rounded text-center flex-column text-decoration-none  active-tab "
                  : "d-flex pt-2  text-center flex-column text-decoration-none text-white "
              }
            >
              <i className="fa-light px-2 fs-5 fa-clapperboard-play"></i>
              <p className="mt-1 px-sm-2 m-0" style={{ fontSize: "14px" }}>
                Movies
              </p>
            </NavLink>
          </li>
          <li className="col list-unstyled">
            <NavLink
              to="/series"
              className={({ isActive }) =>
                isActive
                  ? "  d-flex pt-2  rounded text-center flex-column text-decoration-none  active-tab "
                  : "d-flex pt-2  text-center flex-column text-decoration-none text-white "
              }
            >
              <i className="fa-light px-2 fs-5 fa-tv-retro"></i>
              <p
                className="mt-1 px-sm-2 elipsis fw-normal w-100 m-0"
                style={{ fontSize: "14px" }}
              >
                Tv Shows
              </p>
            </NavLink>
          </li>
          <li className=" col list-unstyled">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive
                  ? "  d-flex pt-2  rounded text-center flex-column text-decoration-none  active-tab "
                  : "d-flex pt-2 text-center flex-column text-decoration-none text-white "
              }
            >
              <i className="fa-light px-2  fs-5 fa-magnifying-glass"></i>
              <p className="mt-1 px-sm-2  m-0" style={{ fontSize: "14px" }}>
                Search
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNavbar;
