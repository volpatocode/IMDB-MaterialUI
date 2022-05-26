import * as React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBack from "../ArrowBack";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuNav from "../MenuNav";
import { Box, IconButton, Menu, Tooltip, Avatar, Stack } from "@mui/material";

import {
  SearchIconWrapper,
  StyledInputBase,
  StyledMenuItem,
  AppBarIndex,
  AppBarDetails,
  StyledToolbar,
  StyledSearch,
  LeftStack,
  RightStack,
  StyledLogo,
  NavButton,
  LeftSide,
  AvatarIcon,
} from "./styles";

export type propsType = {
  page: "index" | "details" | "seeMore";
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

  if (page === "index" || page === "seeMore") {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBarIndex
          elevation={0}
          position={page === "index" ? "absolute" : "static"}
        >
          <StyledToolbar>
            <LeftSide>
              <Link href="/">
                <StyledLogo>{Logo}</StyledLogo>
              </Link>
              <MenuNav />
              <LeftStack>
                <NavButton variant="text">Now playing</NavButton>
                <NavButton variant="text">Upcoming</NavButton>
                <NavButton variant="text">Week rated</NavButton>
                <NavButton variant="text">Top rated</NavButton>
                <NavButton variant="text">Popular</NavButton>
              </LeftStack>
            </LeftSide>
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
                <AvatarIcon
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Tooltip title="Account settings">
                    <Avatar
                      src="https://avatars.githubusercontent.com/u/102267019?v=4"
                      sx={{ width: 32, height: 32, borderRadius: "5px" }}
                    />
                  </Tooltip>
                </AvatarIcon>
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
                <Link href="https://github.com/volpatocode">
                  <StyledMenuItem>
                    <GitHubIcon
                      sx={{ mr: 0.6, cursor: "pointer" }}
                      fontSize="large"
                    />
                    My Github
                  </StyledMenuItem>
                </Link>
                <Link href="https://www.linkedin.com/in/joaovolpatocode/">
                  <StyledMenuItem>
                    <LinkedInIcon
                      sx={{ mr: 0.5, cursor: "pointer" }}
                      fontSize="large"
                    />
                    My Linkedin
                  </StyledMenuItem>
                </Link>
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
                    <Avatar
                      src="https://avatars.githubusercontent.com/u/102267019?v=4"
                      sx={{ width: 28, height: 28, borderRadius: "5px" }}
                    />
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
                <Link href="https://github.com/volpatocode">
                  <StyledMenuItem>
                    <GitHubIcon
                      sx={{ mr: 0.6, cursor: "pointer" }}
                      fontSize="large"
                    />
                    My Github
                  </StyledMenuItem>
                </Link>
                <Link href="https://www.linkedin.com/in/joaovolpatocode/">
                  <StyledMenuItem>
                    <LinkedInIcon
                      sx={{ mr: 0.5, cursor: "pointer" }}
                      fontSize="large"
                    />
                    My Linkedin
                  </StyledMenuItem>
                </Link>
              </Menu>
            </Stack>
          </StyledToolbar>
        </AppBarDetails>
      </Box>
    );
  }
}
