import * as React from "react";
import {
  SimilarMovieContainer,
  SimilarMovieImage,
  BoxContent,
  BoxTitle,
  BoxInfo,
  BoxOverview,
} from "./styles";
import Link from "next/link";
import VoteAv from "../../components/VoteAv";

type propsType = {
  src: string;
  srcset: string;
  title: string;
  year: string;
  overview: string;
  voteAv: string;
  alt?: string;
  key: string;
  movieId: string;
};

export default function index({
  src,
  srcset,
  title,
  year,
  overview,
  voteAv,
  alt,
  key,
  movieId
}: propsType) {
  return (
    <Link key={key} href={`/movies/movie?movie=${movieId}`}>
      <SimilarMovieContainer>
        <SimilarMovieImage src={src} srcSet={srcset} alt={alt} />
        <BoxContent>
          <BoxTitle>
            <h3>{title}</h3>
          </BoxTitle>
          <BoxInfo>
            <VoteAv voteAv={voteAv} />
            <h4>{year}</h4>
          </BoxInfo>
          <BoxOverview>{overview}</BoxOverview>
        </BoxContent>
      </SimilarMovieContainer>
    </Link>
  );
}
