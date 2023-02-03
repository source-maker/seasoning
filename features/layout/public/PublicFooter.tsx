import { Box } from '@mui/material';

export function PublicFooter() {
  return (
    <Box textAlign="center" marginY={4}>
      SourceMaker © {new Date().getFullYear()}
    </Box>
  );
}
