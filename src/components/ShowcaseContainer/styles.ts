import styled from "@emotion/styled";
import { propsType } from "./index";
import { Box } from "@mui/material";

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
