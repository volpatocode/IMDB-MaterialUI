import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const CastCrew = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
`;

export const ImageListStyled = styled(ImageList)`
  height: 270px;
  width: calc(fit-content);
`;

export const ImageListItemStyle = styled(ImageListItemBar)`
  color: #f6f6f6;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const ImageListItemsStyled = styled(ImageListItem)`
  width: 150px;

  img{
      max-height: 150px;
      image-rendering: optimizeQuality;
        object-fit: cover;
  }
`;
