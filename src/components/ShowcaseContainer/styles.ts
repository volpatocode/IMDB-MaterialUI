import styled from "@emotion/styled";
import { propsType } from "./index";
import { Box, Button } from "@mui/material";

export const ShowcaseContainer = styled.div<Pick<propsType, "src">>`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.src}) no-repeat center center / cover;
`;

export const OpacityBottomProvider = styled.div`
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-image: linear-gradient(0deg, #0f0f0f, transparent);
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  color: #f6f6f6;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.5px;
  text-align: left;
  width: 90%;
  line-height: 3.7rem;
`;

export const Overview = styled.p`
  margin-top: 1.6rem;
  font-size: 0.9rem;
  color: #e5e5e5;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.05px;
  text-align: left;
  font-weight: 500;
  width: 95%;
  line-height: 1.3rem;
`;

export const BoxContent = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
`;

export const BoxInfo = styled(Box)`
  padding-top: 8rem;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const BoxButtons = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;

`;

export const WatchButton = styled(Button)`
  background-color:rgba(255,255,255, 1);
  text-transform: none;
  padding: 0.5rem 1rem;
  text-align: left;
  color: #000;
  font-weight: bold;
  box-shadow: none;
  font-size: 0.9rem;
  :hover {
    background-color: rgba(255,255,255, 0.8);
    transition: 100ms ease-in-out;
  }
`;

export const DetailsButton = styled(Button)`
  text-transform: none;
  background-color: rgba(109,109,110,1);
  text-align: left;
  padding: 0.5rem 1rem;
  color: #fff;
  box-shadow: none;
  font-weight: bold;
  font-size: 0.9rem;
  :hover {
    background: rgba(109,109,110,0.8);
    transition: 100ms ease-in-out;
  }
`;
