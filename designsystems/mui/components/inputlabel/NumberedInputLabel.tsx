import { Avatar, InputLabel } from '@mui/material';

export interface INumberedInputLabelProps {
  iconText: string;
  children: React.ReactNode;
}

export function NumberedInputLabel({
  iconText,
  children,
}: INumberedInputLabelProps) {
  return (
    <InputLabel sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar
        sx={{
          width: 24,
          height: 24,
          fontSize: '1rem',
          bgcolor: 'primary.main',
          mr: '0.5rem',
        }}
      >
        {iconText}
      </Avatar>
      {children}
    </InputLabel>
  );
}
