import React, { useEffect } from "react";
import useMovieStore from "../../stores/movieStore";

import { Grid, CircularProgress, Box } from "@mui/material";

import MovieSectionContainer from "../MovieSectionContainer";

import {
  MovieSection,
  StyledGrid,
  SectionBoxInfo,
  SectionInfo,
  ShowMoreButton,
} from "./styles";

type propsType = {
  section:
    | "upcoming"
    | "topRated"
    | "popular"
    | "weekRated"
    | "nowPlaying"
    | "latest"
    | "similar";
  id?: string;
  showMore?: boolean;
  fetchFunction: () => void;
  listener?: any;
};

export default function index({
  section,
  id,
  showMore,
  fetchFunction,
  listener,
}: propsType) {
  const API_IMG = "http://image.tmdb.org/t/p/original/";

  const {
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    weekRatedMovies,
    similarMovies,
  } = useMovieStore((state) => state);

  useEffect(() => {
    fetchFunction();
  }, [listener]);

  const mapCondition = {
    upcoming: upcomingMovies,
    weekRated: weekRatedMovies,
    topRated: topRatedMovies,
    popular: popularMovies,
    nowPlaying: nowPlayingMovies,
    similar: similarMovies,
  };

  const categoryCondition = {
    upcoming: "upcoming",
    topRated: "toprated",
    popular: "popular",
    nowPlaying: "nowplaying",
    weekRated: "weekrated",
    similar: "similar",
  };

  const stringCondition = {
    upcoming: "Upcoming",
    weekRated: "Week Rated",
    topRated: "Top Rated",
    popular: "Popular",
    nowPlaying: "Now Playing",
    similar: "Similar Movies",
  };

  return mapCondition[section]?.length > 0 ? (
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
  ) : (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="error" />
    </Box>
  );
}
