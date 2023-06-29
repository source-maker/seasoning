import { Box, SxProps } from '@mui/material';

export interface IBoxBorderedProps {
  children: React.ReactNode;
  sx?: SxProps;
}

export function BoxBordered({ children, sx }: IBoxBorderedProps) {
  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'border.light',
        borderRadius: '0.3rem',
        mb: '1rem',
        padding: '1rem',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
