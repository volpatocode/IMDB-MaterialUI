import styled from "@emotion/styled";
import { propsType } from "./index";

export const MovieYear = styled.div<propsType>`
  text-align: right;
  color: ${(props) => (props.year.length <= 3 ? "#000" : props.year)};
  font-size: ${(props) => (props.year.length <= 5 ? "0.7rem" : "0.4rem")};
  text-align: ${(props) => (props.year.length <= 3 ? "center" : "right")};
`;
