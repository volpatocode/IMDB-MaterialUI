import styled from "@emotion/styled";
import { movieDetailsType } from "../../types/services";
import Button from "@mui/material/Button";

export const MovieContainer = styled.div<movieDetailsType>`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.backdrop_path}) no-repeat center center / cover;
`;

export const ShowMoreButton = styled(Button)`
  text-transform: none;
  text-align: left;
  color: #eaebe5;
  font-weight: 600;
  box-shadow: none;
  font-size: 0.9rem;
  background-color: #f80000;
  :hover {
    background-color: #ba0001;
    transition: 200ms ease;
  }
  width: 100%;
  margin-top: 1rem;
`;
