import { Button, ButtonProps, SxProps } from '@mui/material';

interface MuiButtonProps extends ButtonProps {
  textfieldHeight?: boolean;
  sx?: SxProps;
}

export function MuiButton(props: MuiButtonProps) {
  const { sx, variant = 'contained', textfieldHeight = false, ...rest } = props;

  // match the height of the mui default textfield height
  const inputHeight = textfieldHeight ? { height: '3.4rem' } : {};

  return (
    <Button variant={variant} sx={{ ...sx, ...inputHeight }} {...rest}>
      {props.children}
    </Button>
  );
}
