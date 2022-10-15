import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Stars from "react-stars-display";
import {
  img_300,
  img_500,
  img_780,
  img_185,
  original,
  unavailable,
  unavailableLandscape,
} from "./config/config";
import Chip from "./SingleComponents/Chip";
import DetailCard from "./SingleComponents/DetailCard";

const MoviePage = () => {
  const { id, type } = useParams();
  const [data, setData] = useState([]);
  const [credits, setCredits] = useState([]);
  const [providers, setProviders] = useState([]);
  const [similar, setSimilar] = useState([]);
  const page = 1;
  const [video, setVideo] = useState();

  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  const fetchProviders = () => {
    fetch(
      `https://api.themoviedb.org/3/${type}/${id}/watch/providers?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let results = data.results;
        if (results["IN"]) {
          setProviders(results["IN"].flatrate);
        } else {
          setProviders(null);
        }
      });
  };

  const fetchSimilar = () => {
    fetch(
      `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&page=${page}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSimilar(data.results);
      });
  };

  const fetchCredits = () => {
    fetch(
      `https://api.themoviedb.org/3/${type}/${id}//credits?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCredits(data);
      });
  };

  const fetchVideo = () => {
    fetch(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setVideo(data.results[0]?.key);
      });
  };

  useEffect(() => {
    fetchProviders();
    fetchData();
    fetchCredits();
    fetchVideo();
    fetchSimilar();

    // eslint-disable-next-line
  }, [id, type]);

  return (
    <div className="mt-3 pt-5">
      <div className="d-none d-md-block">
        <img
          src={
            data.backdrop_path
              ? `${img_780}/${data.backdrop_path}`
              : unavailableLandscape
          }
          className="backdrop fixed-top"
          alt=""
        />
      </div>
      <div className="d-md-none d-block">
        <img
          src={data.poster_path ? `${img_780}/${data.poster_path}` : ""}
          className="backdrop fixed-top "
          alt=""
        />
      </div>
      {data && (
        <div className="row mt-4">
          <div className="col-md-4 text-end">
            <div>
              <div
                className="d-none d-md-block m-0 mx-md-auto "
                style={{ width: "75%" }}
              >
                <img
                  src={
                    data.poster_path
                      ? `${img_500}/${data.poster_path}`
                      : unavailable
                  }
                  className="rounded"
                  width="100%"
                  alt=""
                />
              </div>
              <div className="d-md-none text-center d-block">
                <img
                  src={
                    data.poster_path
                      ? `${img_300}/${data.poster_path}`
                      : unavailable
                  }
                  className="rounded"
                  width="70%"
                  alt=""
                />
              </div>
              <p className="fst-italic text-center custom-muted mt-1 mb-2">
                {data.tagline}
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="ms-2">
              <div>
                <h2 className="fw-bold mt-4 mb-0">
                  {data.title || data.name}
                  <span className="custom-muted fw-normal fst-light">
                    (
                    {data.release_date?.slice(0, 4) ||
                      data.last_air_date?.slice(0, 4)}
                    )
                  </span>
                </h2>
              </div>
              <div>
                <Stars
                  stars={data.vote_average / 2}
                  size={20} //optional
                  spacing={2} //optional
                  fill="#ea9c46" //optional
                />
                <sup className="custom-muted">({data.vote_average / 2})</sup>
              </div>
              <div className="d-flex mb-3 mt-2  flex-wrap">
                {data.genres &&
                  data.genres.map((genre) => (
                    <div key={genre.id}>
                      <div className="badge border text-white ms-0 me-2 my-1 rounded-pill">
                        <Chip name={genre.name} />
                      </div>
                    </div>
                  ))}
              </div>

              <div>
                <small className="">{data.overview}</small>
              </div>

              <div className="mt-4">
                <a
                  rel="noopener noreferrer"
                  href={`https://www.youtube.com/watch?v=${video}`}
                  className="btn btn-outline-light rounded-pill "
                  target="_blank"
                >
                  Watch Trailer
                </a>
              </div>
              {providers && (
                <>
                  <h6 className="mt-3 pt-2  m-0 fs-5 fw-bold">Streaming on</h6>
                  <div className="d-flex flex-wrap">
                    {providers.map((item) => (
                      <div key={item.provider_id}>
                        <img
                          src={`${original}/${item.logo_path}`}
                          alt={item.prodiver_name}
                          width="50px"
                          height="50px"
                          className="rounded me-2 mt-2"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <div>
        <h5 className="mt-4 fs-3">Cast</h5>

        <div className=" flex-nowrap  scroll row row-cols-3 g-2 g-md-3 row-cols-md-6 mb-5">
          {credits.cast &&
            credits.cast.map((person) => (
              <div key={person?.id} className={"col"}>
                <div className="custom-white text-dark text-start rounded-3 mb-2">
                  <img
                    src={
                      person.profile_path
                        ? `${img_185}/${person.profile_path}`
                        : unavailable
                    }
                    className="rounded img-fluid"
                    width="100%"
                    alt=""
                  />
                  <div className="py-2 px-1">
                    <p className=" m-0   elipsis w-100" style={{}}>
                      {person.name}
                    </p>
                    <p
                      className=" m-0  fst-italic  elipsis w-100"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      {person.character}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="pb-3">
          <h5 className="mt-4 fs-3">Similar</h5>

          <div className=" flex-nowrap  scroll overflow-y-hidden  g-3 row  row-cols-md-6 row-cols-2 mb-5 ">
            {similar &&
              similar.map((item) => (
                <DetailCard
                  onClick={window.scroll(0, 0)}
                  key={item.id}
                  id={item.id}
                  title={item.title || item.name}
                  poster={item.poster_path}
                  type={type}
                  date={item.first_air_date || item.release_date}
                  vote={item.vote_average}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
