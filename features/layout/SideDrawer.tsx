import { useAuth } from 'hooks/useAuth';
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DrawerItems, DrawerItem } from '@/components/drawer/DrawerItems';
import BrothLink from '@/components/link/BrothLink';
import { DrawerContext } from '@/providers/DrawerProvider';
import { useContext } from 'react';

export function SideDrawer() {
  const { open, setOpen } = useContext(DrawerContext);
  const { currentUser, isLogin, logout, isAdmin } = useAuth();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const publicDrawerItems: DrawerItem[] = [
    {
      title: 'Home',
      href: '/',
      icon: 'home',
    },
    {
      title: 'Terms of Service',
      href: '/',
      icon: 'textSnippet',
    },
    {
      title: 'Privacy Policy',
      href: '/',
      icon: 'help',
    },
    {
      title: 'Contact',
      href: '/',
      icon: 'email',
    },
  ];

  const bizDrawerItems: DrawerItem[] = isAdmin()
    ? [
        {
          title: 'Business Dashboard',
          href: '/biz',
          icon: 'person',
        },
      ]
    : [];

  const authenticatedDrawer: DrawerItem[] = bizDrawerItems.concat([
    {
      title: 'My Page',
      href: '/mypage',
      icon: 'person',
    },
    {
      title: 'Account Settings',
      href: '/mypage/account/',
      icon: 'badge',
    },
  ]);

  return (
    <Drawer open={open} onClick={handleDrawerClose} onClose={handleDrawerClose}>
      <Box width="20.625rem">
        <Box display="flex" justifyContent="end" alignItems="end">
          <IconButton
            onClick={handleDrawerClose}
            sx={{ margin: '0.688rem', color: 'font.darkest' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        {isLogin() ? (
          <Stack spacing={2} m={2}>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              {currentUser?.name}
            </Typography>
            <Button variant="contained" onClick={() => logout()}>
              Logout
            </Button>
          </Stack>
        ) : (
          <Stack spacing={2} m={2}>
            <Button
              variant="contained"
              href={'/login'}
              component={BrothLink}
              onClick={handleDrawerClose}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              href={'/signup'}
              component={BrothLink}
              onClick={handleDrawerClose}
              sx={{
                backgroundColor: 'white',
              }}
            >
              Create Account
            </Button>
          </Stack>
        )}
        {isLogin() && (
          <DrawerItems headerText="Your Account" items={authenticatedDrawer} />
        )}
        <DrawerItems
          headerText="General Information"
          items={publicDrawerItems}
        />
      </Box>
    </Drawer>
  );
}
