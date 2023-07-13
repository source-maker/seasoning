import { Button } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface IPrimaryButtonProps {
  href?: string;
  variant?: string;
  ButtonProps?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  children: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  disabled?: boolean;
  sx?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  onClick?: () => void;
  type?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  startIcon?: ReactNode;
}

export function PrimaryButton(props: IPrimaryButtonProps) {
  return (
    <Button
      {...props.ButtonProps}
      href={props.href}
      variant={props.variant ?? 'contained'}
      component="a"
      LinkComponent={Link}
      onClick={props.onClick}
      disabled={props.disabled}
      sx={props.sx}
      type={props.type}
      startIcon={props.startIcon}
    >
      {props.children}
    </Button>
  );
}
