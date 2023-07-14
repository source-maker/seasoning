import { IconButton, Snackbar as MuiSnackbar } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export function Snackbar({
  message,
  duration = 2000, // how long (ms) to show the snackbar
  // pass state from parent to autoclose snackbar
  openSnack,
  setOpenSnack,
}: {
  openSnack: boolean;
  duration?: number;
  setOpenSnack: Dispatch<SetStateAction<boolean>>;
  message?: string;
}) {
  const handleClose = () => {
    setOpenSnack(false);
  };

  // action menu for snackbar
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <MuiSnackbar
      open={openSnack}
      onClose={handleClose}
      message={message}
      autoHideDuration={duration}
      action={action}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    ></MuiSnackbar>
  );
}
