import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export const MovieSection = styled.div`
  width: 100%;
  padding: 8px 16px 8px 16px;
  transition: 0.2s ease;
  @media (min-width: 600px) {
    padding: 24px 36px 24px 36px;
    transition: 0.2s ease;
  }
  height: 100%;
`;

export const SectionBoxInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionInfo = styled.h2`
  font-size: 1.2rem;
  color: #f6f6f6;
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.5px;
  padding-bottom: 0.4rem;
`;

export const ShowMoreButton = styled(Button)`
  text-transform: none;
  text-align: left;
  color: #eaebe5;
  font-weight: 600;
  box-shadow: none;
  font-size: 0.8rem;
  :hover {
    background: rgba(0, 0, 0, 0.25);
    transition: 200ms ease-in-out;
  }
`;

export const StyledGrid = styled(Grid)`
  overflow-y: hidden;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 12px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;
