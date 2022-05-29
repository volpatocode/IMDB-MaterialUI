import { createContext, useState, useEffect, ReactNode } from "react";
import { movieSectionType } from "../types/services";

type MovieSectionPropsType = {
  children: ReactNode;
};

const initialValue = {
  popularMovies: [],
  setPopularMovies: (newState: []) => {},
  topRatedMovies: [],
  setTopRatedMovies: (newState: []) => {},
  weekRatedMovies: [],
  setWeekRatedMovies: (newState: []) => {},
  upcomingMovies: [],
  setUpcomingMovies: (newState: []) => {},
  nowPlayingMovies: [],
  setNowPlayingMovies: (newState: []) => {},
};

export const MovieSectionContext = createContext(initialValue);

export const MovieSectionContextProvider = ({
  children,
}: MovieSectionPropsType) => {
  const [upcomingMovies, setUpcomingMovies] = useState<movieSectionType[]>(
    initialValue.upcomingMovies
  );
  const [weekRatedMovies, setWeekRatedMovies] = useState<movieSectionType[]>(
    initialValue.weekRatedMovies
  );
  const [topRatedMovies, setTopRatedMovies] = useState<movieSectionType[]>(
    initialValue.topRatedMovies
  );
  const [popularMovies, setPopularMovies] = useState<movieSectionType[]>(
    initialValue.popularMovies
  );
  const [nowPlayingMovies, setNowPlayingMovies] = useState<movieSectionType[]>(
    initialValue.nowPlayingMovies
  );

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((nowPlaying) => {
        setNowPlayingMovies([...nowPlayingMovies, ...nowPlaying.results]);
      });
  }, [nowPlayingMovies]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((popular) => {
        setPopularMovies(popular.results);
      });
  }, [popularMovies]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((topRated) => {
        setTopRatedMovies(topRated.results);
      });
  }, [topRatedMovies]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((upcoming) => {
        setUpcomingMovies(upcoming.results);
      });
  }, [upcomingMovies]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=f04297956f564d66b4a51ff3da1c6c30"
    )
      .then((res) => res.json())
      .then((weekRated) => {
        setWeekRatedMovies(weekRated.results);
      });
  }, [weekRatedMovies]);

  return (
    <MovieSectionContext.Provider
      value={{
        upcomingMovies,
        setUpcomingMovies,
        weekRatedMovies,
        setWeekRatedMovies,
        topRatedMovies,
        setTopRatedMovies,
        popularMovies,
        setPopularMovies,
        nowPlayingMovies,
        setNowPlayingMovies,
      }}
    >
      {children}
    </MovieSectionContext.Provider>
  );
};
