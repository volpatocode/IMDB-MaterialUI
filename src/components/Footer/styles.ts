import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";

export const Footer = styled(Box)`
  width: 100%;
  background: #000;
  margin-top: 3rem;
  padding: 3.5rem 0rem 3.5rem 0rem;
`;

export const FooterContent = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 4rem;
`;

export const WrapperContent = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  column-gap: 5.5rem;
`;

export const FooterStack = styled(Stack)``;

export const AnchorTitle = styled(Typography)`
  text-align: left;
  color: #f6f6f6;
  font-weight: 600;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
`;

export const FooterAnchor = styled.a`
  text-align: left;
  color: #eaebe5;
  font-weight: 400;
  font-size: 0.8rem;
  cursor: pointer;
  :hover {
    transition: 200ms ease;
    color: #ba0001;
  }
`;
