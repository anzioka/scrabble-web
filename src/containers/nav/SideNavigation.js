import React from 'react';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as Routes from '../../constants/routes';
import { toggleDrawer } from '../../redux/reducers/appReducer';

const navItems = [
  {
    label: 'Home',
    icon: <HomeIcon />,
    route: Routes.HOME
  },
  {
    label: 'Game History',
    icon: <HistoryIcon />,
    route: Routes.HISTORY,
  },
  {
    label: 'Friends',
    icon: <PeopleIcon />,
    route: Routes.FRIENDS
  },
  {
    label: 'Settings',
    icon: <SettingsIcon />,
    route: Routes.SETTINGS
  },
  {
    label: 'My Account',
    icon: <AccountCircleIcon />,
    route: Routes.PROFILE
  }
];

const useStyles = makeStyles(() => ({
  list: {
    width: 250
  }
}));

const SideNavigation = ({ open }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const history = useHistory();

  const handleItemClick = (navItem) => {
    history.push(navItem.route);
    dispatch(toggleDrawer());
  };
  return (
    <Drawer
        anchor="left"
        open={open}
        onClose={() => dispatch(toggleDrawer())}>
      <div className={classes.list}>
        <List>
          {
            navItems.map((navItem) => (
              <ListItem button key={navItem.label} onClick={() => handleItemClick(navItem)}>
                <ListItemIcon>
                  { navItem.icon}
                </ListItemIcon>
                <ListItemText primary={navItem.label} />
              </ListItem>
            ))
          }
        </List>
      </div>
    </Drawer>
  );
};

export default SideNavigation;
