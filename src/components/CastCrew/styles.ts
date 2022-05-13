import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";

export const CastCrew = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
`;

export const ImageListStyled = styled(ImageList)`
  height: 270px;
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
