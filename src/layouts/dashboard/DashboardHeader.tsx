import AppBarAdvance from '@/components/appbar/AppBarAdvance';
import { BrandLogo } from '@/components/asset/BrandLogo';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { useState, useContext } from 'react';
import { DrawerContext } from '@/providers/DrawerProvider';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NotesIcon from '@mui/icons-material/Notes';
import BrothLink from '@/components/link/BrothLink';
import LanguageSwitcherButton from '@/components/button/LanguageSwitcherButton';
import { useTranslation } from 'next-i18next';

import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
} from '@mui/material';

export function DashboardHeader({ title }: { title?: string }) {
  const [toggleBackButton] = useState(false);
  const { isLogin, logout } = useAuth();
  const router = useRouter();
  const { setOpen } = useContext(DrawerContext);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { t } = useTranslation('common');

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBarAdvance
      title={title || t('app_name')}
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
      rightMenu={
        <Stack direction="row" alignItems={'center'} spacing={2}>
          <LanguageSwitcherButton />
          {isLogin() ? (
            <>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Profile" />
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
                <MenuItem
                  onClick={() => {
                    router.push('/mypage/account');
                    handleCloseUserMenu();
                  }}
                >
                  {t('common:profile')}
                </MenuItem>
                <MenuItem onClick={async () => await logout()}>
                  {t('common:logout')}
                </MenuItem>
              </Menu>
            </>
          ) : (
            <BrothLink href="/signup" color={'#FFF'} underline={'none'}>
              <Button color="inherit">{t('common:create_account')}</Button>
            </BrothLink>
          )}
        </Stack>
      }
    />
  );
}
