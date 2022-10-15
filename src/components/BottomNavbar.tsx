import * as React from "react";
import { NavLink } from "react-router-dom";
import {
  FireFill,
  FireNoFill,
  MoviesFill,
  MoviesNoFill,
  SearchFill,
  SearchNoFill,
  TvFill,
  TvNoFill,
} from "../icons/icons";

const BottomNavbar = () => (
  <div className="nav-bg fixed-bottom custom-border-top">
    <div className="">
      <ul className="  row p-0  d-flex m-0 row-cols-4">
        <li className="col list-unstyled ">
          <NavLink to="/">
            {({ isActive }) =>
              isActive ? (
                <div className="d-flex my-2 text-white justify-content-center align-items-center  text-center flex-column text-decoration-none">
                  <FireFill size="1.7em" />
                </div>
              ) : (
                <div className="d-flex my-2 text-white justify-content-center align-items-center text-center flex-column text-decoration-none">
                  <FireNoFill size="1.7em" />
                </div>
              )
            }
          </NavLink>
        </li>
        <li className="col list-unstyled">
          <NavLink to="/movies">
            {({ isActive }) =>
              isActive ? (
                <div className="d-flex my-2 text-white justify-content-center align-items-center  text-center flex-column text-decoration-none">
                  <MoviesFill size="1.7em" />
                </div>
              ) : (
                <div className="d-flex my-2 text-white justify-content-center align-items-center text-center flex-column text-decoration-none">
                  <MoviesNoFill size="1.7em" />
                </div>
              )
            }
          </NavLink>
        </li>
        <li className="col list-unstyled">
          <NavLink to="/series">
            {({ isActive }) =>
              isActive ? (
                <div className="d-flex my-2 text-white justify-content-center align-items-center  text-center flex-column text-decoration-none">
                  <TvFill size="1.7em" />
                </div>
              ) : (
                <div className="d-flex my-2 text-white justify-content-center align-items-center text-center flex-column text-decoration-none">
                  <TvNoFill size="1.7em" />
                </div>
              )
            }
          </NavLink>
        </li>
        <li className=" col list-unstyled">
          <NavLink to="/search">
            {({ isActive }) =>
              isActive ? (
                <div className="d-flex my-2 text-white justify-content-center align-items-center  text-center flex-column text-decoration-none">
                  <SearchFill size="1.7em" />
                </div>
              ) : (
                <div className="d-flex my-2 text-white justify-content-center align-items-center text-center flex-column text-decoration-none">
                  <SearchNoFill size="1.7em" />
                </div>
              )
            }
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default BottomNavbar;
