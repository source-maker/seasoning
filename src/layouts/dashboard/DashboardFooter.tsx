import { Box } from '@mui/material';

export function DashboardFooter() {
  return (
    <Box textAlign="center" my={4} color="primary.main" fontWeight={400}>
      Biz SourceMaker © {new Date().getFullYear()}
    </Box>
  );
}
