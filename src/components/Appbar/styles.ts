import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { propsType } from "./index";
import MenuItem from "@mui/material/MenuItem";
import ListIconItem from "@mui/material/ListItemIcon";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
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
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "32ch",
      },
    },
  },
}));

export const ButtonOutlined = styled(Button)<propsType>`
  text-transform: none;
  background-color: transparent;
  text-align: left;
  color: #eaebe5;
  font-weight: 600;
  box-shadow: none;
  :hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 770px) {
    display: ${(props) => (props.page === "index" ? "none" : "initial")};
  }
`;

export const ButtonContained = styled(Button)<propsType>`
  text-transform: none;
  background-color: transparent;
  text-align: left;
  color: #eaebe5;
  box-shadow: none;
  font-weight: 600;
  :hover {
    background: rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 770px) {
    display: ${(props) => (props.page === "index" ? "none" : "initial")};
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  color: #f6f6f6;
`;

export const StyledListItemIcon = styled(ListIconItem)`
  color: #f6f6f6;
`;

export const AppBarIndex = styled(AppBar)`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  background-color: rgb(20, 20, 20);
`;

export const AppBarDetails = styled(AppBar)`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  color: #fff;
`;

export const BoxMenu = styled(Box)`
  display: flex;
  align-items: center;
`;

export const StyledToolbar = styled(Toolbar)`
  min-height: 64px;
  justify-content: space-between;
`;
