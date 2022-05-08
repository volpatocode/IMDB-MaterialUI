import * as React from "react";
import { MovieVoteAv, VoteTypography } from "./styles";
import Rating from "@mui/material/Rating";

type propsType = {
  voteAverage: string;
};

export default function index({voteAverage}: propsType) {
  return (
    <MovieVoteAv>
      <Rating precision={0.25} size="large" value={1} max={1} readOnly/>
      <VoteTypography>
        {voteAverage}
      </VoteTypography>
    </MovieVoteAv>
  );
}
