import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import {
  AppBar,
  Button,
  Toolbar,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1
  }
}));

const UnAuthenticatedNavigation = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();

  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          Scrabble
        </Typography>
        <Button onClick={() => loginWithRedirect()} color="primary" variant="contained">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default UnAuthenticatedNavigation;
