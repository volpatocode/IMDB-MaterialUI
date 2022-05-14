import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Portal from "@mui/base/Portal";

export const CastCrew = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const ImageListStyled = styled(ImageList)`
  height: 280px;
  width: 200px;
  overflow-x: hidden;
`;

export const ImageListItemStyle = styled(ImageListItemBar)`
  color: #f6f6f6;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.2px;
`;

export const ImageListItemsStyled = styled(ImageListItem)`
  width: 100%;

  img {
    max-height: 230px;
    image-rendering: optimizeQuality;
    object-fit: cover;
    max-width: 200px;
  }
`;

export const TabPanelStyled = styled(TabPanel)`
  padding: 0;
  background: #262626;
`;

export const TabStyled = styled(Tab)`
  flex-grow: 1;
  color: #f6f6f6;
  text-transform: none;
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

export const StyledPortal = styled(Portal)`
  display: flex;
  flex-direction: column;
`;
