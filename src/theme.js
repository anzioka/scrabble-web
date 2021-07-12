import { createTheme } from '@material-ui/core/styles';

// palette: https://material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=4CAF50&secondary.color=4CAF50

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#af4cab'
    }
  }
});

export default theme;
