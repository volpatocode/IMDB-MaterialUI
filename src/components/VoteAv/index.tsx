import * as React from "react";
import { VoteAv } from "./styles";

export type propsType = {
  voteAv: any;
};

export default function index(props: propsType) {
  const { voteAv } = props;

  return (
    <VoteAv {...props}>
      <p>{voteAv}</p>
    </VoteAv>
  );
}
