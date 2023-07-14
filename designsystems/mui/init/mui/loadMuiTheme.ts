import { theme } from '../../themes/default.theme';
import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material';
import ja from 'date-fns/locale/ja';

const initTheme = createTheme(theme as ThemeOptions, ja);

// eslint-disable-next-line import/no-default-export
export default responsiveFontSizes(initTheme);
