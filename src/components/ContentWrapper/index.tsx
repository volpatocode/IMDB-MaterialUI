import React, { useRef } from "react";
import { ContentWrapper, PaddingProvider } from "./styles";
import useMovieStore from "../../stores/movieStore";

import MovieSection from "../MovieSection";
import MovieQuery from "../MovieQuery";
import Appbar from "../Appbar";
import Footer from "../Footer";

export type propsType = {
  movies: any;
  setMovies: any;
};

export default function index({ movies, setMovies }: propsType) {
  const searchRef = useRef(null);
  const {
    setNowPlayingMovies,
    setPopularMovies,
    setTopRatedMovies,
    setUpcomingMovies,
    setWeekRatedMovies,
  } = useMovieStore((state) => state);

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
          <MovieSection
            fetchFunction={setNowPlayingMovies}
            showMore={true}
            id="nowPlaying"
            section="nowPlaying"
          />
          <MovieSection
            fetchFunction={setUpcomingMovies}
            showMore={true}
            id="upcoming"
            section="upcoming"
          />
          <MovieSection
            fetchFunction={setWeekRatedMovies}
            id="weekRated"
            section="weekRated"
          />
          <MovieSection
            fetchFunction={setTopRatedMovies}
            showMore={true}
            id="topRated"
            section="topRated"
          />
          <MovieSection
            fetchFunction={setPopularMovies}
            showMore={true}
            id="popular"
            section="popular"
          />
        </ContentWrapper>
      </PaddingProvider>
      <Footer />
    </>
  );
}
