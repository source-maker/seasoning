import { Alert, Snackbar, SnackbarProps } from '@mui/material';
import { SyntheticEvent } from 'react';

interface SnackbarAlertProps {
  message: string | null;
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  severity?: 'info' | 'success' | 'warning' | 'error';
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
}

export default function BrothSnackbar({
  message,
  isActive,
  setIsActive,
  severity = 'info',
  anchorOrigin = { vertical: 'top', horizontal: 'center' },
  ...props
}: SnackbarProps & SnackbarAlertProps) {
  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsActive(false);
  };

  return (
    <Snackbar
      {...props}
      anchorOrigin={anchorOrigin}
      open={isActive}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}
