import { Genre } from "../../interfaces/MovieResult";

const useGenre = (selectedGenres: Array<Genre>) => {
  if (selectedGenres.length < 1) return "";

  const GenresIds: Array<number | string> = selectedGenres.map((g) => g.id);
  return GenresIds.reduce((acc, curr) => `${acc},${curr}`);
};

export default useGenre;
