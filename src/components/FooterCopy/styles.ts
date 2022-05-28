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
`;

export const Copyright = styled(Typography)`
  text-align: left;
  color: #919496;
  font-weight: 400;
  font-size: 0.7rem;
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
`;
