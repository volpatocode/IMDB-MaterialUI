import * as React from "react";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Settings from "@mui/icons-material/Settings";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";

import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Menu,
  Tooltip,
  Avatar,
  Divider,
  Stack,
} from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  ButtonContained,
  ButtonOutlined,
  StyledMenuItem,
  StyledListItemIcon,
  AppBarIndex,
  AppBarDetails,
  BoxMenu,
  StyledToolbar,
} from "./styles";

import ArrowBack from "../ArrowBack";

export type propsType = {
  movies?: any;
  setMovies?: any;
  page: "index" | "details";
};

export const Logo = "VMovies";

export default function SearchAppBar({ movies, setMovies, page }: propsType) {
  const [query, setQuery] = useState("");

  const forceHome = () => {
    alert("No results found");
    document.location.href = "/";
  };

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=f04297956f564d66b4a51ff3da1c6c30&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      if (!data.results || data.results.length === 0) {
        return forceHome();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (page === "index") {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBarIndex position="static">
          <StyledToolbar>
            <BoxMenu>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="h2"
                sx={{ flexGrow: 1, ":hover": { cursor: "pointer" } }}
              >
                {Logo}
              </Typography>
            </BoxMenu>
            <Stack spacing={2} direction="row">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon/>
                </SearchIconWrapper>
                <form onSubmit={searchMovie}>
                  <StyledInputBase
                    type="text"
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                  />
                </form>
              </Search>
              <ButtonOutlined page="index" variant="text">
                Login
              </ButtonOutlined>
              <ButtonContained page="index" variant="text">
                Register
              </ButtonContained>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>V</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    bgcolor: "#262626",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "#262626",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <StyledMenuItem>
                  <Avatar /> Profile
                </StyledMenuItem>
                <StyledMenuItem>
                  <Avatar /> My account
                </StyledMenuItem>
                <Divider />
                <StyledMenuItem>
                  <StyledListItemIcon>
                    <PersonAdd fontSize="small" />
                  </StyledListItemIcon>
                  Add another account
                </StyledMenuItem>
                <StyledMenuItem>
                  <StyledListItemIcon>
                    <Settings fontSize="small" />
                  </StyledListItemIcon>
                  Settings
                </StyledMenuItem>
                <StyledMenuItem>
                  <StyledListItemIcon>
                    <Logout fontSize="small" />
                  </StyledListItemIcon>
                  Logout
                </StyledMenuItem>
              </Menu>
            </Stack>
          </StyledToolbar>
        </AppBarIndex>
      </Box>
    );
  } else {
    return (
      <Box>
        <AppBarDetails color="transparent" position="absolute">
          <StyledToolbar>
            <ArrowBack />
            <Stack spacing={2} direction="row">
              <ButtonOutlined page="details" variant="text">
                Login
              </ButtonOutlined>
              <ButtonContained page="details" variant="contained">
                Register
              </ButtonContained>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>V</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    bgcolor: "#262626",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "#262626",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <StyledMenuItem>
                  <Avatar /> Profile
                </StyledMenuItem>
                <StyledMenuItem>
                  <Avatar /> My account
                </StyledMenuItem>
                <Divider />
                <StyledMenuItem>
                  <StyledListItemIcon>
                    <PersonAdd fontSize="small" />
                  </StyledListItemIcon>
                  Add another account
                </StyledMenuItem>
                <StyledMenuItem>
                  <StyledListItemIcon>
                    <Settings fontSize="small" />
                  </StyledListItemIcon>
                  Settings
                </StyledMenuItem>
                <StyledMenuItem>
                  <StyledListItemIcon>
                    <Logout fontSize="small" />
                  </StyledListItemIcon>
                  Logout
                </StyledMenuItem>
              </Menu>
            </Stack>
          </StyledToolbar>
        </AppBarDetails>
      </Box>
    );
  }
}
