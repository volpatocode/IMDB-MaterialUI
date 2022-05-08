import * as React from "react";
import Appbar from "../components/Appbar";
import MovieContainer from "../components/MovieContainer";
import { useState } from "react";

type propsType = {};

export default function index({}: propsType) {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <Appbar page="index" movies={movies} setMovies={setMovies}/>
      <MovieContainer movies={movies} setMovies={setMovies}/>
    </>
  );
}
