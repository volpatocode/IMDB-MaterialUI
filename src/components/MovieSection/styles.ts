import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";

export const MovieSection = styled.div`
  width: 100%;
  padding: 16px 0px 16px 16px;

  @media (min-width: 600px) {
    padding: 16px 0px 16px 16px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  color: #f6f6f6;
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.5px;
  padding-bottom: 0.4rem;
`;

export const StyledStack = styled(Stack)`
  flex-wrap: nowrap;
  overflow-x: scroll;
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
