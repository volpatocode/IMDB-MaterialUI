import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const MovieSectionContainer = styled(Box)`
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  transition: transform 200ms;
  :hover {
    transform: scale(0.99);
  }
  padding: 0.2rem;
`;

export const MovieContainerImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 2px;
`;

export const BoxImage = styled(Box)``;

export const BoxContent = styled(Box)`
  background: transparent;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const BoxTitle = styled(Box)`
  color: #f6f6f6;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-align: left;
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  :hover {
    color: #ba0001;
    transition: 0.2s ease;
  }
  @media (max-width: 650px) {
    font-size: 0.8rem;
  }
  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
  @media (max-width: 300px) {
    font-size: 0.6rem;
  }
`;
