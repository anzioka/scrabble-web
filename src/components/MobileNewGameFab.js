import React from 'react';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

const MobileNewGameFab = () => {
  const classes = useStyles();
  const onClick = () => {
    console.log('handle on click');
  };

  return (
    <Fab className={classes.fab}>
      <AddIcon />
    </Fab>
  );
};

export default MobileNewGameFab;
