import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const MenuNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  display: none;
  @media (max-width: 1020px) {
    display: flex;
  }
`;

export const TextNavigation = styled(Typography)`
  text-transform: none;
  text-align: left;
  color: #e5e5e5;
  font-weight: 600;
  font-size: 0.75rem;
  @media (max-width: 500px) {
    display: none;
  }
`;
