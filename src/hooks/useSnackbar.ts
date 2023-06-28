import { useEffect, useState } from 'react';

export function useSnackbar() {
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [severity, setSeverity] = useState<
    'info' | 'success' | 'warning' | 'error'
  >('info');

  useEffect(() => {
    if (isActive === true) {
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }
  }, [isActive]);

  const openSnackBar = (
    msg = 'Something went wrong...',
    initSeverity: 'info' | 'success' | 'warning' | 'error' = 'info'
  ) => {
    setMessage(msg);
    setIsActive(true);
    setSeverity(initSeverity);
  };

  return { isActive, setIsActive, message, severity, openSnackBar };
}
