import { movieSectionType } from "../types/services";
import axios from "axios";
import create from "zustand";

type State = {
  popularMovies: movieSectionType[];
  setPopularMovies: () => void;
  topRatedMovies: movieSectionType[];
  setTopRatedMovies: () => void;
  weekRatedMovies: movieSectionType[];
  setWeekRatedMovies: () => void;
  upcomingMovies: movieSectionType[];
  setUpcomingMovies: () => void;
  nowPlayingMovies: movieSectionType[];
  setNowPlayingMovies: () => void;
};

const useMovieStore = create<State>((set) => ({
  popularMovies: [],
  setPopularMovies: async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=1`
    );
    set({ popularMovies: response.data.results });
  },

  topRatedMovies: [],
  setTopRatedMovies: async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=1`
    );
    set({ topRatedMovies: response.data.results });
  },

  weekRatedMovies: [],
  setWeekRatedMovies: async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=f04297956f564d66b4a51ff3da1c6c30`
    );
    set({ weekRatedMovies: response.data.results });
  },

  upcomingMovies: [],
  setUpcomingMovies: async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=1`
    );
    set({ upcomingMovies: response.data.results });
  },

  nowPlayingMovies: [],
  setNowPlayingMovies: async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=1`
    );
    set({ nowPlayingMovies: response.data.results });
  },
}));

export default useMovieStore;
