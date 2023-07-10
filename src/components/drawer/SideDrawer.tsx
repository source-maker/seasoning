import { useAuth } from '@/hooks/useAuth';
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
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useTranslation } from 'next-i18next';

export function SideDrawer() {
  const { open, setOpen } = useContext(DrawerContext);
  const { data: currentUser } = useCurrentUser();
  const { isLogin, logout, isAdmin } = useAuth();
  const { t } = useTranslation('drawer');

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const publicDrawerItems: DrawerItem[] = [
    {
      title: t('home'),
      href: '/',
      icon: 'home',
    },
    {
      title: t('terms_of_service'),
      href: '/',
      icon: 'textSnippet',
    },
    {
      title: t('privacy_policy'),
      href: '/',
      icon: 'help',
    },
    {
      title: t('contact'),
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
      title: t('my_page'),
      href: '/mypage',
      icon: 'person',
    },
    {
      title: t('account_settings'),
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
              {t('logout_btn')}
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
              {t('login_btn')}
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
              {t('create_account_btn')}
            </Button>
          </Stack>
        )}
        {isLogin() && (
          <DrawerItems
            headerText={t('header_your_account')}
            items={authenticatedDrawer}
          />
        )}
        <DrawerItems
          headerText={t('header_general_info')}
          items={publicDrawerItems}
        />
      </Box>
    </Drawer>
  );
}
