import react from "react";
import { createContext, useState, useEffect } from "react"; 

export const MovieSectionContext = createContext();

export default function MovieSectionContextProvider({ children }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [weekRatedMovies, setWeekRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const mapCondition = {
    upcoming: upcomingMovies,
    weekRated: weekRatedMovies,
    topRated: topRatedMovies,
    popular: popularMovies,
  };
  const stringCondition = {
    upcoming: "Upcoming",
    weekRated: "Week Rated",
    topRated: "Top Rated",
    popular: "Popular",
  };

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
      value={props
      }
    >
      {children}
    </MovieSectionContext.Provider>
  );
}
