import styled from "@emotion/styled";
import { propsType } from "./index";

export const VoteAv = styled.div<propsType>`
  background-color: ${(props) => {
    if (props.voteAv) {
      if (props.voteAv <= 10 && props.voteAv >= 7) {
        return "#32CD32";
      } else if (props.voteAv <= 6.9 && props.voteAv >= 4) {
        return "#FFAE11";
      } else if (props.voteAv <= 3.9 && props.voteAv >= 0) {
        return "#DC143C";
      }
    }
  }};

  p {
    color: ${(props) => (props.voteAv.length <= 3 ? "#000" : props.voteAv)};
    font-size: ${(props) => (props.voteAv.length <= 3 ? "0.8rem" : "0.4rem")};;
  }
  padding:${(props) => (props.voteAv.length <= 3 ? "5px" : "0")};;
  border-radius: 5px;
  min-width: 28px;
  text-align: ${(props) => (props.voteAv.length <= 3 ? "center" : "left")};
`;
