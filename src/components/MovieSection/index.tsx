import * as React from "react";
import {
  MovieSection,
  StyledGrid,
  SectionBoxInfo,
  SectionInfo,
  ShowMoreButton,
} from "./styles";
import MovieSectionContainer from "../MovieSectionContainer";
import { Grid } from "@mui/material";
import useMovieStore from "../../stores/moviestore";
import { useEffect } from "react";
import { movieSectionType } from "../../types/services";

type propsType = {
  section:
    | "upcoming"
    | "topRated"
    | "popular"
    | "weekRated"
    | "nowPlaying"
    | "latest";
  id?: string;
  showMore?: boolean;
};

export default function index({ section, id, showMore }: propsType) {
  const API_IMG = "http://image.tmdb.org/t/p/original/";
  const {
    nowPlayingMovies,
    setNowPlayingMovies,
    popularMovies,
    setPopularMovies,
    topRatedMovies,
    setTopRatedMovies,
    upcomingMovies,
    setUpcomingMovies,
    weekRatedMovies,
    setWeekRatedMovies,
  } = useMovieStore((state) => state);

  useEffect(() => {
    setNowPlayingMovies();
    setPopularMovies();
    setTopRatedMovies();
    setUpcomingMovies();
    setWeekRatedMovies();
  }, []);


  const categoryCondition = {
    upcoming: "upcoming",
    topRated: "topRated",
    popular: "popular",
    nowPlaying: "nowPlaying",
    weekRated: "weekRated",
  };

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

  console.log(mapCondition[section]);

  return (
    mapCondition[section]?.length > 0 && (
      <MovieSection id={id}>
        <SectionBoxInfo>
          <SectionInfo>{stringCondition[section]}</SectionInfo>
          {showMore && (
            <ShowMoreButton
              href={`/category/${categoryCondition[section]}`}
              variant="text"
            >
              Show more
            </ShowMoreButton>
          )}
        </SectionBoxInfo>
        <StyledGrid wrap="wrap" container columnSpacing={1} rowSpacing={1}>
          {mapCondition[section]?.slice(0, 6).map((movie) => (
            <Grid item xs={4} md={3} lg={2} key={movie.id}>
              <MovieSectionContainer
                movieId={movie.id}
                src={
                  movie.poster_path
                    ? API_IMG + movie.poster_path
                    : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                }
                title={movie.title ? movie.title : "No title provided"}
              />
            </Grid>
          ))}
        </StyledGrid>
      </MovieSection>
    )
  );
}
