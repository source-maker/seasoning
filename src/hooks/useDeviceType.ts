import { useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';

export function useDeviceType() {
  const theme = useTheme();

  // mui default xs 0px, sm, 600px, md 900px, lg 1200px, xl 1536px
  // can write '(min-width:600px)' instead of theme.brakepoints
  let deviceType: 'mobile' | 'tablet' | 'laptop' | 'desktop' = 'mobile';
  if (useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true }))
    deviceType = 'tablet';
  if (useMediaQuery(theme.breakpoints.up('md'), { noSsr: true }))
    deviceType = 'laptop';
  if (useMediaQuery(theme.breakpoints.up('lg'), { noSsr: true }))
    deviceType = 'desktop';
  return deviceType;
}
