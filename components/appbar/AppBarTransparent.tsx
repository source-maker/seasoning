import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

interface AppBarTransparentProps {
  title?: string;
  leftMenu?: React.ReactNode;
  rightMenu?: React.ReactNode;
}

export function AppBarTransparent({
  title,
  leftMenu,
  rightMenu,
}: AppBarTransparentProps) {
  return (
    <>
      <AppBar position="sticky" color="transparent" sx={{ boxShadow: 'none' }}>
        <Toolbar
          sx={{
            alignItems: 'stretch',
            padding: 0,
            margin: 0,
          }}
        >
          {/* left header */}
          <Box flex={1} display="flex" alignItems="center">
            {leftMenu}
          </Box>

          {/* center header */}
          <Box
            flex={3}
            display="flex"
            alignItems={'center'}
            justifyContent="center"
            py={3}
          >
            <Typography>{title}</Typography>
          </Box>

          {/* right header */}
          <Box
            flex={1}
            display="flex"
            position="relative"
            justifyContent="flex-end"
            alignItems="center"
          >
            {rightMenu}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
