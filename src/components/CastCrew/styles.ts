import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

export const CastCrew = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const BoxModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  background-color: #000;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 1rem;
`;

export const GridCast = styled(Grid)`
  margin-bottom: 1.5rem;
`;

export const GridCrew = styled(Grid)`
`;

export const GridTitle = styled.h2`
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

export const ButtonOutlined = styled(Button)`
  text-transform: none;
  background-color: rgba(0, 0, 0, 0.18);
  text-align: left;
  color: #eaebe5;
  font-weight: 600;
  box-shadow: none;
  :hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;
