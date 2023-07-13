import { DashboardLayout } from '@/layouts/dashboard/DashboardLayout';
import { Box, Container } from '@mui/material';
import { useRouter } from 'next/router';
import { BrandLogo } from '@/components/asset/BrandLogo';
import { LoginForm } from '@/features/authorization/LoginForm';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';
import { useEffect } from 'react';
import { MuiTypography } from '@/components/typography/MuiTypography';
import BrothLink from '@/components/link/BrothLink';
import { NextPageWithLayout } from '@/types/types';

const BizLogin: NextPageWithLayout = () => {
  const { isLogin, isAdmin } = useAuth();
  const [currentLoggedIn, setCurrentLoggedIn] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (isLogin() && isAdmin()) {
      setCurrentLoggedIn(true);
      return;
    }
    setCurrentLoggedIn(false);
  }, [isAdmin, isLogin]);

  // handle if user is already logged in
  useEffect(() => {
    if (!currentLoggedIn) return;
    if (router.query['returnUrl']) {
      router.push(router.query['returnUrl'] as string);
      return;
    }
    router.push('/biz');
  }, [currentLoggedIn, router]);

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flex={1}
        flexDirection="column"
        justifyContent="center"
      >
        <BrandLogo />
        <MuiTypography variant="h3" component="h1" textAlign="center" baseline>
          Sign in to your account
        </MuiTypography>
        <MuiTypography variant="body1" textAlign="center">
          Or <BrothLink href="#">start your 14-day free trial</BrothLink>
        </MuiTypography>
        <LoginForm callBackPath="/biz" isBizLogin={true} />
      </Box>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default DashboardLayout(BizLogin, { title: 'Business Login' });
