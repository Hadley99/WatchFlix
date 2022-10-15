export default interface MovieResult {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  media_type: string;
  first_air_date?: string;
  release_date?: string;
  vote_average: number;
  backdrop_path: string;
  tagline: string;
  last_air_date?: string;
  genres: Array<Genre>;
  overview: string;
}

export interface Genre {
  id: number | string;
  name: string;
}

export interface Providers {
  logo_path: string;
  display_priority: number;
  provider_id: number;
  provider_name: string;
}

export interface Credits {
  id: number;
  cast: Array<Cast>;
}

export interface Cast {
  id: number;
  profile_path?: string;
  name: string;
  character: string;
}
