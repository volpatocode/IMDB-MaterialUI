import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { propsType } from "./index";

export const CastCrewContainer = styled(Box)`
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 0.2rem;
`;

export const BoxSubtitle = styled(Box)`
  color: #c9c9c9;
  font-weight: bold;
  font-size: 0.7rem;
  text-align: left;
  padding: 0.2rem 0;
  @media (max-width: 650px) {
    font-size: 0.6rem;
  }
  @media (max-width: 450px) {
    font-size: 0.5rem;
  }
  @media (max-width: 300px) {
    font-size: 0.4rem;
  }
`;








