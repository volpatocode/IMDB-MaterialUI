import * as React from "react";
import Appbar from "../../components/Appbar";
import { useEffect, useState } from "react";
import { movieDetailsType } from "../../types/services";
import { useRouter } from "next/router";
import { Container, Grid } from "@mui/material";
import {
  BoxTitle,
  BoxOverview,
  MovieContainer,
  TitleTypography,
  OverviewTypography,
  DetailsTypography,
  BoxDetailsMovie,
  BoxDetailsGenre,
} from "./styles";
import BadgeGenre from "../../components/BadgeGenre";

export default function movie() {
  const [movieDetails, setMovieDetails] = useState({} as movieDetailsType);
  const router = useRouter();
  const API_IMG = "http://image.tmdb.org/t/p/original/";

  function timeConvert() {
    var num = movieDetails.runtime;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return (
      rhours + " hour(s) and " + rminutes + " minute(s)."
    );
  }

  const movieDuration = timeConvert();

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
            <BoxDetailsMovie>
              <DetailsTypography variant="h6">{movieDuration}</DetailsTypography>
              <DetailsTypography variant="h6">
                {movieDetails.release_date.slice(0, 4)}
              </DetailsTypography>
            </BoxDetailsMovie>
            <BoxDetailsGenre>
              {movieDetails?.genres?.map((genre) => (
                <BadgeGenre key={genre.id} genre={genre.name} />
              ))}
            </BoxDetailsGenre>
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
