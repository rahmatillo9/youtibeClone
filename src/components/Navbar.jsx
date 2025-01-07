import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { Menu as MenuIcon, Mic, Search, Notifications, AddCircleOutline } from "@mui/icons-material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { YTLogo } from "../assets";

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElUser2, setAnchorElUser2] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false); 

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu2 = (event) => {
    setAnchorElUser2(event.currentTarget);
  };

  const handleCloseUserMenu2 = () => {
    setAnchorElUser2(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleNavigation = (path) => {
    console.log(`Navigate to: ${path}`);
  };

  return (
    <nav className="bg-[#181818] top-0 end-0 start-0 fixed w-full py-2 px-5 flex justify-between items-center shadow-md z-50">
      {/* Chap qism */}
      <div className="flex gap-4 items-center">
        <IconButton color="inherit" onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
        <img src={YTLogo} alt="YouTube Logo" className="h-6" />
      </div>


      <div className="flex gap-3 items-center w-[40%]">
        <form className="w-full relative flex">
          <input
            type="text"
            placeholder="Search"
            className="rounded-s-full border py-2 px-4 placeholder:text-[#686868] border-[#303030] bg-[#121212] w-full focus:border-blue-500 outline-none text-white"
          />
          <button className="bg-[#303030] border border-[#303030] border-s-0 text-white rounded-e-full px-5">
            <Search />
          </button>
        </form>
        <button className="rounded-full w-10 h-10 flex items-center justify-center text-white bg-[#303030]">
          <Mic />
        </button>
      </div>


      <div className="flex items-center gap-4">
        <IconButton onClick={handleOpenUserMenu2} sx={{ p: 0 }}>
          <Button
            variant="contained"
            startIcon={<AddCircleOutline />}
            sx={{
              textTransform: "none",
              backgroundColor: "#222",
              color: "white",
              borderRadius: "20px",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            Create
          </Button>
        </IconButton>
        <IconButton>
          <Badge color="error" variant="dot">
            <Notifications sx={{ color: "white" }} />
          </Badge>
        </IconButton>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt="User Avatar"
              src="https://i.pinimg.com/236x/08/fa/92/08fa92d17d64c05b2fd3a31a0959909f.jpg"
            />
          </IconButton>
        </Tooltip>

        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={() => handleNavigation("/profile")}>
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("/edit-profile")}>
            <Typography textAlign="center">Edit Profile</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("/settings")}>
            <Typography textAlign="center">Settings</Typography>
          </MenuItem>
        </Menu>
      </div>

      {/* Drawer (Chapdan ochiladigan menyu) */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className="w-64 bg-[#181818] text-white h-full">
          <List>
            <ListItem button onClick={() => handleNavigation("/")}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation("/trending")}>
              <ListItemText primary="Trending" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation("/subscriptions")}>
              <ListItemText primary="Subscriptions" />
            </ListItem>
          </List>
          <Divider sx={{ backgroundColor: "#303030" }} />
          <List>
            <ListItem button onClick={() => handleNavigation("/library")}>
              <ListItemText primary="Library" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation("/history")}>
              <ListItemText primary="History" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation("/watch-later")}>
              <ListItemText primary="Watch Later" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
