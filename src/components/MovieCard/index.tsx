import * as React from "react";
import CardContent from "@mui/material/CardContent";
import { BoxTitle, MovieCard, CardImage, TitleTypography } from "./styles";
import MovieVoteAv from "../MovieVoteAv";

type propsType = {};

export default function index({}: propsType) {
  return (
    <MovieCard>
      <CardContent>
        <BoxTitle>
          <TitleTypography component="h3">
            Lizard
          </TitleTypography>
        </BoxTitle>
      </CardContent>
      <CardImage
        component="img"
        image="https://image.tmdb.org/t/p/w500//6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
      />
      <CardContent>
        <MovieVoteAv/>
      </CardContent>
    </MovieCard>
  );
}
