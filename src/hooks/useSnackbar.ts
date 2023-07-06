import { useContext } from 'react';
import { SnackbarContext } from '@/providers/SnackbarProvider';

/**
 * useSnackbar hook.
 *
 * This hook is a shortcut to use the SnackbarContext, providing an easy way to dispatch snackbar notifications.
 *
 * @return {object} The returned object contains a method called `openSnackbar` for triggering snackbar notifications.
 *
 * @example
 * const { openSnackbar } = useSnackbar();
 * openSnackbar('This is a success message', 'success');
 */
export const useSnackbar = () => {
  const { setSnackbar } = useContext(SnackbarContext);

  /**
   * Opens a snackbar notification.
   *
   * This function allows you to dispatch a snackbar notification with a custom message and a specific severity.
   *
   * @param {string} message - The message that will be displayed on the snackbar notification.
   * @param {'success' | 'info' | 'warning' | 'error'} [severity='info'] - The severity level of the snackbar notification.
   * It affects the color of the snackbar.
   * - 'success': displays the snackbar in green color.
   * - 'info': displays the snackbar in blue color.
   * - 'warning': displays the snackbar in orange color.
   * - 'error': displays the snackbar in red color.
   *
   * @example
   * openSnackbar('You have successfully updated the data', 'success');
   */
  const openSnackbar = (
    message: string,
    severity: 'success' | 'info' | 'warning' | 'error' = 'info'
  ) => {
    setSnackbar({ open: true, message, severity });
  };

  return { openSnackbar };
};
