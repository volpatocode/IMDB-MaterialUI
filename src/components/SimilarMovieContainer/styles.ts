import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { propsType } from "./index";

export const SimilarMovieContainer = styled(Box)`
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 250px;
  cursor: pointer;
  transition: transform 200ms;
  :hover {
    transform: scale(0.99);
  }
`;

export const SimilarMovieImage = styled.div<Pick<propsType, "src">>`
  width: 200px;
  height: 115px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.src}) no-repeat center center / cover;
`;

export const BoxContent = styled(Box)`
  background: #2f2f2f;
  height: 130px;
  padding: 0.6rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const BoxTitle = styled(Box)`
  color: #f6f6f6;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-align: left;
  font-size: 0.7rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 35px;
`;

export const BoxInfo = styled(Box)`
  color: #c9c9c9;
  font-weight: bold;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.2rem 0;
`;

export const BoxOverview = styled(Box)`
  color: #c9c9c9;
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  font-size: 0.6rem;
`;
