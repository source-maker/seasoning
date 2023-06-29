import { Typography as MuiTypography, TypographyProps } from '@mui/material';

interface BrothTypographyProps {
  baseline?: boolean; // CSS baseline reset for custom styling outside of typography settings
  component?: string | React.ElementType;
}

export function BrothTypography({
  children,
  baseline = false,
  ...rest
}: TypographyProps & BrothTypographyProps) {
  return (
    <MuiTypography m={!baseline ? 'revert' : ''} {...rest}>
      {children}
    </MuiTypography>
  );
}
