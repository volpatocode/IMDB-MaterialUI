import React, { useState, useEffect } from "react";
import { OpacityBottomProvider, ShowcaseContainer } from "./styles";
import { movieSectionType } from "../../types/services";

export type propsType = {
  src: string;
};

export default function index({ src }: propsType) {
  const API_IMG = "http://image.tmdb.org/t/p/original/";
  const [trendingMovies, setTrendingMovies] = useState<movieSectionType[]>([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=f04297956f564d66b4a51ff3da1c6c30"
    )
      .then((res) => res.json())
      .then((trending) => {
        setTrendingMovies(trending.results);
        console.log(trending);
      });
  }, []);

  return (
    trendingMovies.slice(0, 1).map((movie) => (
    <ShowcaseContainer src={movie?.backdrop_path ? API_IMG + movie.backdrop_path : API_IMG + movie.poster_path} key={movie.id}>
      <OpacityBottomProvider />
    </ShowcaseContainer>
    ))
  );
}