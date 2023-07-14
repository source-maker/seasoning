import { Typography, TypographyProps } from '@mui/material';

interface MuiTypographyProps {
  baseline?: boolean; // CSS baseline reset for custom styling outside of typography settings
  component?: string | React.ElementType;
}

export function MuiTypography({
  children,
  baseline = false,
  ...rest
}: TypographyProps & MuiTypographyProps) {
  return (
    <Typography m={!baseline ? 'revert' : ''} {...rest}>
      {children}
    </Typography>
  );
}
