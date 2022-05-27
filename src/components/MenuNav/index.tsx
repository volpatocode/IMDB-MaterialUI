import * as React from "react";
import { MenuNav, TextNavigation } from "./styles";
import { NavButton } from "../Appbar/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";

export type propsType = {};

export default function index({}: propsType) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuNav>
      <NavButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <TextNavigation>Navigation</TextNavigation>
        <ArrowDropDownIcon fontSize="small" />
      </NavButton>
      <Menu
        PaperProps={{
          sx: {
            bgcolor: "#262626",
            color: "#fff",
          },
        }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ color: "#262626" }}
      >
        <Link href="#nowPlaying">
          <MenuItem onClick={handleClose}>Now playing</MenuItem>
        </Link>
        <Link href="#upcoming">
          <MenuItem onClick={handleClose}>Upcoming</MenuItem>
        </Link>
        <Link href="#weekRated">
          <MenuItem onClick={handleClose}>Week rated</MenuItem>
        </Link>
        <Link href="#topRated">
          <MenuItem onClick={handleClose}>Top rated</MenuItem>
        </Link>
        <Link href="#popular">
          <MenuItem onClick={handleClose}>Popular</MenuItem>
        </Link>
      </Menu>
    </MenuNav>
  );
}
