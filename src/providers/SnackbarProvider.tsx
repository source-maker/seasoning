// SnackbarContext.tsx
import React, { createContext, useState, ReactNode } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface SnackbarContextProps {
  open: boolean;
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error';
}

interface SnackbarProviderProps {
  children: ReactNode;
}

/**
 * Snackbar context object that contains the current state of the snackbar and a function to change it.
 *
 * @type {React.Context}
 */
export const SnackbarContext = createContext<{
  snackbar: SnackbarContextProps;
  setSnackbar: React.Dispatch<React.SetStateAction<SnackbarContextProps>>;
}>({
  snackbar: { open: false, message: '', severity: 'info' },
  setSnackbar: () => {},
});

/**
 * Provider component for the SnackbarContext. Provides an interface for opening the snackbar with a message.
 *
 * @param {ReactNode} children - React components that are children of the provider.
 *
 * @returns {React.FC} - A function component.
 */
export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const [snackbar, setSnackbar] = useState<SnackbarContextProps>({
    open: false,
    message: '',
    severity: 'info',
  });

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: 'timeout' | 'clickaway' | 'escapeKeyDown' | undefined
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <SnackbarContext.Provider value={{ snackbar, setSnackbar }}>
      {children}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ zIndex: 9999, mt: 8 }}
      >
        <Alert
          onClose={handleClose}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
