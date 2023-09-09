import {
  Badge,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const Header = () => {
  return (
    <>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5">Travel Blog</Typography>

        <IconButton sx={{ flexGrow: 1 }} color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>

          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar>
        The majority of people skim articles on the Internet, rather than read
        them word for word.
      </Toolbar>
    </>
  );
};

export default Header;
