import * as React from "react";
import { MovieQuery, StyledGrid, QueryInfo } from "./styles";
import MovieSectionContainer from "../MovieSectionContainer";
import { Grid } from "@mui/material";

type propsType = {
  movies: any;
  setMovies: any;
  id?: string;
};

export default function index({ movies, setMovies, id }: propsType) {
  const API_IMG = "http://image.tmdb.org/t/p/original/";

  return (
    movies.length != 0 && (
      <MovieQuery id={id}>
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
              )
          )}
          )
        </StyledGrid>
      </MovieQuery>
    )
  );
}
