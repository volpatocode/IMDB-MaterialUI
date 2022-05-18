import * as React from "react";
import { MovieSection, StyledStack, SectionTitle } from "./styles";
import { useState, useEffect } from "react";
import MovieSectionContainer from "../MovieSectionContainer";

type propsType = {
  section: "upcoming" | "topRated" | "popular" | "weekRated";
};

export default function index({ section }: propsType) {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [weekRatedMovies, setWeekRatedMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const API_IMG = "http://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setUpcomingMovies(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=f04297956f564d66b4a51ff3da1c6c30"
    )
      .then((res) => res.json())
      .then((data) => {
        setWeekRatedMovies(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setTopRatedMovies(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularMovies(data.results);
      });
  }, []);

  if (section === "upcoming")
    return (
      <MovieSection section={section}>
        <SectionTitle> Upcoming</SectionTitle>
        <StyledStack direction="row" spacing={1}>
          {upcomingMovies?.map((movie) => (
            <MovieSectionContainer
              movieId={movie.id}
              src={
                movie.poster_path
                  ? API_IMG + movie.poster_path
                  : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
              }
              key={movie.id}
              title={movie.title ? movie.title : "No title provided"}
              year={
                movie.release_date
                  ? movie.release_date.slice(0, 4)
                  : "No year provided"
              }
              voteAv={
                movie.vote_average
                  ? movie.vote_average.toString().slice(0, 3)
                  : "No rating provided"
              }
            ></MovieSectionContainer>
          ))}
        </StyledStack>
      </MovieSection>
    );
  else if (section === "weekRated")
    return (
      <MovieSection section={section}>
        <SectionTitle>Week Trending</SectionTitle>
        <StyledStack direction="row" spacing={1}>
          {weekRatedMovies?.map((movie) => (
            <MovieSectionContainer
              movieId={movie.id}
              src={
                movie.poster_path
                  ? API_IMG + movie.poster_path
                  : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
              }
              key={movie.id}
              title={movie.title ? movie.title : "No title provided"}
              year={
                movie.release_date
                  ? movie.release_date.slice(0, 4)
                  : "No year provided"
              }
              voteAv={
                movie.vote_average
                  ? movie.vote_average.toString().slice(0, 3)
                  : "No rating provided"
              }
            ></MovieSectionContainer>
          ))}
        </StyledStack>
      </MovieSection>
    );
  else if (section === "topRated")
    return (
      <MovieSection section={section}>
        <SectionTitle>Top Rated</SectionTitle>
        <StyledStack direction="row" spacing={1}>
          {topRatedMovies?.map((movie) => (
            <MovieSectionContainer
              movieId={movie.id}
              src={
                movie.poster_path
                  ? API_IMG + movie.poster_path
                  : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
              }
              key={movie.id}
              title={movie.title ? movie.title : "No title provided"}
              year={
                movie.release_date
                  ? movie.release_date.slice(0, 4)
                  : "No year provided"
              }
              voteAv={
                movie.vote_average
                  ? movie.vote_average.toString().slice(0, 3)
                  : "No rating provided"
              }
            ></MovieSectionContainer>
          ))}
        </StyledStack>
      </MovieSection>
    );
  else if (section === "popular")
    return (
      <MovieSection section={section}>
        <SectionTitle>Popular</SectionTitle>
        <StyledStack direction="row" spacing={1}>
          {popularMovies?.map((movie) => (
            <MovieSectionContainer
              movieId={movie.id}
              src={
                movie.poster_path
                  ? API_IMG + movie.poster_path
                  : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
              }
              key={movie.id}
              title={movie.title ? movie.title : "No title provided"}
              year={
                movie.release_date
                  ? movie.release_date.slice(0, 4)
                  : "No year provided"
              }
              voteAv={
                movie.vote_average
                  ? movie.vote_average.toString().slice(0, 3)
                  : "No rating provided"
              }
            ></MovieSectionContainer>
          ))}
        </StyledStack>
      </MovieSection>
    );
}
