import * as React from "react";
import {
  SimilarMovieContainer,
  SimilarMovieImage,
  BoxContent,
  BoxTitle,
  BoxInfo,
  BoxOverview,
  BoxYear,
} from "./styles";
import Link from "next/link";
import VoteAv from "../../components/VoteAv";

export type propsType = {
  src: string;
  title: string;
  year: string;
  overview: string;
  voteAv: string;
  key: string;
  movieId: string;
};

export default function index({
  src,
  title,
  year,
  overview,
  voteAv,
  key,
  movieId,
}: propsType) {
  return (
    <Link key={key} href={`/movies/movie?movie=${movieId}`}>
      <SimilarMovieContainer>
        <SimilarMovieImage src={src} />
        <BoxContent>
          <BoxTitle>
            <h3>{title}</h3>
          </BoxTitle>
          <BoxInfo>
            <VoteAv voteAv={voteAv} />
            <BoxYear>
              <h4>{year}</h4>
            </BoxYear>
          </BoxInfo>
          <BoxOverview>{overview}</BoxOverview>
        </BoxContent>
      </SimilarMovieContainer>
    </Link>
  );
}
