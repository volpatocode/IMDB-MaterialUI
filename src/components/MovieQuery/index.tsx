import React from "react";

import Grid from "@mui/material/Grid";

import MovieSectionContainer from "../MovieSectionContainer";

import { MovieQuery, StyledGrid, QueryInfo } from "./styles";

type propsType = {
  movies: any;
  setMovies: any;
  id?: string;
  refProp: any;
};

export default function index({ movies, id, refProp }: propsType) {
  const API_IMG = "http://image.tmdb.org/t/p/original/";

  return (
    <MovieQuery ref={refProp} id={id}>
      {movies.length != 0 && <QueryInfo>Search</QueryInfo>}
      <StyledGrid wrap="wrap" container columnSpacing={1}>
        {movies?.map(
          (movie) =>
            movie.poster_path && (
              <Grid item xs={4} md={3} lg={2} key={movie.id}>
                <MovieSectionContainer
                  movieId={movie.id}
                  src={
                    movie.poster_path
                      ? API_IMG + movie.poster_path
                      : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                  }
                  title={movie.title ? movie.title : "No title provided"}
                ></MovieSectionContainer>
              </Grid>
            )
        )}
        )
      </StyledGrid>
    </MovieQuery>
  );
}
