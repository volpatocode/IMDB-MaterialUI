import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";

export const Footer = styled(Box)`
  width: 100%;
  background: #000;
  padding: 2rem 0rem 3.5rem 0rem;
`;

export const FooterContent = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 2rem;
  justify-content: space-between;
  @media (max-width: 645px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WrapperContent = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  column-gap: 3rem;
  @media (max-width: 645px) {
    justify-content: space-between;
    margin-top: 1rem;
  }
`;

export const FooterLogo = styled(Typography)`
  text-transform: none;
  background-color: none;
  text-align: left;
  color: #f80000;
  box-shadow: none;
  font-weight: bolder;
  font-size: 2rem;
  padding: 0;
  cursor: pointer;
`;

export const WrapperLogo = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 645px) {
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

export const FooterStack = styled(Stack)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  @media (max-width: 645px) {
    justify-content: center;
    align-items: center;
  }
`;

export const FirstStack = styled(Stack)`
  flex-direction: row;
  column-gap: 3rem;
  @media (max-width: 905px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`;

export const SecondStack = styled(Stack)`
  flex-direction: row;
  column-gap: 3rem;
  @media (max-width: 905px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`;

export const SocialStack = styled(Stack)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  @media (max-width: 645px) {
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const AnchorTitle = styled(Typography)`
  text-align: left;
  color: #f6f6f6;
  font-weight: 600;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  letter-spacing: 0.8px;
  @media (max-width: 645px) {
    text-align: center;
  }
`;

export const FooterAnchor = styled.a`
  text-align: left;
  color: #eaebe5;
  font-weight: 400;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  :hover {
    transition: 200ms ease;
    color: #ba0001;
  }

  @media (max-width: 645px) {
    text-align: center;
  }
`;
