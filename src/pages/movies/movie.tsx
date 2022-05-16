import * as React from "react";
import { useEffect, useState } from "react";
import { movieDetailsType } from "../../types/services";
import { useRouter } from "next/router";
import {
  BoxTitle,
  BoxOverview,
  MovieContainer,
  TitleTypography,
  OverviewTypography,
  DetailsTypography,
  BoxDetailsMovie,
  BoxDetailsGenre,
  BoxCastCrew,
  BoxSimilarMovie,
  ContainerDetails,
  StyledGrid,
  BoxWrapper,
} from "./styles";
import BadgeGenre from "../../components/BadgeGenre";
import CastCrew from "../../components/CastCrew";
import SimilarMovie from "../../components/SimilarMovie";
import Appbar from "../../components/Appbar";

export default function movie() {
  const [movieDetails, setMovieDetails] = useState({} as movieDetailsType);
  const router = useRouter();
  const API_IMG = "http://image.tmdb.org/t/p/original/";
  const movieDuration = timeConvert();

  function timeConvert() {
    var num = movieDetails.runtime;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hour(s) and " + rminutes + " minute(s).";
  }

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
        <MovieContainer backdrop_path={movieDetails.backdrop_path ? API_IMG + movieDetails.backdrop_path : ""}>
        <Appbar page="details" />
        <ContainerDetails>
          <StyledGrid>
            <BoxWrapper>
              <BoxTitle>
                <TitleTypography variant="h1">
                  {movieDetails.title ? movieDetails.title : "No title provided"}
                </TitleTypography>
              </BoxTitle>
              <BoxDetailsMovie>
                <DetailsTypography variant="h6">
                  {movieDetails.release_date ? movieDetails.release_date.slice(0, 4) : "No release date provided"}
                </DetailsTypography>
                <DetailsTypography variant="h6">
                  {movieDetails.runtime ? movieDuration : "No duration provided"}
                </DetailsTypography>
              </BoxDetailsMovie>
              <BoxDetailsGenre>
                {movieDetails?.genres?.map((genre) => (
                  <BadgeGenre key={genre.id} genre={genre.name} />
                ))}
              </BoxDetailsGenre>
              <BoxOverview>
                <OverviewTypography variant="h6">
                  {movieDetails.overview ? movieDetails.overview : "No overview provided"}
                </OverviewTypography>
              </BoxOverview>
              <BoxCastCrew>
                <CastCrew movie={movieDetails.id} />
              </BoxCastCrew>
            </BoxWrapper>
            <BoxSimilarMovie>
              <SimilarMovie movie={movieDetails.id} />
            </BoxSimilarMovie>
          </StyledGrid>
        </ContainerDetails>
        </MovieContainer>
      </>
    );
  }
}
