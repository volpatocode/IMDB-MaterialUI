import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export const SimilarMovie = styled(Box)`
  width: 100%;
  max-height: 250px;
`;

export const StyledStack = styled(Stack)`
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
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
