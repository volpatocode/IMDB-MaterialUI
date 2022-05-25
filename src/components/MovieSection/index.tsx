import * as React from "react";
import {
  MovieSection,
  StyledGrid,
  SectionBoxInfo,
  SectionInfo,
  ShowMoreButton,
} from "./styles";
import { useState, useEffect } from "react";
import MovieSectionContainer from "../MovieSectionContainer";
import { movieSectionType } from "../../types/services";
import { Grid } from "@mui/material";

type propsType = {
  section:
    | "upcoming"
    | "topRated"
    | "popular"
    | "weekRated"
    | "nowPlaying"
    | "latest";
};

export default function index({ section }: propsType) {
  const API_IMG = "http://image.tmdb.org/t/p/original/";
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [upcomingMovies, setUpcomingMovies] = useState<movieSectionType[]>([]);
  const [weekRatedMovies, setWeekRatedMovies] = useState<movieSectionType[]>(
    []
  );
  const [topRatedMovies, setTopRatedMovies] = useState<movieSectionType[]>([]);
  const [popularMovies, setPopularMovies] = useState<movieSectionType[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<movieSectionType[]>(
    []
  );

  useEffect(() => {
    const getNowPlayingMovies = () => {
      setLoading(true);
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=${page}`
      )
        .then((res) => res.json())
        .then((nowPlaying) => {
          setNowPlayingMovies([...nowPlayingMovies, ...nowPlaying.results]);
          setLoading(false);
        });
    };
    getNowPlayingMovies();
  }, [page]);

  useEffect(() => {
    const getUpcomingMovies = () => {
      setLoading(true);
      fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=${page}`
      )
        .then((res) => res.json())
        .then((upcoming) => {
          setUpcomingMovies([...upcomingMovies, ...upcoming.results]);
          setLoading(false);
        });
    };
    getUpcomingMovies();
  }, [page]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=f04297956f564d66b4a51ff3da1c6c30`
    )
      .then((res) => res.json())
      .then((weekRated) => {
        setWeekRatedMovies(weekRated.results);
      });
  }, []);

  useEffect(() => {
    const getTopRatedMovies = () => {
      setLoading(true);
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=${page}`
      )
        .then((res) => res.json())
        .then((topRated) => {
          setTopRatedMovies([...topRatedMovies, ...topRated.results]);
          setLoading(false);
        });
    };
    getTopRatedMovies();
  }, [page]);

  useEffect(() => {
    const getPopularMovies = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=${page}`
      )
        .then((res) => res.json())
        .then((popular) => {
          setPopularMovies([...popularMovies, ...popular.results]);
          setLoading(false);
        });
    };
    getPopularMovies();
  }, [page]);

  const mapCondition = {
    upcoming: upcomingMovies,
    weekRated: weekRatedMovies,
    topRated: topRatedMovies,
    popular: popularMovies,
    nowPlaying: nowPlayingMovies,
  };

  const stringCondition = {
    upcoming: "Upcoming",
    weekRated: "Week Rated",
    topRated: "Top Rated",
    popular: "Popular",
    nowPlaying: "Now Playing",
  };

  if (mapCondition[section]?.length === 0) {
    return <MovieSection></MovieSection>;
  } else {
    return (
      <MovieSection>
        <SectionBoxInfo>
          <SectionInfo>{stringCondition[section]}</SectionInfo>
          <ShowMoreButton onClick={() => setPage(page + 1)} variant="text">
            {loading ? `Loading...` : `Load more`}
          </ShowMoreButton>
        </SectionBoxInfo>
        <StyledGrid wrap="wrap" container columnSpacing={1} rowSpacing={1}>
          {mapCondition[section]?.map((movie) => (
            <Grid item xs={4} md={3} lg={2} key={movie.id}>
              <MovieSectionContainer
                movieId={movie.id}
                src={
                  movie.poster_path
                    ? API_IMG + movie.poster_path
                    : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                }
                title={movie.title ? movie.title : "No title provided"}
                // year={
                //   movie.release_date
                //     ? movie.release_date.slice(0, 4)
                //     : "No year provided"
                // }
                // voteAv={
                //   movie.vote_average
                //     ? movie.vote_average.toString().slice(0, 3)
                //     : "No rating provided"
                // }
              ></MovieSectionContainer>
            </Grid>
          ))}
        </StyledGrid>
      </MovieSection>
    );
  }
}
