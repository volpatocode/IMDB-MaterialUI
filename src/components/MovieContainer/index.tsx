import * as React from "react";
import { MovieContainer } from "./styles";
import MovieCard from "../MovieCard";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";

type propsType = {
};

export default function index({}: propsType) {

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f04297956f564d66b4a51ff3da1c6c30"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <MovieContainer>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {movies?.map((movieReq) => (
          <Grid key={movieReq.id} item xs={4} lg={4} md={2} sm={4}>
            <MovieCard {...movieReq} />
          </Grid>
        ))}
      </Grid>
    </MovieContainer>
  );
}
