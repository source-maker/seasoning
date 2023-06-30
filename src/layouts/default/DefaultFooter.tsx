import { Box } from '@mui/material';

export function DefaultFooter() {
  return (
    <Box textAlign="center" marginY={4}>
      Seasoning © {new Date().getFullYear()}
    </Box>
  );
}
