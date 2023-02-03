import * as React from 'react';
import { Box } from '@mui/system';
import BrothLink from '../link/BrothLink';

export function BrandLogo() {
  return (
    <BrothLink href="/" sx={{ textDecoration: 'none' }}>
      <Box textAlign="center">
        <img src="/BrothLogo.svg" alt="Logo" style={{ width: '5rem' }} />
      </Box>
    </BrothLink>
  );
}
