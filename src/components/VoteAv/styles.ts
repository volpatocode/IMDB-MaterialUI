import styled from "@emotion/styled";
import { propsType } from "./index";

export const VoteAv = styled.div<propsType>`
  /* background-color: ${(props) => {
    switch (props.voteAv) {
      case props.voteAv <= 10 && props.voteAv >= 7:
        return "green";
      case props.voteAv <= 6.9 && props.voteAv >= 4:
        return "yellow";
      case props.voteAv <= 3.9 && props.voteAv >= 0:
        return "red";
      default:
        "grey";
    }
  }}; */

  background-color: ${(props) => {
    if (props.voteAv) {
      if (props.voteAv <= 10 && props.voteAv >= 7) {
        return "#32CD32";
      } else if (props.voteAv <= 6.9 && props.voteAv >= 4) {
        return "#FFD700";
      } else if (props.voteAv <= 3.9 && props.voteAv >= 0) {
        return "#DC143C";
      }
    }
  }};

  p{
    color: #000;
  }
  padding: 5px;
  border-radius: 5px;
`;
