import * as React from "react";
import Appbar from "../../components/Appbar";
import { useEffect, useState } from "react";
import { movieDetailsType } from "../../types/services";
import { useRouter } from "next/router";
import { Container, Grid, Typography } from "@mui/material";
import {
  ContainerDetails,
  BoxDetails,
  BoxTitle,
  BoxOverview,
  MovieContainer,
  TitleTypography,
  OverviewTypography,
  DetailsTypography,
} from "./styles";

export default function movie() {
  const [movieDetails, setMovieDetails] = useState({} as movieDetailsType);
  const router = useRouter();
  const API_IMG = "http://image.tmdb.org/t/p/original/";
  const movieDuration = (movieDetails.runtime / 60).toFixed(1) + "hr";

  useEffect(() => {
    const movie = router.query.movie;
    movie &&
      fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=f04297956f564d66b4a51ff3da1c6c30`
      )
        .then((res) => res.json())
        .then((details) => {
          setMovieDetails(details);
        });
  }, [router]);

  if (!movieDetails.title) {
    return (
      <>
        <Appbar page="details" />
        <ContainerDetails>
          <BoxDetails>Wait until we find the best results...</BoxDetails>
        </ContainerDetails>
      </>
    );
  } else {
    return (
      <>
        <MovieContainer backdrop_path={API_IMG + movieDetails.backdrop_path} />
        <Appbar page="details" />
        <Container
          sx={{ paddingTop: "64px", position: "absolute", margin: "2rem" }}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <BoxTitle>
              <TitleTypography variant="h1">
                {movieDetails.title}
              </TitleTypography>
            </BoxTitle>
            <BoxDetails>
              <DetailsTypography variant="h6">
                A VMovies movie
              </DetailsTypography>
              <DetailsTypography variant="h6">
                {movieDuration}
              </DetailsTypography>
              <DetailsTypography variant="h6">
                {(movieDetails.release_date).slice(0, 4)}
              </DetailsTypography>
            </BoxDetails>
            <BoxOverview>
              <OverviewTypography variant="h6">
                {movieDetails.overview}
              </OverviewTypography>
            </BoxOverview>
          </Grid>
        </Container>
      </>
    );
  }
}
