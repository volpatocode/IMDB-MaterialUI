import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { propsType } from "./index";
import MenuItem from "@mui/material/MenuItem";
import ListIconItem from "@mui/material/ListItemIcon";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },

  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#f6f6f6",
  maxHeight: "30px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "0ch",
    cursor: "pointer",
    "&:focus": {
      width: "7ch",
      cursor: "text",
    },
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      cursor: "pointer",
      "&:focus": {
        width: "30ch",
        cursor: "text",
      },
    },
  },
}));

export const StyledSearch = styled(Search)`
  max-height: 30px;
`;
export const LeftStack = styled(Stack)`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 1020px) {
    display: none;
  }
`;

export const LeftSide = styled(Box)`
  display: flex;
`;

export const RightStack = styled(Stack)`
  display: flex;
  align-items: center;
`;

export const NavButton = styled(Button)`
  text-transform: none;
  text-align: left;
  color: #e5e5e5;
  font-weight: 600;
  box-shadow: none;
  font-size: 0.75rem;
  :hover {
    transition: 200ms ease;
    color: #fff;
    background-color: transparent;
  }
  @media (max-width: 500px) {
    min-width: 0;
    padding: 0;
  }
`;

export const ButtonOutlined = styled(Button)`
  text-transform: none;
  background-color: transparent;
  text-align: left;
  color: #eaebe5;
  font-weight: 600;
  box-shadow: none;
  font-size: 0.7rem;
  :hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonContained = styled(Button)`
  text-transform: none;
  background-color: transparent;
  text-align: left;
  color: #eaebe5;
  box-shadow: none;
  font-weight: 600;
  font-size: 0.7rem;
  :hover {
    background: rgba(0, 0, 0, 0.25);
  }
`;

export const StyledButton = styled(Button)`
  text-transform: none;
  background-color: transparent;
  text-align: left;
  color: #eaebe5;
  box-shadow: none;
  font-weight: 600;
  font-size: 0.9rem;
  :hover {
    color: #ba0001;
    transition: 0.2s ease;
  }
`;

export const StyledLogo = styled(Typography)`
  text-transform: none;
  background-color: none;
  text-align: left;
  color: #f80000;
  box-shadow: none;
  font-weight: bolder;
  font-size: 2rem;
  padding: 0;
  cursor: pointer;
  margin-right: 1rem;
  @media (max-width: 325px) {
    font-size: 1.5rem;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  color: #f6f6f6;
`;

export const StyledListItemIcon = styled(ListIconItem)`
  color: #f6f6f6;
`;

export const AvatarIcon = styled(IconButton)`
  @media (max-width: 550px) {
    display: none;
  }
`;

export const AppBarIndex = styled(AppBar)`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  background-color: transparent;
`;

export const AppBarDetails = styled(AppBar)`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  color: #fff;
`;

export const StyledToolbar = styled(Toolbar)<Pick<propsType, "page">>`
  justify-content: space-between;
  padding: 0px 2rem 0px 2rem;
  transition: 0.2s ease;

  @media (max-width: 300px) {
    padding: ${(props) =>
      props.page === "details" ? "0 .5rem 0 0.5rem" : "0 1rem 0 1rem"};
  }
  @media (min-width: 600px) {
    padding: ${(props) =>
      props.page === "details" ? "0 1rem 0 1rem" : "0 2rem 0 2rem"};
  }
  @media (min-width: 1200px) {
    padding: ${(props) =>
      props.page === "details" ? "0 3.5rem 0 3.5rem" : "0 7rem 0 7rem"};
    transition: 0.2s ease;
  }
`;
