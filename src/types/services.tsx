export type movieDetailsType = {
  adult: boolean;
  title: string;
  genres: genresType[];
  runtime:number;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  backdrop_path: string;
};

export type genresType = {
  id: number;
  name: string;
};
