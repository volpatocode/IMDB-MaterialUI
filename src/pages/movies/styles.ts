import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";

export const ContainerDetails = styled(Container)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const BoxDetails = styled(Box)`
  background-color: hsla(0, 0%, 0%, 0.8);
  border-radius: 0.25rem;
  min-width: 65%;
  min-height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f6f6f6;
  font-size: 2rem;
`;

export const CardImage = styled(CardMedia)`
  width: 100%;
  opacity: 20%;
`;

export const BoxBackdrop = styled(Box)`
  background-color: hsla(0, 0%, 0%, 0.99);
`

