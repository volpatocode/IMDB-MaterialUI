import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export const ToolbarColor = styled(Toolbar)`
  background-color: #000;
`;

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

export const ButtonOutlined = styled(Button)`
  text-transform: none;
  text-align: left;
  background-color: #969696;
  color: #eaebe5;
  font-weight: 600;
  :hover {
    background: #666666;
  }
`;

export const ButtonContained = styled(Button)`
  background-color: red;
  text-transform: none;
  text-align: left;
  color: #eaebe5;
  font-weight: 600;
  :hover {
    background: #a8251d;
  }
`;
