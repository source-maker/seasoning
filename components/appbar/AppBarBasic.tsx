import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function AppBarBasic({
  title,
  leftMenu,
  rightMenu,
}: {
  title?: string;
  leftMenu?: React.ReactNode;
  rightMenu?: React.ReactNode;
}) {
  return (
    <AppBar
      position="relative"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        {leftMenu}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {rightMenu}
      </Toolbar>
    </AppBar>
  );
}
