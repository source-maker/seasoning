import { ReactNode, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import NotesIcon from '@mui/icons-material/Notes';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { BrothButton } from '@/components/button/BrothButton';
import { useAuth } from '@/hooks/useAuth';
import { SideDrawer } from '../SideDrawer';

export interface HeaderProps {
  title?: string;
  useBackButton?: boolean;
  rightNavMenu?: ReactNode;
}

// Biz page Header
export function BizHeader({ title, useBackButton = false }: HeaderProps) {
  const { isLogin, logout, isAdmin } = useAuth();

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <>
      <AppBar position="sticky" color="inherit" sx={{ boxShadow: 'none' }}>
        <Toolbar
          sx={{
            alignItems: 'stretch',
            padding: '0 1rem',
            margin: 0,
          }}
        >
          {/* left header */}
          <Box flex={1} display="flex" alignItems="center">
            {useBackButton ? (
              <IconButton aria-label="back" onClick={() => router.back()}>
                <ArrowBackIosIcon />
              </IconButton>
            ) : (
              <IconButton aria-label="menu" onClick={() => setOpen(true)}>
                <NotesIcon />
              </IconButton>
            )}
          </Box>

          {/* center header */}
          <Box
            flex={3}
            display="flex"
            alignItems={'center'}
            flexDirection={'column'}
            justifyContent="center"
            py={3}
          >
            <Typography>{title || pathname}</Typography>
          </Box>

          {/* right header */}
          <Box
            flex={1}
            display="flex"
            position="relative"
            justifyContent="center"
            alignItems="center"
          >
            {isLogin() && isAdmin && (
              <>
                <BrothButton onClick={async () => await logout()}>
                  Logout
                </BrothButton>
              </>
            )}
          </Box>
        </Toolbar>

        <SideDrawer open={open} setOpen={setOpen} />
      </AppBar>
    </>
  );
}
