import React from 'react';

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  list: {
    width: 250
  }
}));

const SideNavigation = () => {
  const navItems = [

  ];

  return (
    <Drawer anchor="left">

    </Drawer>
  );
};

export default SideNavigation;
