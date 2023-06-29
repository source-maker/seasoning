import { alpha } from '@mui/material';
import { cyan, grey, pink } from '@mui/material/colors';

export const crimsonTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: pink['600'],
    },
    secondary: {
      main: cyan['A400'],
    },
    background: {
      default: grey['900'],
      paper: alpha(grey['700'], 0.1),
    },
  },
};
