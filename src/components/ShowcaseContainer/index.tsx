import React, { useState, useEffect } from "react";
import {
  OpacityBottomProvider,
  ShowcaseContainer,
  BoxContent,
  BoxInfo,
  Title,
  Overview,
  BoxButtons,
  WatchButton,
  DetailsButton,
} from "./styles";
import { movieSectionType } from "../../types/services";
import { PaddingProvider } from "../ContentWrapper/styles";
import AdultWarning from "../AdultWarning";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export type propsType = {
  src?: any;
};

export default function index({}: propsType) {
  const API_IMG = "http://image.tmdb.org/t/p/original/";
  const [trendingMovies, setTrendingMovies] = useState<movieSectionType[]>([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=f04297956f564d66b4a51ff3da1c6c30"
    )
      .then((res) => res.json())
      .then((trending) => {
        setTrendingMovies(trending.results);
        console.log(trending);
      });
  }, []);

  return (
    <>
      {trendingMovies.slice(0, 1).map((movie) => (
        <ShowcaseContainer
          src={
            movie?.backdrop_path
              ? API_IMG + movie.backdrop_path
              : API_IMG + movie.poster_path
          }
          key={movie.id}
        >
          <PaddingProvider>
            <BoxContent>
              <BoxInfo>
                <Title>{movie.title ? movie.title : "No title provided"}</Title>
                {movie.adult === true && <AdultWarning />}
                <Overview>
                  {movie.overview ? movie.overview : "No overview provided"}
                </Overview>
              </BoxInfo>
              <BoxButtons>
                <WatchButton variant="text">
                  <PlayArrowIcon fontSize="large" />
                  Watch now
                </WatchButton>
                <DetailsButton variant="text">
                  <InfoOutlinedIcon fontSize="large" />
                  More details
                </DetailsButton>
              </BoxButtons>
            </BoxContent>
          </PaddingProvider>
          <OpacityBottomProvider />
        </ShowcaseContainer>
      ))}
    </>
  );
}
