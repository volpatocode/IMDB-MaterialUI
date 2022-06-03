import React, { useEffect, useState } from "react";
import { movieDetailsType } from "../../types/services";
import { useRouter } from "next/router";
import useMovieStore from "../../stores/movieStore";

import BadgeGenre from "../../components/BadgeGenre";
import CastCrew from "../../components/CastCrew";
import Appbar from "../../components/Appbar";
import MovieSection from "../../components/MovieSection";
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
  ContainerDetails,
  StyledGrid,
  BoxWrapper,
} from "./styles";

export default function movie() {
  const API_IMG = "http://image.tmdb.org/t/p/original/";
  const router = useRouter();

  const [movieDetails, setMovieDetails] = useState({} as movieDetailsType);

  const { setSimilarMovies } = useMovieStore((state) => state);

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

  useEffect(() => {
    movieDetails.title && (document.title = `VMovies - ${movieDetails.title}`);
  }, [movieDetails]);

  console.log(router.query.movie);

  return (
    <>
      <MovieContainer
        backdrop_path={
          movieDetails.backdrop_path ? API_IMG + movieDetails.backdrop_path : ""
        }
      >
        <Appbar page="details" />
        <ContainerDetails>
          <StyledGrid>
            <BoxWrapper>
              <BoxTitle>
                <TitleTypography variant="h1">
                  {movieDetails.title
                    ? movieDetails.title
                    : "No title provided"}
                </TitleTypography>
              </BoxTitle>
              <BoxDetailsMovie>
                <DetailsTypography variant="h6">
                  {movieDetails.release_date
                    ? movieDetails.release_date.slice(0, 4)
                    : "No release date provided"}
                </DetailsTypography>
                <DetailsTypography variant="h6">
                  {movieDetails.runtime
                    ? movieDuration
                    : "No duration provided"}
                </DetailsTypography>
              </BoxDetailsMovie>
              <BoxDetailsGenre>
                {movieDetails?.genres?.map((genre) => (
                  <BadgeGenre key={genre.id} genre={genre.name} />
                ))}
              </BoxDetailsGenre>
              <BoxOverview>
                <OverviewTypography variant="h6">
                  {movieDetails.overview
                    ? movieDetails.overview
                    : "No overview provided"}
                </OverviewTypography>
              </BoxOverview>
              <BoxCastCrew>
                <CastCrew />
              </BoxCastCrew>
            </BoxWrapper>
            <MovieSection
              fetchFunction={() =>
                setSimilarMovies(router.query.movie as string)
              }
              section="similar"
              listener={router.query.movie as string}
            />
          </StyledGrid>
        </ContainerDetails>
      </MovieContainer>
    </>
  );
}
