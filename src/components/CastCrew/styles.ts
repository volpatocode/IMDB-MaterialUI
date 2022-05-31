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
  width: 90vw;
  height: 90vh;
  background-color: #0f0f0f;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 1rem 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const BoxCast = styled(Box)`
  width: 100%;
  height: 45%;
`;

export const BoxCrew = styled(Box)`
  width: 100%;
  height: 45%;
`;

export const GridCast = styled(Grid)`
  width: 100%;
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  display: flex;
  justify-self: flex-start;
`;

export const GridCrew = styled(Grid)`
  width: 100%;
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  display: flex;
  justify-items: flex-end;
`;

export const GridTitle = styled.h2`
  font-size: 1.3rem;
  color: #f6f6f6;
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.5px;
  text-align: left;
  margin: 0.3rem 0;
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
