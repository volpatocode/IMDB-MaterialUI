import React, { useState } from "react";
import Appbar from "../components/Appbar";
import ContentWrapper from "../components/ContentWrapper";
import ShowcaseContainer from "../components/ShowcaseContainer";

type propsType = {};

export default function index({}: propsType) {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <Appbar movies={movies} setMovies={setMovies} page="index" />
      <ShowcaseContainer src="http://image.tmdb.org/t/p/original//gG9fTyDL03fiKnOpf2tr01sncnt.jpg"/>
      <ContentWrapper movies={movies} setMovies={setMovies} />
    </>
  );
}
