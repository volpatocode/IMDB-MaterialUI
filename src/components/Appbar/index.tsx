import * as React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Settings from "@mui/icons-material/Settings";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import ArrowBack from "../ArrowBack";
import Link from "next/link";

import {
  Box,
  IconButton,
  Menu,
  Tooltip,
  Avatar,
  Divider,
  Stack,
} from "@mui/material";

import {
  SearchIconWrapper,
  StyledInputBase,
  StyledMenuItem,
  StyledListItemIcon,
  AppBarIndex,
  AppBarDetails,
  StyledToolbar,
  StyledSearch,
  RightStack,
  StyledLogo,
} from "./styles";

export type propsType = {
  page: "index" | "details";
  movies?: any;
  setMovies?: any;
};

export const Logo = "VMovies";

export default function SearchAppBar({ movies, setMovies, page }: propsType) {
  const [query, setQuery] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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
        <AppBarIndex elevation={0} position="absolute">
          <StyledToolbar>
            <Stack spacing={0.5} direction="row">
              <Link href="/">
                <StyledLogo>{Logo}</StyledLogo>
              </Link>
            </Stack>
            <RightStack spacing={0.5} direction="row">
              <StyledSearch>
                <SearchIconWrapper>
                  <SearchIcon />
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
              </StyledSearch>
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
                    <Avatar sx={{ width: 28, height: 28, borderRadius: "5px" }}>
                      V
                    </Avatar>
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
            </RightStack>
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
