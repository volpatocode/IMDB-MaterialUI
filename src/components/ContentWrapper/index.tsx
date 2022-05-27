import React, {useEffect} from "react";
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
        <MovieQuery id="search" movies={movies} setMovies={setMovies} />
        <MovieSection showMore={true} id="nowPlaying" section="nowPlaying" />
        <MovieSection showMore={true} id="upcoming" section="upcoming" />
        <MovieSection id="weekRated" section="weekRated" />
        <MovieSection showMore={true} id="topRated" section="topRated" />
        <MovieSection showMore={true} id="popular" section="popular" />
      </ContentWrapper>
    </PaddingProvider>
  );
}
