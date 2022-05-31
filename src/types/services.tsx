export type movieDetailsType = {
  id?: number;
  adult?: boolean;
  title?: string;
  genres?: genresType[];
  runtime?: number;
  poster_path?: string;
  vote_average?: number;
  overview?: string;
  release_date?: string;
  backdrop_path?: string;
};

export type genresType = {
  id?: number;
  name?: string;
};

export type castCrewType = {
  cast?: castType[];
  crew?: crewType[];
};

export type castType = {
  id?: string;
  name?: string;
  profile_path?: string;
  character?: string;
};

export type crewType = {
  id?: string;
  name?: string;
  profile_path?: string;
  job?: string;
};

export type similarMoviesType = {
  id?: string;
  title?: string;
  poster_path?: string;
  vote_average?: number;
  overview?: string;
  release_date?: string;
  adult?: boolean;
};

export type movieSectionType = {
  id?: string;
  title?: string;
  poster_path?: string;
  vote_average?: number;
  overview?: string;
  release_date?: string;
  adult?: boolean;
  backdrop_path?: string;
};
