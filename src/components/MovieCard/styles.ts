import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const MovieCard = styled(Card)`
  background-color: #000;
  border-radius: 10px;
  cursor: pointer;
  transition: 200ms;
  :hover {
    transform: scale(1.01);
  }
`;

export const BoxTitle = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f6f6f6;
`;

export const CardImage = styled(CardMedia)`
  width: 90%;
  margin: 0 auto;
`;

export const TitleTypography = styled(Typography)`
  font-size: 1.5rem;
`;
