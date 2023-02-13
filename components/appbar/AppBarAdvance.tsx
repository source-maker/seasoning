import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Breakpoint } from '@mui/material';
import BrothLink from '../link/BrothLink';
import { ReactNode } from 'react';

function AppBarAdvance({
  logo,
  title,
  leftMenu,
  centerMenu,
  rightMenu,
  maxWidth = false,
}: {
  logo?: ReactNode;
  title?: string;
  leftMenu?: ReactNode;
  centerMenu?: ReactNode;
  rightMenu?: ReactNode;
  maxWidth?: false | Breakpoint | undefined;
}) {
  return (
    <AppBar position="relative">
      <Container maxWidth={maxWidth}>
        <Toolbar
          disableGutters
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          {/* Left Menu */}
          <Box color="white">{leftMenu}</Box>
          <BrothLink
            href="/"
            sx={{
              display: {
                xs: 'flex',
              },
              color: '#FFF',
              textDecoration: 'none',
              mr: 2,
            }}
          >
            {logo}
            <Typography variant="h6">{title}</Typography>
          </BrothLink>

          {/* Center Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {centerMenu}
          </Box>

          {/* Right Menu */}
          <Box sx={{ flexGrow: 0 }}>{rightMenu}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppBarAdvance;
