import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";

export const FooterCopy = styled(Box)`
  width: 100%;
`;

export const CopyWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 685px) {
    flex-direction: column;
  }
`;

export const Copyright = styled(Typography)`
  text-align: left;
  color: #919496;
  font-weight: 400;
  font-size: 0.7rem;
  @media (max-width: 685px) {
    margin-top: 1rem;
  }
`;

export const FooterCopyAnchor = styled.a`
  text-align: left;
  color: #919496;
  font-weight: 400;
  font-size: 0.7rem;
  cursor: pointer;
  :hover {
    transition: 200ms ease;
    color: #eaebe5;
  }
  @media (max-width: 685px) {
    text-align: center;
  }
`;

export const CopyStack = styled(Stack)`
  column-gap: 0.3rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 685px) {
    column-gap: 0.7rem;
  }
`;

export const HalfStack = styled(Stack)`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  @media (max-width: 645px) {
    flex-direction: column;
  }
`;
