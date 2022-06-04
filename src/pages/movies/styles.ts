import styled from "@emotion/styled";
import { movieDetailsType } from "../../types/services";
import { Typography, Box } from "@mui/material";

export const MovieContainer = styled.div<movieDetailsType>`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.backdrop_path}) no-repeat center center / cover;
  padding-bottom: 2rem;
`;

export const BoxMovieSection = styled.div`
  @media (max-width: 1200px) {
    margin-top: 5rem;
  }
  @media (min-width: 736px) {
    margin-top: 10rem;
  }
`;

export const ContainerDetails = styled.div`
  padding-top: 64px;
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
`;

export const StyledGrid = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
`;

export const OpacityProvider = styled(Box)`
  background-color: hsla(0, 0%, 0%, 0.99);
  height: 100%;
  width: 100%;
`;

export const BoxTitle = styled(Box)`
  @media (max-width: 736px) {
    text-align: center;
  }
`;

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
  @media (max-width: 736px) {
    text-align: center;
  }
`;

export const OverviewTypography = styled(Typography)`
  font-size: 1rem;
  color: #f6f6f6;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.1px;
`;

export const BoxCastCrew = styled(Box)`
  margin-top: 0.7rem;
  display: flex;
`;

export const BoxWrapper = styled(Box)`
  width: 45vw;
  @media (max-width: 736px) {
    width: 70vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  @media (max-width: 550px) {
    width: 90vw;
  }
`;

const MovieDetailsStyles = styled.div``;

export default MovieDetailsStyles;
