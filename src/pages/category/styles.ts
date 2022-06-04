import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const CategoryStyles = styled.div``;

export const ShowMoreButton = styled(Button)`
  text-transform: none;
  text-align: left;
  color: #eaebe5;
  font-weight: 600;
  box-shadow: none;
  font-size: 0.9rem;
  background-color: #f80000;
  :hover {
    background-color: #ba0001;
    transition: 200ms ease;
  }
  width: 100%;
  margin-top: 1rem;
`;

export default CategoryStyles;
