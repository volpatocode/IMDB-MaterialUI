import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  ButtonContained,
  ButtonOutlined,
} from "./styles";
import { useState } from "react";
import Stack from "@mui/material/Stack";

export type propsType = {
  movies?: any;
  setMovies?: any;
  page: "index" | "details";
};

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

  const Logo = "VMovies";

  if (page === "index") {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: "#000" }} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, ":hover": { cursor: "pointer" } }}
              >
                {Logo}
              </Typography>
            </Link>

            <Stack spacing={2} direction="row">
              <Search>
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
              </Search>
              <ButtonOutlined page="index" variant="text">
                Login
              </ButtonOutlined>
              <ButtonContained page="index" variant="contained">
                Register
              </ButtonContained>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    );
  } else {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ color: "#fff" }} color="transparent" position="absolute">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, ":hover": { cursor: "pointer" } }}
              >
                {Logo}
              </Typography>
            </Link>
            <Stack spacing={2} direction="row">
              <ButtonOutlined page="details" variant="text">
                Login
              </ButtonOutlined>
              <ButtonContained page="details" variant="contained">
                Register
              </ButtonContained>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
