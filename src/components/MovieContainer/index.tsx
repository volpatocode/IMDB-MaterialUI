import * as React from "react";
import { MovieContainer } from "./styles";
import MovieCard from "../MovieCard";
import Grid from "@mui/material/Grid";

type propsType = {};

export default function index({}: propsType) {
  return (
    <MovieContainer>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4}>
          <MovieCard />
        </Grid>
        <Grid item xs={4}>
          <MovieCard />
        </Grid>
        <Grid item xs={4}>
          <MovieCard />
        </Grid>
      </Grid>
    </MovieContainer>
  );
}
