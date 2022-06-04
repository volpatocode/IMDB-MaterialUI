import React, { useState, useEffect } from "react";
import ContentWrapper from "../components/ContentWrapper";
import ShowcaseContainer from "../components/ShowcaseContainer";

type propsType = {};

export default function Index({}: propsType) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    document.title = "VMovies";
  }, []);

  return (
    <>
      <ShowcaseContainer/>
      <ContentWrapper movies={movies} setMovies={setMovies} />
    </>
  );
}
