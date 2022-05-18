import * as React from "react";
import {
  MovieSectionContainer,
  MovieContainerImage,
  BoxContent,
  BoxTitle,
  BoxInfo,
  BoxYear,
} from "./styles";
import Link from "next/link";
import VoteAv from "../../components/VoteAv";

export type propsType = {
  src: string;
  title: string;
  year: string;
  voteAv: string;
  key: string;
  movieId: string;
};

export default function index({
  src,
  title,
  year,
  voteAv,
  key,
  movieId,
}: propsType) {
  return (
    <Link key={key} href={`/movies/movie?movie=${movieId}`}>
      <MovieSectionContainer>
        <MovieContainerImage src={src} />
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
        </BoxContent>
      </MovieSectionContainer>
    </Link>
  );
}
