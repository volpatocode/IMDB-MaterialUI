import * as React from "react";
import Appbar from "../components/Appbar";
import MovieContainer from "../components/MovieContainer";

type propsType = {};

export default function index({}: propsType) {
  return (
    <>
      <Appbar />
      <MovieContainer/>
    </>
  );
}
