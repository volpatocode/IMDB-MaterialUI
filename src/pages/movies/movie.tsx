import * as React from "react";
import Appbar from "../../components/Appbar";
import { useEffect, useState } from "react";
import { movieDetailsType } from "../../types/services";
import { useRouter } from "next/router";
import {
  ContainerDetails,
  BoxDetails,
  MovieContainer,
  OpacityProvider,
} from "./styles";

export default function movie({
  title,
  genres,
  runtime,
  backdrop_path,
  overview,
  vote_average,
  release_date
}: movieDetailsType) {
  const [movieDetails, setMovieDetails] = useState({} as movieDetailsType);
  const router = useRouter();
  const API_IMG = "http://image.tmdb.org/t/p/original/"
  const movieDuration = (movieDetails.runtime / 60).toFixed(1);
  // const movieYear = (movieDetails.release_date).slice(-4);

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
        <MovieContainer backdrop_path={API_IMG + movieDetails.backdrop_path}>
            <Appbar page="details" />
        </MovieContainer>
      </>
    );
  }
}
