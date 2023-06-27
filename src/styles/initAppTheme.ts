import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material';
import ja from 'date-fns/locale/ja';
import { defaultTheme } from './themes/default.theme';

const theme = createTheme(defaultTheme as ThemeOptions, ja);

// eslint-disable-next-line import/no-default-export
export default responsiveFontSizes(theme);
