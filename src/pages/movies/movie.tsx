import * as React from "react";
import Appbar from "../../components/Appbar";
import { useEffect, useState } from "react";
import { movieDetailsType } from "../../types/services";
import { useRouter } from "next/router";
import { ContainerDetails, BoxDetails, CardImage, BoxBackdrop } from "./styles";

export default function movie({
  title,
  genres,
  runtime,
  backdrop_path,
  overview,
  vote_average,
  release_date,
}: movieDetailsType) {
  const [movieDetails, setMovieDetails] = useState({} as movieDetailsType);
  const router = useRouter();
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
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
        <Appbar page="details" />
        <BoxBackdrop>
          <CardImage
            component="img"
            image={API_IMG + movieDetails.backdrop_path}
          />
        </BoxBackdrop>
      </>
    );
  }
}