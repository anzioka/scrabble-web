import React, { useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import UserAvatar from './components/UserAvatar';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  btn: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginRight: 0
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  mobileNavItems: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  desktopNavItems: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  notification: {
    marginRight: theme.spacing(3)
  }
}));

const mobileMenuId = 'navbar-menu-mobile';

const AuthenticatedNavigation = () => {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // notifications: network request to fetch notifications
  const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];
  // TODO: handle on click menu button

  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const renderMobileMenu = (
    <Menu
        id={mobileMenuId}
        keepMounted
        anchorEl={mobileMoreAnchorEl}
        open={isMobileMenuOpen}
        onClose={handleMenuClose}>
      {
        notifications.length > 0 && (
          <MenuItem>
            <IconButton className={classes.notification}>
              <Badge badgeContent={notifications.length} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p> Notifications </p>
          </MenuItem>
        )
      }
      <MenuItem>
        <Button
            className={classes.btn}
            color="primary"
            variant="contained">
          New Game
        </Button>
      </MenuItem>
    </Menu>
  );

  const renderDesktopNavItems = (
    <div className={classes.desktopNavItems}>
      <Button
          className={classes.btn}
          color="primary"
          variant="contained">
        New Game
      </Button>
      {
        notifications.length > 0 && (
          <IconButton className={classes.notification}>
            <Badge badgeContent={notifications.length} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        )
      }
    </div>
  );

  const renderMobileNavItems = (
    <div className={classes.mobileNavItems}>
      <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit">
        <MoreIcon />
      </IconButton>
    </div>
  );

  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6">
          My Scrabble
        </Typography>

        {renderDesktopNavItems}
        <UserAvatar />
        {renderMobileNavItems}
      </Toolbar>
      {renderMobileMenu}
    </AppBar>
  );
};

export default AuthenticatedNavigation;
