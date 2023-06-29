import { Box } from '@mui/material';

export interface IBoxSolidGrayProps {
  children: React.ReactNode;
}

export function BoxSolidGray({ children }: IBoxSolidGrayProps) {
  return (
    <Box
      sx={{ backgroundColor: 'bg.lighter' }}
      p={1}
      mb={1}
      borderRadius="0.125rem"
    >
      {children}
    </Box>
  );
}
