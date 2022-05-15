import styled from "@emotion/styled";
import { movieDetailsType } from "../../types/services";
import { Typography, Box, Container, Button } from "@mui/material";

export const MovieContainer = styled.div<movieDetailsType>`
  width: 100%;
  position: absolute;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.backdrop_path}) no-repeat center center / cover;
`;

export const ContainerDetails = styled.div`
  padding-top: 64px;
  width: 100%;
  margin: 2.5rem;
  position: absolute;
`;

export const OpacityProvider = styled(Box)`
  background-color: hsla(0, 0%, 0%, 0.99);
  height: 100%;
  width: 100%;
`;

export const BoxTitle = styled(Box)`
  max-width: 40%;
`;

export const TitleTypography = styled(Typography)`
  font-size: 3rem;
  color: #f6f6f6;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.5px;
`;

export const BoxDetailsMovie = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  flex-direction: row;
  max-width: 60%;
  margin-top: 0.2rem;
`;

export const BoxDetailsGenre = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  flex-direction: row;
  max-width: 40%;
  flex-wrap: wrap;
  margin: 0.7rem 0 1.2rem 0;
`;

export const DetailsTypography = styled(Typography)`
  font-size: 0.8rem;
  color: #f6f6f6;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.05px;
`;

export const BoxOverview = styled(Box)`
  max-width: 40%;
  text-align: left;
`;

export const OverviewTypography = styled(Typography)`
  font-size: 1rem;
  color: #f6f6f6;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.1px;
`;

export const BoxCastCrew = styled(Box)`
  max-width: 60%;
  margin-top: 0.7rem;
  max-height: 500px;
  flex-grow: 1;
  display: flex;
`;

export const BoxSimilarMovie = styled(Box)`
  margin-top: 0.7rem;
  display: flex;
  width: 100%;
  position: fixed;
  bottom: calc(0% + 2.5rem);
`;
