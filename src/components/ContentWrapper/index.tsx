import * as React from "react";
import MovieSection from "../../components/MovieSection";
import { ContentWrapper } from "./styles";

export type propsType = {};

export default function index({}: propsType) {
  return (
    <ContentWrapper>
      <MovieSection section="upcoming" />
      <MovieSection section="weekRated" />
      <MovieSection section="topRated" />
      <MovieSection section="popular" />
    </ContentWrapper>
  );
}
