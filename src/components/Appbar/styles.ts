import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { propsType } from "./index";
import MenuItem from "@mui/material/MenuItem";
import ListIconItem from "@mui/material/ListItemIcon";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

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
      width: "10ch",
      cursor: "text",
    },
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      cursor: "pointer",
      "&:focus": {
        width: "32ch",
        cursor: "text",
      },
    },
  },
}));

export const StyledSearch = styled(Search)`
  max-height: 30px;
`;
export const LeftStack = styled(Stack)<propsType>`
  @media (max-width: 680px) {
    display: ${(props) => (props.page === "index" ? "none" : "initial")};
  }
`;

export const RightStack = styled(Stack)`
  display: flex;
  align-items: center;
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
  font-size: 0.7rem;
  :hover {
    background: rgba(0, 0, 0, 0.25);
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

export const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
  padding: 0px 16px 0px 16px;
  transition: 0.2s ease;

  @media (min-width: 600px) {
    padding: 0px 36px 0px 36px;
    transition: 0.2s ease;
  }
`;
