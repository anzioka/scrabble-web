import React, { useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import {
  Avatar,
  Menu,
  MenuItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import * as Routes from '../../../constants/routes';

// actions:
const VIEW_PROFILE = 'view_profile';
const LOGOUT = 'logout';

const useStyles = makeStyles((theme) => ({
  img: {
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      // desktop
      width: theme.spacing(3),
      height: theme.spacing(3)
    }
  },
  avatarLabel: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main
  },
  logoutBtn: {
    width: '100%'
  }
}));

const UserAvatar = () => {
  const { user, logout } = useAuth0();
  const { name, picture, email } = user;

  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const getAvatarLabel = () => {
    if (name) {
      return name[0].toUpperCase();
    }
    return email[0].toUpperCase();
  };

  const handleMenuClick = (e) => {
    const { currentTarget } = e;
    const { dataset } = currentTarget;
    const { actionId } = dataset;
    switch (actionId) {
      case LOGOUT:
        logout({
          returnTo: window.location.origin
        });
        break;
      case VIEW_PROFILE:
        history.push(Routes.PROFILE);
        break;
      default:
    }
    handleMenuClose();
  };

  return (
    <div>
      {
        picture ? (
          <Avatar
              onClick={handleMenuOpen}
              alt={name}
              src={picture}
              className={classes.img} />
        ) : (
          <Avatar onClick={handleMenuOpen} className={classes.avatarLabel}>
            { getAvatarLabel()}
          </Avatar>
        )
      }
      <Menu
          anchorEl={anchorEl}
          keepMounted
          open={isMenuOpen}
          onClose={handleMenuClose}>
        <MenuItem
            data-action-id={VIEW_PROFILE}
            onClick={handleMenuClick}>
          My Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClick} data-action-id={LOGOUT}>
          Sign Out
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserAvatar;
