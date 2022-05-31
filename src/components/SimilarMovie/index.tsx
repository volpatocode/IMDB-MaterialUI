import * as React from "react";
import { useEffect, useState } from "react";
import { SimilarMovie, StyledStack } from "./styles";
import { similarMoviesType } from "../../types/services";
import SimilarMovieContainer from "../SimilarMovieContainer";
import { useRouter } from "next/router";
import { StyledGrid } from "../MovieSection/styles";
import Grid from "@mui/material/Grid";
import MovieSectionContainer from "../MovieSectionContainer";

type propsType = {
  movie: any;
};

export default function index({ movie }: propsType) {
  const [similarMovies, setSimilarMovies] = useState<similarMoviesType[]>([]);
  const API_IMG = "http://image.tmdb.org/t/p/original/";
  const router = useRouter();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie}/similar?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setSimilarMovies(data.results);
        console.log(data.results);
      });
  }, [router]);

  return (
    <SimilarMovie>
      <StyledGrid wrap="wrap" container columnSpacing={1} rowSpacing={1}>
        {similarMovies?.slice(0, 6).map((movie) => (
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
    </SimilarMovie>
  );
}

