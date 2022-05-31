import React, { useEffect, useRef } from "react";
import MovieSection from "../MovieSection";
import MovieQuery from "../MovieQuery";
import { ContentWrapper, PaddingProvider } from "./styles";
import Appbar from "../Appbar";
import Footer from "../Footer";

export type propsType = {
  movies: any;
  setMovies: any;
};

export default function index({ movies, setMovies }: propsType) {
  const searchRef = useRef(null);
  return (
    <>
      <Appbar
        refProp={searchRef}
        movies={movies}
        setMovies={setMovies}
        page="index"
      />
      <PaddingProvider>
        <ContentWrapper>
          <MovieQuery
            refProp={searchRef}
            id="search"
            movies={movies}
            setMovies={setMovies}
          />
          <MovieSection showMore={true} id="nowPlaying" section="nowPlaying" />
          <MovieSection showMore={true} id="upcoming" section="upcoming" />
          <MovieSection id="weekRated" section="weekRated" />
          <MovieSection showMore={true} id="topRated" section="topRated" />
          <MovieSection showMore={true} id="popular" section="popular" />
        </ContentWrapper>
      </PaddingProvider>
      <Footer />
    </>
  );
}
