import { Box } from "@mui/material";
import * as React from "react";
import {
  SimilarMovieContainer,
  SimilarMovieImage,
  BoxContent,
  BoxTitle,
  BoxInfo,
  BoxInfoLeft,
  BoxInfoRight,
  BoxOverview,
} from "./styles";

type propsType = {
  src: string;
  srcset: string;
  title: string;
  year: string;
  duration: string;
  overview: string;
  voteAv: number;
  alt?: string;
};

export default function index({
  src,
  srcset,
  title,
  year,
  duration,
  overview,
  voteAv,
  alt,
}: propsType) {
  return (
    <SimilarMovieContainer>
      <SimilarMovieImage src={src} srcSet={srcset} alt={alt} />
      <BoxContent>
        <BoxTitle>
          <h3>{title}</h3>
        </BoxTitle>
        <BoxInfo>
          <BoxInfoLeft>
            <h4>{year}</h4>
            <h4>{duration}</h4>
          </BoxInfoLeft>
          <BoxInfoRight>
            <h4>{voteAv}</h4>
          </BoxInfoRight>
        </BoxInfo>
        <BoxOverview>{overview}</BoxOverview>
      </BoxContent>
    </SimilarMovieContainer>
  );
}
