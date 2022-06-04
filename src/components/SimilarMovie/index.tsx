import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useMovieStore from "../../stores/movieStore";

import Grid from "@mui/material/Grid";

import { SimilarMovie } from "./styles";
import { StyledGrid } from "../MovieSection/styles";
import MovieSectionContainer from "../MovieSectionContainer";

type propsType = {};

export default function SimilarMovieC({}: propsType) {
  const API_IMG = "http://image.tmdb.org/t/p/original/";
  const router = useRouter();

  const { similarMovies, setSimilarMovies } = useMovieStore((state) => state);

  useEffect(() => {
    setSimilarMovies(router.query.movie as string);
  }, [router]);

  return (
    <SimilarMovie>
      <StyledGrid wrap="wrap" container columnSpacing={1} rowSpacing={1}>
        {similarMovies?.slice(0, 8).map((movie) => (
          <Grid item xs={4} md={4} lg={3} key={movie.id}>
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
    </SimilarMovie>
  );
}
