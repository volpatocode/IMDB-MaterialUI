import * as React from "react";
import { useEffect, useState } from "react";
import { SimilarMovie, StyledStack } from "./styles";
import { similarMoviesType } from "../../types/services";
import { Stack } from "@mui/material";
import SimilarMovieContainer from "../SimilarMovieContainer";

type propsType = {
  movie: any;
};

export default function index({ movie }: propsType) {
  const [similarMovies, setSimilarMovies] = useState([] as similarMoviesType);
  const API_IMG = "http://image.tmdb.org/t/p/original/";

  function timeConvert() {
    var num = similarMovies.runtime;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hour(s) and " + rminutes + " minute(s).";
  }

  const movieDuration = timeConvert();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie}/similar?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setSimilarMovies(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <SimilarMovie>
      <StyledStack direction="row" spacing={2}>
        {similarMovies?.map((movie) => (
          <SimilarMovieContainer
            src={
              movie.backdrop_path
                ? API_IMG + movie.backdrop_path
                : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
            }
            srcset={
              movie.backdrop_path
                ? API_IMG + movie.backdrop_path
                : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
            }
            key={movie.id}
            alt={movie.title ? movie.title : "No title provided"}
            title={movie.title ? movie.title : "No title provided"}
            year={
              movie.release_date
                ? movie.release_date.slice(0, 4)
                : "No year provided"
            }
            duration={movieDuration}
            voteAv={
              movie.vote_average ? movie.vote_average : "No rating provided"
            }
            overview={movie.overview ? movie.overview : "No overview provided"}
          ></SimilarMovieContainer>
        ))}
      </StyledStack>
    </SimilarMovie>
  );
}
