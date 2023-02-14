import { PublicFooter } from './PublicFooter';
import { Box } from '@mui/system';
import { ReactNode, useContext, useState } from 'react';
import { SideDrawer } from '../SideDrawer';
import { useAuth } from '@/hooks/useAuth';
import BrothLink from '@/components/link/BrothLink';
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NotesIcon from '@mui/icons-material/Notes';
import { useRouter } from 'next/router';
import { DrawerContext } from '@/providers/DrawerProvider';
import AppBarAdvance from '@/components/appbar/AppBarAdvance';
import { BrandLogo } from '@/components/asset/BrandLogo';

export default function Layout({
  children,
}: {
  children: ReactNode & { props: { title: string } };
}) {
  const [toggleBackButton] = useState(false);
  const { isLogin, logout } = useAuth();
  const router = useRouter();
  const { setOpen } = useContext(DrawerContext);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        minHeight="100vh"
      >
        <AppBarAdvance
          title="Seasoning"
          logo={<BrandLogo sx={{ width: '2rem', marginRight: 8 }} />}
          leftMenu={
            <>
              {toggleBackButton ? (
                <IconButton aria-label="back" onClick={() => router.back()}>
                  <ArrowBackIosIcon />
                </IconButton>
              ) : (
                <IconButton
                  aria-label="menu"
                  onClick={() => setOpen(true)}
                  color="inherit"
                  sx={{ mr: 2 }}
                >
                  <NotesIcon />
                </IconButton>
              )}
            </>
          }
          centerMenu={
            isLogin() && (
              <>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  Products
                </Button>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  Products
                </Button>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  Products
                </Button>
              </>
            )
          }
          rightMenu={
            <>
              {isLogin() ? (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                    <MenuItem onClick={async () => await logout()}>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <BrothLink href="/signup" color={'#FFF'} underline={'none'}>
                  <Button color="inherit">Create Account</Button>
                </BrothLink>
              )}
            </>
          }
        />

        <SideDrawer />

        <main style={{ display: 'contents' }}>{children}</main>
        <PublicFooter />
      </Box>
    </>
  );
}
