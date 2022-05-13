import * as React from "react";
import { SimilarMovie, BoxPoster, BoxInfo, BoxOverview } from "./styles";
import Grid from "@mui/material/Grid";

type propsType = {};

export default function index({}: propsType) {
  return (
    <SimilarMovie>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <BoxPoster></BoxPoster>
        <BoxInfo></BoxInfo>
        <BoxOverview></BoxOverview>
      </Grid>
    </SimilarMovie>
  );
}
