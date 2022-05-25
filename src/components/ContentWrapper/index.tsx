import * as React from "react";
import MovieSection from "../../components/MovieSection";
import MovieQuery from "../../components/MovieQuery";
import { ContentWrapper, PaddingProvider } from "./styles";

export type propsType = {
  movies: any;
  setMovies: any;
};

export default function index({ movies, setMovies }: propsType) {
  return (
    <PaddingProvider>
      <ContentWrapper>
        <MovieQuery movies={movies} setMovies={setMovies} />
        <MovieSection section="nowPlaying" />
        <MovieSection section="upcoming" />
        <MovieSection section="weekRated" />
        <MovieSection section="topRated" />
        <MovieSection section="popular" />
      </ContentWrapper>
    </PaddingProvider>
  );
}
