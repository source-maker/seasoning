import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

export function MiniLoading() {
  return (
    <Box textAlign="center">
      <CircularProgress />
    </Box>
  );
}
