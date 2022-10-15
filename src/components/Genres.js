import { useEffect } from "react";
import Chip from "./SingleComponents/Chip";
import SelectedChip from "./SingleComponents/SelectedChip";

const Genres = ({
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}) => {
  // const [selectedGenres, setSelectedGenres] = useState([]);
  // const [genres, setGenres] = useState([]);
  //const genreForUrl = useGenre(selectedGenres);

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = () => {
    fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGenres(data.genres);
      });
  };

  useEffect(() => {
    fetchGenres();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="d-flex mb-3  flex-wrap">
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <div key={genre.id} onClick={() => handleRemove(genre)}>
            <div className="badge bg-white cp border text-dark ms-0 me-2 my-1 rounded-pill">
              <SelectedChip name={genre.name} />
            </div>
          </div>
        ))}

      {genres &&
        genres.map((genre) => (
          <div key={genre.id} onClick={() => handleAdd(genre)}>
            <div className="badge moviecard cp ms-0 me-2 my-1 rounded-pill">
              <Chip name={genre.name} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Genres;
