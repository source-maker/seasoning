import { Box } from '@mui/system';
import { CSSProperties } from 'react';

export function BrandLogo({ sx }: { sx?: CSSProperties }) {
  return (
    <Box textAlign="center">
      <img src="/BrothLogo.svg" alt="Logo" style={sx} />
    </Box>
  );
}
