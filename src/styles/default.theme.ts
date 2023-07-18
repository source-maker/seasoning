/**
 * MUI Global Theme Configuration
 * The following GUI tool can assist with theme generation:
 * @see https://zenoo.github.io/mui-theme-creator/

 */
import { darken } from '@mui/material';
import { cyan, blue } from '@mui/material/colors';

export const theme = {
  palette: {
    mode: 'light',
    primary: {
      main: darken(blue['900'], 0.3),
    },
    secondary: {
      main: cyan['200'],
    },
  },
  typography: {},
  components: {},
};
