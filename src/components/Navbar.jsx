import React from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { Menu as MenuIcon, Mic, Search, Notifications, AddCircleOutline } from "@mui/icons-material";
import { YTLogo } from "../assets";

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElUser2, setAnchorElUser2] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenUserMenu2 = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu2 = () => {
    setAnchorElUser(null);
  };

  const handleNavigation2 = (path) => {
    setAnchorElUser(null);
    console.log(`Navigate to: ${path}`);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigation = (path) => {
    setAnchorElUser(null);
    console.log(`Navigate to: ${path}`);
  };

  return (
    <nav className="bg-[#181818] top-0 end-0 start-0 fixed w-full py-2 px-5 flex justify-between items-center shadow-md z-50">

      <div className="flex gap-4 items-center">
        <IconButton color="inherit">
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
          anchorEl={anchorElUser2}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser2)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={() => handleNavigation("/profile")}>
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("/edit-profile")}>
            <Typography textAlign="center">Edit Profile</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("/my-blog")}>
            <Typography textAlign="center">My Blog</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("/settings")}>
            <Typography textAlign="center">Settings</Typography>
          </MenuItem>
        </Menu>

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
          onClose={handleCloseUserMenu2}
        >
          <MenuItem onClick={() => handleNavigation("/profile")}>
            <Typography textAlign="center">Upload video</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("/edit-profile")}>
            <Typography textAlign="center">Go live</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("/my-blog")}>
            <Typography textAlign="center">Create post</Typography>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
