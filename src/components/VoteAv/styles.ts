import styled from "@emotion/styled";
import { propsType } from "./index";

export const VoteAv = styled.div<propsType>`
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

  p {
    color: ${(props) => (props.voteAv.length <= 3 ? "#000" : props.voteAv)};
  }
  padding: 5px;
  border-radius: 5px;
`;
