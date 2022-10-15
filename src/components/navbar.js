import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bg fixed-top  text-center py-2">
      <Link to={"/"} className="text-decoration-none">
        <h1 className="text-danger fs-2 logo-font m-0 p-0 ">Watch Flix</h1>
      </Link>
    </div>
  );
};

export default Navbar;
