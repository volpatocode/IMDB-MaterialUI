import * as React from "react";
import Appbar from "../components/Appbar";
import MovieSection from "../components/MovieSection";

type propsType = {};

export default function index({}: propsType) {
  return (
    <>
      <Appbar page="index" />

      <MovieSection section="popular" />
      <MovieSection section="weekRated" />
      <MovieSection section="topRated" />
      <MovieSection section="upcoming" />
    </>
  );
}
