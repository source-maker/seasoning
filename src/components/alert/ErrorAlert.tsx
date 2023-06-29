import { Alert } from '@mui/material';

interface IErrorAlertProps {
  message?: string;
}

export function ErrorAlert({ message }: IErrorAlertProps) {
  return <>{message && <Alert severity="error">{message}</Alert>}</>;
}
