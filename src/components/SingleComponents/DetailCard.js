import { Link } from "react-router-dom";
import { img_300, unavailable } from "../config/config";
import { motion } from "framer-motion";

const DetailCard = ({ id, poster, title, type, date, vote }) => {
  return (
    <motion.div layout>
      <Link to={`/${type}/${id}`} className={"text-decoration-none text-white"}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="col"
        >
          <div className=" moviecard p-2">
            <img
              width="100%"
              src={poster ? `${img_300}${poster}` : unavailable}
              alt={title}
              className="rounded  "
            />
            <p className="mb-1 w-100 mt-2 elipsis">{title}</p>
            <small className="d-flex justify-content-between">
              <div>{type === "tv" ? "Tv Show" : "Movie"}</div>
              <div>{date?.slice(0, 4)}</div>
            </small>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default DetailCard;
