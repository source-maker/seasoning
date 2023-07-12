import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material';
import ja from 'date-fns/locale/ja';
import { theme } from './themes/empty.theme';

const initTheme = createTheme(theme as ThemeOptions, ja);

// eslint-disable-next-line import/no-default-export
export default responsiveFontSizes(initTheme);
