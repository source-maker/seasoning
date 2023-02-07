import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import NotesIcon from '@mui/icons-material/Notes';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { SideDrawer } from '../SideDrawer';
import { useAuth } from '../../../hooks/useAuth';
import BrothLink from '@/components/link/BrothLink';
import { BrothButton } from '@/components/button/BrothButton';

interface PublicHeaderProps {
  title?: string;
  enableBackButton?: boolean;
}

export function PublicHeader({ title, enableBackButton }: PublicHeaderProps) {
  const { isLogin, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [toggleBackButton] = useState(enableBackButton);

  return (
    <>
      <AppBar position="sticky" color="inherit" sx={{ boxShadow: 'none' }}>
        <Toolbar
          sx={{
            alignItems: 'stretch',
            padding: 0,
            margin: 0,
          }}
        >
          {/* left header */}
          <Box flex={1} display="flex" alignItems="center">
            {toggleBackButton ? (
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
            justifyContent="center"
            alignItems="center"
          >
            {isLogin() ? (
              <BrothButton onClick={async () => await logout()}>
                Logout
              </BrothButton>
            ) : (
              <BrothLink href="/signup">
                <BrothButton>Create Account</BrothButton>
              </BrothLink>
            )}
          </Box>
        </Toolbar>

        <SideDrawer open={open} setOpen={setOpen} />
      </AppBar>
    </>
  );
}
