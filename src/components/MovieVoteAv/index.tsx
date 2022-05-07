import * as React from "react";
import { MovieVoteAv, VoteTypography } from "./styles";
import Rating from "@mui/material/Rating";

type propsType = {};

export default function index({}: propsType) {
  return (
    <MovieVoteAv>
      <Rating precision={0.25} size="large" value={1} max={1} readOnly/>
      <VoteTypography>
        7
      </VoteTypography>
    </MovieVoteAv>
  );
}
