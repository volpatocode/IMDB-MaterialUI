import * as React from "react";
import CardContent from "@mui/material/CardContent";
import { BoxTitle, MovieCard, CardImage, TitleTypography } from "./styles";
import MovieVoteAv from "../MovieVoteAv";
import Link from "next/link";

type propsType = {
  title: string;
  vote_average: string;
  poster_path: string;
  id: string;
};

export default function index({
  title,
  vote_average,
  poster_path,
  id,
}: propsType) {
  const API_IMG = "https://image.tmdb.org/t/p/original/";
  const movieId = `${id}`;

  return (
    <Link href={`/movies/movie?movie=${movieId}`}>
      <MovieCard>
        <CardContent>
          <BoxTitle>
            <TitleTypography component="h3">{title}</TitleTypography>
          </BoxTitle>
        </CardContent>
        <CardImage
          component="img"
          image={
            poster_path
              ? API_IMG + poster_path
              : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
          }
          alt={title + " poster"}
        />
        <CardContent>
          <MovieVoteAv
            voteAverage={vote_average ? vote_average : "No rating yet"}
          />
        </CardContent>
      </MovieCard>
    </Link>
  );
}
