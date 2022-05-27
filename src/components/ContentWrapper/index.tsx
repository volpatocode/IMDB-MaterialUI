import * as React from "react";
import MovieSection from "../MovieSection";
import MovieQuery from "../MovieQuery";
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
        <MovieSection id="nowPlaying" section="nowPlaying" />
        <MovieSection id="upcoming" section="upcoming" />
        <MovieSection id="weekRated" section="weekRated" />
        <MovieSection id="topRated" section="topRated" />
        <MovieSection id="popular" section="popular" />
      </ContentWrapper>
    </PaddingProvider>
  );
}
