import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";

export const MovieQuery = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
`;

export const QueryInfo = styled.h2`
  font-size: 1.2rem;
  color: #f6f6f6;
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.5px;
  padding-bottom: 0.4rem;
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
