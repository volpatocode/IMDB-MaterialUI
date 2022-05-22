import React, { useState } from "react";
import Appbar from "../components/Appbar";
import ContentWrapper from "../components/ContentWrapper";

type propsType = {};

export default function index({}: propsType) {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <Appbar movies={movies} setMovies={setMovies} page="index" />
      <ContentWrapper movies={movies} setMovies={setMovies} />
    </>
  );
}
