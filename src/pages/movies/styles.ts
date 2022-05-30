import styled from "@emotion/styled";
import { movieDetailsType } from "../../types/services";
import { Typography, Box } from "@mui/material";

export const MovieContainer = styled.div<movieDetailsType>`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.backdrop_path}) no-repeat center center / cover;
`;

export const ContainerDetails = styled.div`
  padding-top: 64px;
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: stretch;

  @media (min-width: 300px) {
    padding: 0 0.5rem 0 0.5rem;
  }
  @media (min-width: 600px) {
    padding: 0 1rem 0 1rem;
  }
  @media (min-width: 1200px) {
    padding: 0 3.5rem 0 3.5rem;
    transition: 0.2s ease;
  }
`;

export const StyledGrid = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const OpacityProvider = styled(Box)`
  background-color: hsla(0, 0%, 0%, 0.99);
  height: 100%;
  width: 100%;
`;

export const BoxTitle = styled(Box)``;

export const TitleTypography = styled(Typography)`
  font-size: 3rem;
  color: #f6f6f6;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.5px;
  @media (max-width: 310px) {
    font-size: 2.3rem;
  }
`;

export const BoxDetailsMovie = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  flex-direction: row;
  margin-top: 0.2rem;
`;

export const BoxDetailsGenre = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  flex-direction: row;
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
  text-align: left;
`;

export const OverviewTypography = styled(Typography)`
  font-size: 1rem;
  color: #f6f6f6;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.1px;
`;

export const BoxCastCrew = styled(Box)`
  margin-top: 0.7rem;
  max-height: 500px;
  flex-grow: 1;
  display: flex;
`;

export const BoxSimilarMovie = styled(Box)`
  margin-top: 0.7rem;
  display: flex;
  width: 100%;
`;

export const BoxWrapper = styled(Box)`
  width: 40vw;
  @media (max-width: 1450px) {
    width: 50vw;
  }
  @media (max-width: 720px) {
    width: 70vw;
  }
  @media (max-width: 515px) {
    width: 80vw;
  }
  @media (max-width: 310px) {
    width: 75vw;
  }
`;
